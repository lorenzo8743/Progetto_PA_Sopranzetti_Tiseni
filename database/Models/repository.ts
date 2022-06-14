import { IRepositoy } from "./reposotoryInterface";
import { User } from "./DAOs/userDAO";
import { Document } from "./DAOs/documentDAO";
import { SignProcess } from "./DAOs/signProcessDAO";
const sequelize = require("../connection")

//TODO: capire come gestire correttamente gli errori e cosa ritornare indietro al controller in caso di errori
//TODO: aggiungere i tipi di ritorno in or per gestire meglio gli errori (da provare)

/** 
 * Classe per la gestione del repository pattern per l'accesso al database
*/
export class repository implements IRepositoy {

    /**
     * Questa funzione restituisce un booleano che indica quale è lo stato del processo di firma
     * di un documento.
     * @param document_id 
     * @returns Promise<boolean>
     */
    async getSignProcessStatus(document_id: number, codice_fiscale_richiedente: string): Promise<boolean|null>{
        //TODO: completare il controllo sul codice fiscale del richiedente per vedere se può prendere lo stato del processo di firma
        let document = await Document.findOne({
            attributes: ['stato_firma'],
            where: {
                id: document_id
            }
        })
        return document
    }

    async consumeToken(codice_fiscale: string, token_number: number){
        await User.increment({
            numero_token: -token_number
        },
        {
            where: { codice_fiscale: codice_fiscale}
        })
    }

    async cancelSignProcess(document_id: number, codice_fiscale_richiedente: string) {
        // TODO: controllare se è l'utente richiedente con quel particolare codice fiscale è tra i firmatari del processo
        await sequelize.transaction(async (t)=>{
            await Document.destroy({
                where: {
                    id: document_id
                }
            }, {transaction: t}),
            await SignProcess.destroy({
                where: {
                    id_documento: document_id
                }
            }, {transaction: t})
        })
    }

    async makeMultipleSign(document_URI: string, document_name: string, numero_firmatari: string, codice_fiscale_richiedente: string, ...codici_fiscali_firmatari: string[]) {
        var signList: object[]
        Document.create({
            uri_non_firmato: document_URI,
            nome_documento: document_name,
            numero_firmatari: numero_firmatari,
            stato_firma: false,
            codice_fiscale_richiedente: codice_fiscale_richiedente
        })
        .then(async (result)=>{
            codici_fiscali_firmatari.forEach(element => {
                let signProcess = {
                    codice_fiscale_firmatario: element,
                    id_documento: result.id,
                    stato: false
                } 
                signList.push(signProcess);
            });
            await SignProcess.bulkCreate({
                signList
            })
        })
        .catch((err)=>{})
    }

    async getChallengingString(codice_fiscale: string, challengingNumbers: number[]): Promise<string[]> {
        let user = await User.findOne({
            attributes: ['challenging_codes'],
            where: {
                codice_fiscale: codice_fiscale
            }
        })
        let challenginArray = user.challenging_codes.match(/.{3}/g);
        let challenging_string: string[] = challenginArray[challengingNumbers[0]];
        challenging_string.push(challenginArray[challengingNumbers[1]])
        return challenging_string
    }

    async refillUserToke(user_email: string, adding_token: number): Promise<number> {
        let user = await User.increment({
            numero_token: adding_token
        },
        {
            where: { email_address: user_email}
        })
        return user.numero_token
    }

    async getSignedDocument(codice_fiscale_richiedente: string, document_id: number): Promise<string>{
        let firmatari: string[] = []

        let document = await Document.findOne({
            where: {
                id: document_id
            }
        })
        if (document.codice_fiscale_richiedente !== null)
            firmatari.push(document.codice_fiscale_richiedente)

        let signers = await SignProcess.findAll({
            where: {
                id_documento: document_id
            }
        })
        if (signers !== null)
            firmatari.push(signers)
        
        if (codice_fiscale_richiedente in firmatari)
            return document.uri_firmato
        else
            return ''
    }

    async makeSingleSign(document_URI: string, document_name: string, codice_fiscale_richiedente: number) {
        await Document.create({
            uri_non_firmato: document_URI,
            nome_documento: document_name,
            numero_firmatari: 1,
            stato_firma: false,
            codice_fiscale_richiedente: codice_fiscale_richiedente
        })
    }
}

