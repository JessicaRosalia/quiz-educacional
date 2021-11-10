import { Router, Request, Response } from 'express'
import { body } from 'express-validator';
import { validateErrors } from "../../utils";

import * as userLoginController from '../controller/UserLoginController'
import { UserLogin, UserSignup } from '../dto/UserLogin';

const authRouter = Router()

authRouter.post('/login',
    body('email').exists().withMessage('missing parameter').isEmail().normalizeEmail().withMessage('must be an email'),
    body('password').exists().withMessage('missing parameter').isLength({ min: 6 }).withMessage('must have at least 6 characters'),
    validateErrors("user login error"),
    async (req: Request, res: Response) => {
        const userInput = req.body as UserLogin;
        const user = await userLoginController.login(userInput);
        if (user === undefined) {
            res.status(404).send({ err: "wrong user or passowrd" });
            return;
        }
        user.password = "";
        res.json(user);
    }
)


authRouter.post('/signup',
    body('name').exists().withMessage('missing parameter'),
    body('cpf').exists().withMessage('missing parameter'),
    body('email').exists().withMessage('missing parameter').isEmail().normalizeEmail().withMessage('must be an email'),
    body('password').exists().withMessage('missing parameter').isLength({ min: 6 }).withMessage('must have at least 6 characters'),
    validateErrors("user login error"),
    async (req: Request, res: Response) => {
        const userInput = req.body as UserSignup;
        console.log(userInput);
        const user = await userLoginController.signup(userInput);
        res.json(user);
    },
)

export default authRouter