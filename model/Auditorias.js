const Sequelize = require('sequelize');
const connection = require('../config/database');

const Auditoria = connection.define('auditoria', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    colaborador:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model: 'colaboradores',
            key: 'id'
        }
    },
    acao:{
        type: Sequelize.STRING,
        allowNull:false
    },
    data:{
        type: Sequelize.DATE,
        allowNull:false
    },
});

Auditoria.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de auditoria :(")
})

module.exports = Auditoria;