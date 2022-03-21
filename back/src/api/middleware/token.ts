import express from "express";
import jwt from "jsonwebtoken";
import { UserType } from "../dto/User";
import * as UserService from '../../database/services/UserService'

interface AuthData {
  user: {
    id: number;
    type: UserType;
    name: string;
  };
}

export function expressAuthentication(
  req: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  const bearerHeader = req.headers.authorization;
  const bearerPath = "Bearer " + req.query.token;
  const reqBearer = bearerHeader ? bearerHeader : bearerPath;
  return new Promise((resolve, reject) => {
    if (securityName !== "jwt") reject("metodo de authenticação não suportado");
    if (typeof reqBearer !== "undefined") {
      // extrai token
      const bearer = reqBearer.split(" ");
      const bearerToken = bearer[1];

      // verifica token
      jwt.verify(
        bearerToken,
        process.env.JWT_SECRET,
        (err, authData: AuthData) => {
          if (err) reject(err);

          UserService.exists(authData.user.id).then(exist => {
            if (!exist) reject(new Error("usuário não existe"));

            req.body.userId = authData.user.id;
            if (!scopes.includes(authData.user.type))
              reject(new Error("usuário sem privilégios"));

            resolve(authData);
          })
        }
      );
    }
  });
}
