const {DataTypes} = require('sequelize');
const sequelize = require ('../Database/database.js')
const tarefasModel = require('../Model/userModel.js')

const Tarefas = sequelize.define("Tarefas", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeTarefa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    setor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Usuarios",
            key: "id"
        },
    },
    prioridades: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'a fazer'
    }
})
Tarefas.sync({ alter: true });

module.exports = Tarefas;
nomeTarefa: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        is: {
            args: [/^[A-Za-zÀ-ÿ\s]{3,50}$/],
            msg: "Nome do prato deve conter apenas letras e ter entre 3 e 50 caracteres"
        }
    }
}
