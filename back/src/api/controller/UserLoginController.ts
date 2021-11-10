import express from "express";
import { UserLogin, UserSignup } from "../dto/UserLogin"

import * as UserService from '../../database/services/UserService'

const bcrypt = require('bcrypt');


export const login = async (userInput: UserLogin) => {
    try {
        const user = await UserService.getByEmail(userInput.email);
        if (await bcrypt.compare(userInput.password, user.password)) {
            return user;
        }
    } catch { }
    return undefined;
}

export const signup = async (user: UserSignup) => {

    return await UserService.create(user);
}

