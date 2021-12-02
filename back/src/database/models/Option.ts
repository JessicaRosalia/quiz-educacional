import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '.'
import { Question } from './Question';

export interface OptionAttributes {
    id: number,
    body: string
}

export interface OptionInput extends Optional<OptionAttributes, 'id'> { }
export interface OptionOutput extends Required<OptionAttributes> { }

export class Option extends Model<OptionAttributes, OptionInput> implements OptionAttributes {
    public id!: number
    public body!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Option.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    sequelize,
    paranoid: true
})
