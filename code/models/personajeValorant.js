const {DataTypes} = require ("sequelize")
const sequelize = require('../config/db.config');

const Personaje  = sequelize.define('Personaje',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Ability1:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    Ability2:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description:{
        type: DataTypes.STRING,
        allowNull: true,
    }
    
}, {
  tableName: 'valorantChamps',
  timestamps: true
});

module.exports = Personaje;