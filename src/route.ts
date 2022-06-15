import { repository } from './database/Models/repository';
import Express, { Request, Response } from 'express';
const router = Express.Router();
import {Pool} from 'pg'

const repo = new repository()
const pool = new Pool()

const createUser = (request: any, response: any) => {
    let utente = request.body;
    console.log(utente);
    if(utente){
        pool.query("INSERT INTO utenti (codice_fiscale, email_address, numero_token, common_name, country_name, state_or_province, locality,organization, organizational_unit, SN, challenging_codes) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11);", 
        [utente.codice_fiscale, utente.email_address, utente.numero_token, utente.common_name, 
            utente.country_name, utente.state_or_province, utente.locality, utente.organization, 
            utente.organizational_unit, utente.SN, utente.challenging_codes], (error, result)=> {
            if(error) 
                throw error
            response.status(201).json(result.rows);
        })
    }
}

const updateUser = (request: any, response: any) => {
    let locality:string = request.body.locality;
    let codice_fiscale:string = request.body.codice_fiscale
    pool.query("UPDATE utenti SET locality = $2 WHERE codice_fiscale = $1;", 
    [codice_fiscale, locality,], (error, result)=> {
        if(error) 
            throw error
        response.status(201).json(result.rows);
    })
}

router.get('/', (req, res) => {
    res.send('Hello pippo');
});

router.get('/test', (req: Request, res: Response) => {
    repo.test().then((result) => {
        res.send(result)
    })
} )

router.post('/creaUtente/', createUser);

router.post('/modificaUtente/', updateUser);

export default router