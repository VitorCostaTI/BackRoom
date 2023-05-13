const Sequelize = require('sequelize');
const connection = require('../config/database');

const Departamentos = connection.define('departamentos', {
    departamento:{
        type: Sequelize.STRING,
        allowNull:false
    },
    permissoes:{
        type: Sequelize.TEXT,
        allowNull:false
    },
});

Departamentos.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela :(")
})

module.exports = Departamentos;