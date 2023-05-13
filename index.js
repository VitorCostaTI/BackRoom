// Inicialização App

const express = require('express');
const app = express();

// Logo

const logo = require('./Assets/js/logo');

// Conexão com DB

const connection = require('./Config/database'); 

const Models = require('./Model/Models'); 

connection.authenticate().then(() => {
    console.log("Banco conectado com sucesso!!");
}).catch(() => {
    console.log("Falha ao conectar no banco de dados!!");
});

// Rotas

const auditoriaRoute = require('./Routes/api/AuditoriaRouter');

app.use('/api/auditoria', auditoriaRoute);

// Configurações do servidor

let port = 8080;

app.listen(port, ()=>{
    console.log("");
    console.log("Servidor iniciado com sucesso, você pode acessa-lo através da URL http://localhost:" + port);
    console.log("");

})