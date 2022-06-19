const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    {
        host: 'wb39lt71kvkgdmw0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
        username: 'r9brd2hh2ccx77v7',
        password: 'f7yw5n028ppph8t',
        database: 'sfq7b796jwmef43l',
        port: 3306,
        dialectOptions:{
            ssl: {
                rejectUnauthorized: false
            }
        }
    });

module.exports = sequelize;