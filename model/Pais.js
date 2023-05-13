const Sequelize = require('sequelize');
const connection = require('../config/database');

const Pais = connection.define('pais', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    pais:{
        type: Sequelize.STRING,
        allowNull:false
    },
});

Pais.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de pais :(")
})

module.exports = Pais;