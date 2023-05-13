const Sequelize = require('sequelize');
const connection = require('../Config/database');

const Clientes = connection.define('clientes', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    cliente:{
        type: Sequelize.STRING,
        allowNull:false
    },
    empresa:{
        type: Sequelize.INTEGER,
        references: {
          model: 'empresas', 
          key: 'id',
        }
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull:false
    },
    rua:{
        type: Sequelize.STRING,
        allowNull:false
    },
    numero:{
        type: Sequelize.STRING,
        allowNull:true
    },
    bairro:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull:false
    },
    estado:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'estados', 
          key: 'id',
        }
    },
    pais:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'pais', 
          key: 'id',
        }
    },
    complemento:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    status:{
        type: Sequelize.BOOLEAN,
        allowNull:false
    },
});

Clientes.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de departamentos :(")
})

module.exports = Clientes;