'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./route')

// App
const app = express();

// Righe aggiunte per accettare richieste da un client come postman
app.use(bodyParser.json()); 
app.use((req, res, next) => {    
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');    
    next();
});

app.use('/', router);

app.listen(process.env.PORT, process.env.HOST);
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);