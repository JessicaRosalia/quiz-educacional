import dotenv from "dotenv";
dotenv.config({ path: process.env.NODE_ENV === 'production' ? ".env" : ".env-dev", debug: true });

import express from "express";
import routes from "./api/routes/routes"

const port = 3000;

const app = express();

app.use(express.json());

app.use(routes);

function errorLogger(error: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) { // for logging errors
    console.error(error) // or using any fancy logging library
    next(error) // forward to next middleware
}

function errorResponder(error: Error, req: express.Request, res: express.Response, next: express.NextFunction) { // responding to client
    res.status(400).send({ error: error.message })
}

app.use(errorLogger)
app.use(errorResponder)


app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
