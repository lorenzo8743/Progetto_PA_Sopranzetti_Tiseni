const { DataTypes } = require('sequelize')
const sequelize = require('./database/connection.ts')
let User = require('./userDAO')

export const Document = sequelize.define('Documenti', {
    codice_fiscale_richiedente: {
        type: DataTypes.CHAR(16),
        allowNull: false
    },
    uri_firmato: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    uri_non_firmato: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    numero_firmatari: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome_documento: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    stato_firma: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    tablename: 'Documenti'
})

Document.belongsTo(User, {
    foreignKey: "codice_fiscale_richiedente",
    targetKey: "codice_fiscale"
})