import { Sequelize } from "sequelize/types";
export const sequelize = new Sequelize('progettopa', 'postgres', 'postgres',{
  host: 'dbpa',
  dialect: 'postgres'
})