import { SignProcess } from "./signProcessDAO"
import { sequelize } from "../../connection"
import { DataTypes } from "sequelize/types"
import { Document } from "./documentDAO"
import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare codice_fiscale: string;
    declare email_address: string;
    declare numero_token: number;
    declare common_name: string;
    declare country_name: string;
    declare state_or_province: string;
    declare locality: string;
    declare organization: string;
    declare organizational_unit: string;
    declare SN: string;
    declare challenging_codes: string;
} 

User.init({
        codice_fiscale: {
            type: DataTypes.CHAR(16),
            primaryKey: true
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
        sequelize,
        tableName: 'utenti'
})
User.hasMany(SignProcess,{
    foreignKey: 'codice_fiscale_firmatario'
})

User.hasMany(Document,{
    foreignKey: 'codice_fiscale_richiedente'
})