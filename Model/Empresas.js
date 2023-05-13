const Sequelize = require('sequelize');
const connection = require('../Config/database');

const Empresas = connection.define('empresas', {
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
        allowNull:false
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
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'estados', 
          key: 'id',
        }
    },
    pais:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'pais', 
          key: 'id',
        }
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

Empresas.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de fornecedores :(")
})

module.exports = Empresas;