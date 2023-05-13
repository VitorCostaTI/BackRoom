const Sequelize = require('sequelize');
const connection = require('../Config/database');

const Estoque = connection.define('estoque', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    produto:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model: 'produtos',
            key: 'id'
        }
    },
    empresa:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model: 'empresas',
            key: 'id'
        }
    },
    departamento:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model: 'departamentos',
            key: 'id'
        }
    },
    quantidade:{
        type: Sequelize.STRING,
        allowNull:false
    },
});

Estoque.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de departamentos :(")
})

module.exports = Estoque;