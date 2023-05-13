const Sequelize = require('sequelize');
const connection = require('../config/database');

const Colaboradores = connection.define('colaboradores', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    photo:{
        type: Sequelize.DataTypes.BLOB,
        allowNull:false
    },
    matricula:{
        type: Sequelize.STRING,
        allowNull:false
    },
    colaborador:{
        type: Sequelize.STRING,
        allowNull:false
    },
    rg:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull:false
    },
    departamento:{
        type: Sequelize.STRING,
        allowNull:false
    },
    pis:{
        type: Sequelize.STRING,
        allowNull:false
    },
    rua:{
        type: Sequelize.STRING,
        allowNull:false
    },
    numero:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    cidade:{
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
});

Colaboradores.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela :(")
})

module.exports = Colaboradores;