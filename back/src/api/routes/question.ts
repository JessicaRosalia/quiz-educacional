import { Router, Request, Response, NextFunction } from 'express'
import { body } from 'express-validator';
import { validateErrors, errorWreaper } from "../../utils";

import * as questionController from '../controller/QuestionController'
import { Question } from '../dto/Question';

const questionRouter = Router();

questionRouter.post('/create',
    body("prompt").exists().withMessage('missing parameter').isString().withMessage("must be a string"),
    body("options").exists().withMessage('missing parameter').isArray().withMessage("must be an array"),
    body("options.*.body").exists().withMessage('missing parameter').isString().withMessage("must be a string"),
    body("options.*.answer").exists().withMessage('missing parameter').isBoolean().withMessage("must be a boolean"),
    validateErrors("user signup error"),
    errorWreaper(async (req: Request, res: Response) => {
        const question = await questionController.create(req.body as Question)
        res.json(question);
    }),
)

export default questionRouter