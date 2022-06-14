const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('progettopa', 'postgres', 'postgres',{
  host: 'dbpa',
  dialect: 'postgres'
})

module.exports = sequelize