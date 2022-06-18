const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
    {
        host: 'ec2-52-44-13-158.compute-1.amazonaws.com',
        dialect: 'postgres',
        username: 'kmfxrohjrzteyb',
        password: '262143bab6173ffaa9b14bebf7010861bfbd881fbfcee538b1688170af8a9342',
        database: 'd6h54uig36dchk',
        port: 5432,
        dialectOptions:{
            ssl: {
                rejectUnauthorized: false
            }
        }
    });

module.exports = sequelize;