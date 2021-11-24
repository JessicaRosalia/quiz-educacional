import { Router, Request, Response, NextFunction } from 'express'
import { body } from 'express-validator';
import { validateErrors, errorWreaper } from "../../utils";

import * as userController from '../controller/UserController'

const userRouter = Router()

userRouter.get('/me',
    errorWreaper(async (req: Request, res: Response) => {
        const user = await userController.me(req.body.user_id)
        res.json(user);
    }),
)

export default userRouter