const express = require('express');
const app = express();

const logo = require('./assets/js/logo');

let port = 8080;

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

const connection = require('./config/database');

const Models = require('./model/Models')

connection.authenticate().then(() =>{
    console.log("Conexão realizada com sucesso")
}).catch(() => {
    console.log("Não deu certo!!")
})

app.listen(port, ()=>{
    console.log("");
    console.log("Servidor iniciado com sucesso, você pode acessa-lo através da URL http://localhost:" + port);
    console.log("");

})