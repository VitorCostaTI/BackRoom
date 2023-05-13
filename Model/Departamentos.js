const Sequelize = require('sequelize');
const connection = require('../Config/database');

const Departamentos = connection.define('departamentos', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    departamento:{
        type: Sequelize.STRING,
        allowNull:false
    },
    permissoes:{
        type: Sequelize.STRING,
        allowNull:false
    },
});

Departamentos.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de departamentos :(")
})

module.exports = Departamentos;