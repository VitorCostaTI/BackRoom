const Sequelize = require('sequelize');
const connection = require('../Config/database');

const Categorias = connection.define('categorias', {
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

Categorias.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de  :(")
})

module.exports = Categorias;