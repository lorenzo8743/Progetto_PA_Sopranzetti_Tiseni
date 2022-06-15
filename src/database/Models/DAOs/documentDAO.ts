import { SignProcess } from "./signProcessDAO"
import { User } from "./userDAO"
import { Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin } from "sequelize";
import { sequelize } from "../../connection"
import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class Document extends Model<InferAttributes<Document>, InferCreationAttributes<Document>> {
    declare id: CreationOptional<number>;
    declare codice_fiscale_richiedente: string;
    declare uri_firmato: CreationOptional<string>;
    declare uri_non_firmato: string;
    declare numero_firmatari: number;
    declare nome_documento: string;
    declare stato_firma: boolean;
} 

Document.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
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
    sequelize,
    tableName: 'documenti',
    updatedAt: false
})

/*
Document.belongsTo(User, {
    foreignKey: "codice_fiscale_richiedente",
    targetKey: "codice_fiscale"
})

Document.hasMany(SignProcess,{
    foreignKey: 'id_documento'
})
*/