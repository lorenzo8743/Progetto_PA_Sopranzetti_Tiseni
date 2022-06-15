const {Sequelize} = require('sequelize');
export const sequelize = new Sequelize('progettopa', 'postgres', 'postgres',{
  host: 'dbpa',
  dialect: 'postgres'
})

module.exports = sequelize