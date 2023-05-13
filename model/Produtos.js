const Sequelize = require('sequelize');
const connection = require('../config/database');

const Produtos = connection.define('produtos', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    patrimonio:{
        type: Sequelize.STRING,
        allowNull:false
    },
    produto:{
        type: Sequelize.STRING,
        allowNull:false
    },
    investimento:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    preco:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },
    validade:{
        type: Sequelize.DATE,
        allowNull:true
    },
    manutencao:{
        type: Sequelize.DATE,
        allowNull:false
    },
    tManutencao:{
        type: Sequelize.STRING,
        allowNull:false
    },
    observacao:{
        type: Sequelize.TEXT,
        allowNull:false
    },
});

Produtos.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela :(")
})

module.exports = Produtos;