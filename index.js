'use strict';

const express = require('express');
const Pool = require('pg').Pool
const pool = new Pool()

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

const getUserById = (request, response) =>{
  pool.query("SELECT * from utenti", (error, result)=> {
      if(error) 
          throw error
      response.status(200).json(result.rows);
  })
}

app.get('/users', getUserById);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);