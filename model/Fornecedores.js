const Sequelize = require('sequelize');
const connection = require('../config/database');

const Fornecedores = connection.define('fornecedores', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    empresa:{
        type: Sequelize.STRING,
        allowNull:false
    },
    nomeFantasia:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cnpj:{
        type: Sequelize.STRING,
        allowNull:false
    },
    iEStadual:{
        type: Sequelize.STRING,
        allowNull:true
    },
    iFederal:{
        type: Sequelize.STRING,
        allowNull:true
    },
    rua:{
        type: Sequelize.STRING,
        allowNull:false
    },
    numero:{
        type: Sequelize.STRING,
        allowNull:true
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull:false
    },
    estado:{
        type: Sequelize.STRING,
        allowNull:false
    },
    pais:{
        type: Sequelize.STRING,
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