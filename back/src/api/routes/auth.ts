import { Router, Request, Response, NextFunction } from 'express'
import { body } from 'express-validator';
import { validateErrors, errorWreaper } from "../../utils";

import * as userLoginController from '../controller/UserLoginController'
import { UserLogin, UserSignup } from '../dto/UserLogin';

const authRouter = Router()

authRouter.post('/login',
    body('email').exists().withMessage('missing parameter').isEmail().normalizeEmail().withMessage('must be an email'),
    body('password').exists().withMessage('missing parameter').isLength({ min: 6 }).withMessage('must have at least 6 characters'),
    validateErrors("user login error"),
    errorWreaper(async (req: Request, res: Response, next: NextFunction) => {
        const userInput = req.body as UserLogin;
        const user = await userLoginController.login(userInput);
        if (user === undefined) {
            throw new Error("wrong user or passowrd");
        }
        user.password = "";
        res.json(user);
    }),
)


authRouter.post('/signup',
    body('name').exists().withMessage('missing parameter'),
    body('cpf').exists().withMessage('missing parameter'),
    body('email').exists().withMessage('missing parameter').isEmail().normalizeEmail().withMessage('must be an email'),
    body('password').exists().withMessage('missing parameter').isLength({ min: 6 }).withMessage('must have at least 6 characters'),
    validateErrors("user signup error"),
    errorWreaper(async (req: Request, res: Response, next: NextFunction) => {
        const userInput = req.body as UserSignup;
        const user = await userLoginController.signup(userInput);
        res.json(user);

    }),
)

export default authRouter