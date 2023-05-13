const Sequelize = require('sequelize');
const connection = new Sequelize('showroom', 'root', 'Vitor@t3c',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;