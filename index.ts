'use strict';
require('dotenv').config();
const express = require('express');
const connection = require('./database/connection.ts')

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

//Gestire il testa della connessione al db
try {
connection.authentication()
} catch (error) {}

app.listen(process.env.PORT, process.env.HOST);
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);