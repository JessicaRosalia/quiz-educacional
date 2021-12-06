import express from "express";
import { validationResult } from 'express-validator';

export const validateErrors = (msg: string) =>
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const errorValidation = validationResult(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).json({
                title: msg,
                error: errorValidation.array()
            });
        }
        next()
    }

export const errorWreaper = (f: any) =>
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            await f(req, res);
        } catch (error) {
            next(error)
        }
    }

export const proffesorScope = ["professor"]
export const studentScope = ["student"]
export const allScopes = ["professor", "student"]
