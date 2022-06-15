import { sequelize } from "../../connection"
import { Document } from "./documentDAO"
import { User } from "./userDAO"
import { DataTypes } from "sequelize";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class SignProcess extends Model<InferAttributes<SignProcess>, InferCreationAttributes<SignProcess>> {
    declare codice_fiscale_firmatario: string;
    declare id_documento: number
    declare stato: boolean;
} 

SignProcess.init({
    codice_fiscale_firmatario: {
        type: DataTypes.CHAR(16),
        primaryKey: true
    },
    id_documento: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    stato: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
},{
    sequelize,
    tableName: "ProcessiFirma"
})

SignProcess.belongsTo(User, {
    foreignKey: 'codice_fiscale_firmatario',
    targetKey: 'codice_fiscale'
})
SignProcess.belongsTo(Document, {
    foreignKey: 'id_documento',
    targetKey: 'id'
})