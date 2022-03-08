import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '.'
import { Option } from './Option'
import { Question } from './Question'


export interface QuestionCategoryAttributes {
    id: number,
    knowledgeArea: string,
    discipline: string
}

export interface QuestionCategoryInput extends Optional<QuestionCategoryAttributes, 'id'> { }
export interface QuestionCategoryOuput extends Required<QuestionCategoryAttributes> { }

export class QuestionCategory extends Model<QuestionCategoryAttributes, QuestionCategoryInput> implements QuestionCategoryAttributes {
    public id!: number
    public knowledgeArea!: string
    public discipline!: string
}

QuestionCategory.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    knowledgeArea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discipline: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    paranoid: true
})
