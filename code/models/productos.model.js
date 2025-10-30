const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'productos',
  timestamps: true
});

module.exports = Producto;