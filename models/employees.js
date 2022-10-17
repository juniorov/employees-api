const {Sequelize,DataTypes} = require("sequelize");
const sequelize = require('../database/config');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    salary: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Employee;