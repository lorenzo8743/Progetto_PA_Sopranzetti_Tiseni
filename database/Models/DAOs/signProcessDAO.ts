const { DataTypes } = require('sequelize')
const sequelize = require('./database/connection.ts')
let User = require('./userDAO')

export const SignProcess = sequelize.define('ProcessiFirma', {
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
    tablename: "ProcessiFirma"
})

SignProcess.belongsTo(User, {
    foreignKey: 'codice_fiscale_firmatario',
    targetKey: 'codice_fiscale'
})