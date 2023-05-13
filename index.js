const express = require('express');
const app = express();

const logo = require('./Assets/js/logo');

let port = 8080;

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

const connection = require('./Config/database');

const Models = require('./Model/Models')

connection.authenticate().then(() =>{
    console.log("Banco conectado com sucesso!!")
}).catch(() => {
    console.log("Falha ao conectar no banco de dados!!")
})

app.listen(port, ()=>{
    console.log("");
    console.log("Servidor iniciado com sucesso, você pode acessa-lo através da URL http://localhost:" + port);
    console.log("");

})