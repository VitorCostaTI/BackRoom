const Sequelize = require('sequelize');
const connection = require('../config/database');

const OrdemServicos = connection.define('ordemServicos', {
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
    titulo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    departamento:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model: 'departamentos',
            key: 'id'
        }
    },
    data:{
        type: Sequelize.DATE,
        allowNull:false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull:false
    },
});

OrdemServicos.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de auditoria :(")
})

module.exports = OrdemServicos;