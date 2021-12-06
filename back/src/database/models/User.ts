import { CreateOptions, DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '.'
import bcrypt from "bcrypt";
import { HookReturn } from 'sequelize/types/lib/hooks';

type UserType = "professor" | "student"

export interface UserAttributes {
    id: number,
    name: string,
    cpf: string,
    email: string,
    password: string,
    type: UserType,
    phoneNumber?: string,
    schoolName?: string,
    schoolMat?: string
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOuput extends Required<UserAttributes> { }

export class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number
    public name!: string
    public cpf!: string
    public email!: string
    public phoneNumber!: string
    public schoolName!: string
    public password!: string
    public type!: UserType
    public schoolMat!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    schoolName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    schoolMat: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM,
        values: ["professor", "student"],
        defaultValue: "student",
        allowNull: false
    },
}, {
    timestamps: true,
    sequelize,
    paranoid: true
})

const validateUser = async (user: User, options: CreateOptions<UserAttributes>) => {
    if (user === null) {
        throw new Error('No found employee');
    }
    if (user.changed('password'))
        user.password = await bcrypt.hash(user.password, 8);
}

User.beforeCreate("update_password", validateUser);

User.beforeUpdate("update_password", validateUser);

User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());

    if(values.type === "student") delete values.schoolMat

    delete values.password;
    return values;
}