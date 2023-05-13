const Sequelize = require('sequelize');
const connection = require('../config/database');

const Patrimonio = connection.define('patrimonio', {
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
    categoria:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
            model: 'categorias',
            key: 'id'
        }
    },
    monousuario:{
        type: Sequelize.BOOLEAN,
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
    local:{
        type: Sequelize.STRING,
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
        allowNull:false
    },
});

Patrimonio.sync({force: false}).then(() => {
    console.log("tabela criada com sucesso!")
}).catch(() => {
    console.log("falha ao criar tabela de patrimonio :(")
})

module.exports = Patrimonio;