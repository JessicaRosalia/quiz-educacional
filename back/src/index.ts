import dotenv from "dotenv";
dotenv.config({ path: process.env.NODE_ENV === 'production' ? ".env" : ".env-dev", debug: true });

import express from "express";
import { RegisterRoutes } from "../dist/routes";

import swaggerUi from "swagger-ui-express"
import { ValidateError } from "@tsoa/runtime";

const port = 3000;

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, async (_req: express.Request, res: express.Response) => {
    return res.send(
        swaggerUi.generateHTML(await import("../dist/swagger.json"))
    );
})

RegisterRoutes(app);

// app.use(function notFoundHandler(_, res: express.Response) {
//     res.status(404).send({
//         message: "Not Found",
//     });
// });

app.use(function errorHandler(
    err: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): express.Response | void {
    console.error(err)
    if (err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
        return res.status(422).json({
            message: "Validation Failed",
            details: err?.fields,
        });
    }
    if (err instanceof Error) {
        if (err.message) {
            return res.status(400).json({
                message: err.message,
            });
        } else {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }

    }

    next();
});


app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
