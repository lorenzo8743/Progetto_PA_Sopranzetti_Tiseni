import { Sequelize, ConnectionError, ConnectionTimedOutError, TimeoutError } from "sequelize";

export const sequelize = new Sequelize('progettopa', 'postgres', 'postgres',{
  host: 'dbpa',
  dialect: 'postgres',
  retry: {
    match:[
      ConnectionError,
      ConnectionTimedOutError,
      TimeoutError,
    ],
    max: 3
  }
})

