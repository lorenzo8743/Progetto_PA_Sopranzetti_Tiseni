const { json } = require('express');
const express = require('express');
const router = express.Router();

const Pool = require('pg').Pool
const pool = new Pool()
const getUserById = (request, response) =>{
    const codice_fiscale = parseInt(request.params.codice_fiscale);
    pool.query("SELECT * from utenti WHERE id = $1", [id], (error, result)=> {
        if(error) 
            throw error
        response.status(200).json(result.rows);
    })
}

const createUser = (request, response) => {
    var utente = request.body;
    console.log(utente);
    pool.query("INSERT INTO utenti (codice_fiscale, email_address, numero_token, common_name, country_name, state_or_province, locality,organization, organizational_unit, SN, challenging_codes) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11);", 
    [utente.codice_fiscale, utente.email_address, utente.numero_token, utente.common_name, 
        utente.country_name, utente.state_or_province, utente.locality, utente.organization, 
        utente.organizational_unit, utente.SN, utente.challenging_codes], (error, result)=> {
        if(error) 
            throw error
        response.status(201).json(result.rows);
    })
}

const updateUser = (request, response) => {
    var locality = request.body.locality;
    var codice_fiscale = request.body.codice_fiscale
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

router.get("/utenti/:codice_fiscale", getUserById);

router.post('/creaUtente/', createUser);

router.post('/modificaUtente/', updateUser);

module.exports = router;