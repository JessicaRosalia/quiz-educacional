import express from 'express';
import jwt from "jsonwebtoken"

interface AuthData {
    user_id: number,
}

export const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const bearerHeader = req.headers['authorization'];
    const bearerPath = 'Bearer ' + req.query.token;
    const reqBearer = bearerHeader ? bearerHeader : bearerPath;

    if (typeof reqBearer !== 'undefined') {
        //extrai token
        const bearer = reqBearer.split(' ');
        const bearerToken = bearer[1];

        //verifica token
        jwt.verify(bearerToken, process.env.JWT_SECRET, (err, authData: AuthData) => {
            if (err) {
                res.status(403).send({
                    response: "Token inválido",
                });
            } else {
                req.body.user_id = authData.user_id;
                next();
            }
        });
    }
}
