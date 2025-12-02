const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'C:\Users\iammi\Desktop\web recap\sem10\sqlite\database.db'
});

module.exports = sequelize;