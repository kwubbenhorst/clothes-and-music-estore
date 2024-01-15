// This file is used for creating and configuring the connection the the mySQL database ecommerce_db.  It uses environment variable to conceal database credentials. The values expressed in variables here are found in the .env file which is not tracked on github
require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
  dialectOptions: {
    decimalNumbers: true,
  },
});

// the sequelize connection is exported here and imported by server.js (main entry point file) where synching method is run

module.exports = sequelize;
