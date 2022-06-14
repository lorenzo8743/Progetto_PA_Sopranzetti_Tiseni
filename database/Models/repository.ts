import { IRepositoy } from "./reposotoryInterface";
import { User } from "./DAOs/userDAO";
import { Document } from "./DAOs/documentDAO";
import { SignProcess } from "./DAOs/signProcessDAO";


export class name implements IRepositoy {
    getSignProcessStatus(document_id: number){
       User.findOne({
        attributes: ['stato_firma'],
        where: {
            id: document_id
        } 
       }).then((result) => {
        if (result === null) {
           return {} 
        }
        return result.stato_firma
       }).catch((err) => {
        return {}
       });
    }

    cosumeToken(codice_fiscale: string, token_number){

    }
    cancelSignProcess(document_id: number) {
        throw new Error("Method not implemented.");
    }
    makeMultipleSign(document_URI: string, document_name: string, numero_firmatari: string, codice_fiscale_richiedente: string, ...codici_fiscali_firmatari: string[]) {
        throw new Error("Method not implemented.");
    }
    getChallengingString(codice_fiscale: string, challengingNumbers: number[]): string {
        throw new Error("Method not implemented.");
    }
    refillUserToke(user_email: string): number {
        throw new Error("Method not implemented.");
    }
    getSignedDocument(document_id: number): string {
        throw new Error("Method not implemented.");
    }
    makeSingleSign(document_URI: string, document_name: string, codice_fiscale_richiedente: number) {
        throw new Error("Method not implemented.");
    }
}