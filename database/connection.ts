const {Sequelize} = require('sequelize');
const connect = async () => { 
    const sequelize = new Sequelize('progettopa', 'postgres', 'postgres',{
      host: 'dbpa',
      dialect: 'postgres'
    })
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      return sequelize
    }


module.exports = connect