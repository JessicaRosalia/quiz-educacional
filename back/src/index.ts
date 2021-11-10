import dotenv from "dotenv";
dotenv.config({ path: process.env.NODE_ENV === 'production' ? ".env" : ".env-dev", debug: true });

import express from "express";
import routes from "./api/routes/routes"

import dbInit from './database'

dbInit()


const port = 3000;

const app = express();

app.use(express.json());

app.use(routes);


app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})