import express from "express";
import { validationResult } from 'express-validator';

export const validateErrors = (msg: string) =>
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        var errorValidation = validationResult(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).json({
                title: msg,
                error: errorValidation.array()
            });
        }
        next()
    }
