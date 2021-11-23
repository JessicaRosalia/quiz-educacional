import { Router, Request, Response, NextFunction } from 'express'
import { body } from 'express-validator';
import { validateErrors, errorWreaper } from "../../utils";

import * as userController from '../controller/UserController'

const userRouter = Router()

userRouter.get('/me',
    body("user_id").exists().withMessage('missing parameter').isNumeric().withMessage("must be an integer"),
    validateErrors("user signup error"),
    errorWreaper(async (req: Request, res: Response) => {
        const user = await userController.me(req.body.user_id)
        res.json(user);
    }),
)

export default userRouter