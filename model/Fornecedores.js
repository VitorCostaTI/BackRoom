const Sequelize = require('sequelize');
const connection = require('../config/database');

const Fornecedores = connection.define('fornecedor', {
    empresa:{
        type: Sequelize.STRING,
        allowNull:false
    },
    nomeFantasia:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    cnpj:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    iEStadual:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    iFederal:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    rua:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    bairro:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    cidade:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    estado:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    pais:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    complemento:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    status:{
        type: Sequelize.BOOLEAN,
        allowNull:false
    },
});

Fornecedores.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela :(")
})

module.exports = Fornecedores;