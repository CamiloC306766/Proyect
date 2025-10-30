// config/db.config.js
require('dotenv').config();
const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize(
  process.env.DB_NAME,     // nombre de la base de datos
  process.env.DB_USER,     // usuario
  process.env.DB_PASSWORD, // contraseña
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT, 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false, // desactiva logs SQL
  }
);


module.exports = sequelize;