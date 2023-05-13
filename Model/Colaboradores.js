const Sequelize = require('sequelize');
const connection = require('../Config/database');

const Colaboradores = connection.define('colaboradores', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    photo:{
        type: Sequelize.DataTypes.BLOB,
        allowNull:true
    },
    matricula:{
        type: Sequelize.STRING,
        allowNull:false
    },
    colaborador:{
        type: Sequelize.STRING,
        allowNull:false
    },
    rg:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull:false
    },
    departamento:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'departamentos', 
          key: 'id',
        }
    },
    pis:{
        type: Sequelize.STRING,
        allowNull:false
    },
    rua:{
        type: Sequelize.STRING,
        allowNull:false
    },
    numero:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    cidade:{
        type: Sequelize.STRING,
        allowNull:false
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
});

Colaboradores.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de colaboradores :(")
})

module.exports = Colaboradores;