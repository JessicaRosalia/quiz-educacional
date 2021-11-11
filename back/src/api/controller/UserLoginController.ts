import express from "express";
import { UserLogin, UserSignup } from "../dto/UserLogin"

import * as UserService from '../../database/services/UserService'

import bcrypt from "bcrypt";

export const login = async (userInput: UserLogin) => {
    console.log(await bcrypt.hash("admin", 8));
    const user = await UserService.getByEmail(userInput.email);
    if (await bcrypt.compare(userInput.password, user.password)) {
        return user;
    } else {
        throw new Error("wrong user or passowrd ");
    }
}

export const signup = async (user: UserSignup) => {

    return await UserService.create(user);
}

