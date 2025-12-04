const sequelize = require('../Database/database');
const { DataTypes } = require('sequelize');


const Usuarios = sequelize.define("Usuarios", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, 
    {
        tableName: 'Usuarios',
        timestamps: true
    });

module.exports = Usuarios;