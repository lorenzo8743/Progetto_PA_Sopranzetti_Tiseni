import { sequelize } from "../../connection"
import { Document } from "./documentDAO"
import { User } from "./userDAO"
import { DataTypes } from "sequelize";

const seq = sequelize

export const SignProcess = seq.define('ProcessiFirma', {
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