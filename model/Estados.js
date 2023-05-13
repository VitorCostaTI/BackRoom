const Sequelize = require('sequelize');
const connection = require('../config/database');

const Estados = connection.define('estados', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    estado:{
        type: Sequelize.STRING,
        allowNull:false
    },
});

Estados.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de estados :(")
})

module.exports = Estados;