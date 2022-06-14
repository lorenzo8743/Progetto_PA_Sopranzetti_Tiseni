const sequelize = require('../connection.ts')
export interface IRepositoy {
    //ritorna lo stato di un processo di firma di un particolare documento
    getSignProcessStatus(document_id: number)
    //consuma il token di un utente che ha effettuato la richiesta di firma e ritorna il numero di token rimanenti
    cosumeToken(codice_fiscale: string, token_number: number)
    //annulla il processo di firma di un determinato documento
    cancelSignProcess(document_id: number)
    //inizia il processo di firma multipla e inserisce il documento associato a questo processo
    makeMultipleSign(document_URI: string, document_name: string, numero_firmatari: string, codice_fiscale_richiedente: string,  ...codici_fiscali_firmatari: string[])
    //recupera la stringa di challenging in base ai numeri forniti
    getChallengingString(codice_fiscale: string, challengingNumbers: number[]): string[2]
    //ricarica i token di un determinato utente con una certa mail e restituisce il numero di token 
    refillUserToke(user_email: string): number
    //recupera un documento firmato in base al suo id
    getSignedDocument(document_id: number): string
    //avvia il processo di firma singola e inserisce il documento associato a quel processo nel db
    makeSingleSign(document_URI: string, document_name: string, codice_fiscale_richiedente: number)
    //inserire anche createUser?
}