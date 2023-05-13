const Sequelize = require('sequelize');
const connection = require('../Config/database');

const Produtos = connection.define('produtos', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
        allowNull:false
    },
    manutencao:{
        type: Sequelize.DATE,
        allowNull:false
    },
    tManutencao:{
        type: Sequelize.STRING,
        allowNull:false
    },
    status:{
        type: Sequelize.BOOLEAN,
        allowNull:false
    },
    observacao:{
        type: Sequelize.TEXT,
        allowNull:true
    },
});

Produtos.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela  de produtos :(")
})

module.exports = Produtos;