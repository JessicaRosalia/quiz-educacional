import { DataTypes, HasManyAddAssociationMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManySetAssociationsMixin, HasOneSetAssociationMixin, Model, Optional } from 'sequelize'
import { sequelize } from '.'
import { Option } from './Option'
import { QuestionCategory } from './QuestionCategory';
import { User } from './User'

export interface QuestionAttributes {
    id: number,
    prompt: string,
    // answerId: number,
}

export interface QuestionInput extends Optional<QuestionAttributes, 'id'> { }
export interface QuestionOutput extends Required<QuestionAttributes> { }

export class Question extends Model<QuestionAttributes, QuestionInput> implements QuestionAttributes {
    public id!: number
    public prompt!: string

    public getOptions!: HasManyGetAssociationsMixin<Option>
    public addOptions!: HasManyAddAssociationMixin<Option[], number>;
    public createOptions!: HasManyCreateAssociationMixin<Option>

    public getUser!: HasManyGetAssociationsMixin<User>
    public getCategory!: HasManyGetAssociationsMixin<QuestionCategory>

    public setAnswer!: HasOneSetAssociationMixin<Option, number>
    public setUser!: HasOneSetAssociationMixin<User, number>
    public setCategory!: HasOneSetAssociationMixin<QuestionCategory, number>

    public readonly options?: Option[];

    public readonly answer?: Option;

    public readonly user?: User;

    public readonly category?: QuestionCategory;


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

Question.belongsTo(QuestionCategory, {
    as: 'category',
    foreignKey: 'question_category_id',
    constraints: false,
});

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
Question.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId',
    constraints: false,
});

Question.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());

    if (process.env.NODE_ENV === "production") delete values.answerId;
    return values;
}
