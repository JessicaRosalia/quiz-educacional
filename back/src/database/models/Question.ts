import { CreateOptions, DataTypes, HasManyAddAssociationMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManySetAssociationsMixin, HasOneSetAssociationMixin, Model, Optional } from 'sequelize'
import { sequelize } from '.'
import { Option } from './Option'

export interface QuestionAttributes {
    id: number,
    prompt: string,
    // answerId: number,
}

export interface QuestionInput extends Optional<QuestionAttributes, 'id'> { }
export interface QuestionOuput extends Required<QuestionAttributes> { }

export class Question extends Model<QuestionAttributes, QuestionInput> implements QuestionAttributes {
    public id!: number
    public prompt!: string
    // public answerId!: number


    public getOptions!: HasManyGetAssociationsMixin<Option>
    public addOptions!: HasManyAddAssociationMixin<Option[], number>;
    public createOptions!: HasManyCreateAssociationMixin<Option>

    public setAnswer!: HasOneSetAssociationMixin<Option, number>

    public readonly options?: Option[];

    public readonly answer?: Option;


    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Question.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    prompt: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    sequelize,
    paranoid: true
})

Question.hasMany(Option, {
    sourceKey: "id",
    foreignKey: "questionId",
    as: "options"
});
// This adds documentId attribute to Option
Question.belongsTo(Option, {
    as: 'answer',
    foreignKey: 'answerId',
    constraints: false,
});

Question.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());

    if (process.env.NODE_ENV === "production") delete values.answerId;
    return values;
}
