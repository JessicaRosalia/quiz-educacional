import { DataTypes, Model } from 'sequelize'
import { sequelize } from '.'

export interface AnswerAttributes {
    userId: number,
    questionId: number,
    optionId: number,
    correct: boolean,
}

export interface AnswerInput extends AnswerAttributes { }
export interface AnswerOutput extends Required<AnswerAttributes> { }

export class Answer extends Model<AnswerAttributes, AnswerInput> implements AnswerAttributes {
    public userId!: number;
    public questionId!: number;
    public optionId!: number;
    public correct!: boolean;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Answer.init({
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    questionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    optionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    timestamps: true,
    sequelize,
    paranoid: true
})
