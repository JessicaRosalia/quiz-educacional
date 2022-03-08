import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '.'
import { Option } from './Option'
import { Question } from './Question'


export interface QuestionTypeAttributes {
    id: number,
    category: string,
    subject: string
}

export interface QuestionInput extends Optional<QuestionTypeAttributes, 'id'> { }
export interface QuestionOuput extends Required<QuestionTypeAttributes> { }

export class QuestionType extends Model<QuestionTypeAttributes, QuestionInput> implements QuestionTypeAttributes {
    public id!: number
    public category!: string
    public subject!: string
}

QuestionType.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    paranoid: true
})
