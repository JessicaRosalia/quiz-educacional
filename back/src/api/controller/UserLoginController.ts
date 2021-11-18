import { UserLogin, UserSignup } from "../dto/UserLogin"

import * as UserService from '../../database/services/UserService'
import jwt from 'jsonwebtoken';

import bcrypt from "bcrypt";
import { User } from "../dto/User";

export const login = async (userInput: UserLogin) => {
    const user = await UserService.getByEmail(userInput.email);
    if (await bcrypt.compare(userInput.password, user.password)) {
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET)
        return token;
    } else {
        throw new Error("wrong user or passowrd ");
    }
}

export const signup = async (userSignup: UserSignup) => {
    const user = await UserService.create(userSignup);
    return user;
}

