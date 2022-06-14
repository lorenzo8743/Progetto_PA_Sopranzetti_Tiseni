import { SignProcess } from "./signProcessDAO"

const { DataTypes } = require('sequelize')
const sequelize = require('./database/connection.ts')

export const User = sequelize.define("User",{
    codice_fiscale:{
        type: DataTypes.CHAR(16),
        primarykey: true
    },
    email_address:{
        type: DataTypes.STRING(50),
        unique:true,
        allowNull:false 
    },
    numero_token:{
        type: DataTypes.INTEGER,
        allowNull:false 
    },
    common_name:{
        type: DataTypes.STRING(50),
        allowNull:false 
    },
    country_name:{
        type: DataTypes.CHAR(2),
        allowNull:false 
    },
    state_or_province:{
        type: DataTypes.CHAR(2),
        allowNull:false 
    },
    locality:{
        type: DataTypes.STRING(50),
        allowNull:false 
    },
    organization:{
        type: DataTypes.STRING(50),
        allowNull:false 
    },
    organizational_unit:{
        type: DataTypes.STRING(30),
        allowNull:false 
    },
    SN:{
        type: DataTypes.STRING(50),
        allowNull:false 
    },
    challenging_codes:{
        type: DataTypes.CHAR(32),
        allowNull:false 
    }
    },
    {
    tableName: 'utenti'
})
User.hasMany(SignProcess,{
    foreignKey: 'codice_fiscale_firmatario'
})

User.hasMany(Document,{
    foreignKey: 'codice_fiscale_richiedente'
})