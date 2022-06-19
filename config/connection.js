const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    {
        username: DATABASE_USER,
        password: DATABASE_PASS,
        database: DATABASE_NAME,
        host: '120.88.146.119',
        dialect: 'mysql',
        port: 3306,
    });

module.exports = sequelize;