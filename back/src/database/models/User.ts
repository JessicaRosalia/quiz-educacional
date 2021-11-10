import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
const bcrypt = require('bcrypt');

export interface UserAttributes {
    id: number,
    name: string,
    cpf: string,
    email: string,
    phoneNumber?: string,
    schoolName?: string,
    password: string
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
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

const validateUser = async (user: User) => {
    if (user === null) {
        throw new Error('No found employee');
    }
    else if (!user.changed('password')) return user.password;
    else {
        // let salt = bcrypt.genSaltSync();
        // return user.password = bcrypt.hashSync(user.password, salt);
        return user.password = await bcrypt.hash(user.password, 8);
    }
}

User.beforeCreate(validateUser);

User.beforeUpdate(validateUser);