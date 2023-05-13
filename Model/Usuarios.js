const Sequelize = require('sequelize');
const connection = require('../Config/database');

const Usuarios = connection.define('usuarios', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    colaborador:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cSenha:{
        type: Sequelize.STRING,
        allowNull:false
    },
});

Usuarios.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de usuario :(")
})

module.exports = Usuarios;