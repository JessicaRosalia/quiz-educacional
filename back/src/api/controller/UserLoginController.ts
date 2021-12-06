import { UserLogin, UserSignup } from "../dto/UserLogin";
import { Controller, Post, Route, Body } from "tsoa";
import * as UserService from "../../database/services/UserService";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import { User } from "../dto/User";
import { allScopes } from "../../utils";

interface LoginToken {
  token: string;
}

@Route("auth")
export class UserLoginController extends Controller {
  /**
   * Logar usuário.
   * @returns Token JWT.
   */
  @Post("login")
  public async login(@Body() userInput: UserLogin): Promise<LoginToken> {
    const user = await UserService.getByEmail(userInput.email);
    if (await bcrypt.compare(userInput.password, user.password)) {
      const { id, type, name } = user;
      console.log({ user: { id, type, name } });
      const token = jwt.sign(
        { user: { id, type, name } },
        process.env.JWT_SECRET
      );
      return { token };
    } else {
      throw new Error("wrong user or passowrd ");
    }
  }

  /**
   * Cadastro de usuário.
   * @returns Usuário criado.
   */
  @Post("signup")
  public async signup(@Body() userSignup: UserSignup): Promise<User> {
    return UserService.create(userSignup);
  }
}
