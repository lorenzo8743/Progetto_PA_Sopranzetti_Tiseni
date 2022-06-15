
export interface IRepository {
    //ritorna lo stato di un processo di firma di un particolare documento
    getSignProcessStatus(document_id: number): Promise<boolean|null>
    //consuma il token di un utente che ha effettuato la richiesta di firma e ritorna il numero di token rimanenti
    consumeToken(codice_fiscale: string, token_number: number): any
    //annulla il processo di firma di un determinato documento
    cancelSignProcess(document_id: number): void 
    //inizia il processo di firma multipla e inserisce il documento associato a questo processo
    makeMultipleSign(document_URI: string, document_name: string, numero_firmatari: number, codice_fiscale_richiedente: string,  ...codici_fiscali_firmatari: string[]): any
    //recupera la stringa di challenging in base ai numeri forniti
    getChallengingString(codice_fiscale: string, challengingNumbers: number[]): Promise<string[] | null>
    //ricarica i token di un determinato utente con una certa mail e restituisce il numero di token 
    refillUserToke(user_email: string, adding_token: number): Promise<number>
    //recupera un documento firmato in base al suo id
    getSignedDocument(document_id: number): Promise<string|null>
    //avvia il processo di firma singola e inserisce il documento associato a quel processo nel db
    makeSingleSign(document_URI: string, document_name: string, codice_fiscale_richiedente: string): void
    //controlla il permesso di un utente di intervenire su un documento firmato
    checkUserPermission(document_id:number, cf_user: string): Promise<boolean>
}