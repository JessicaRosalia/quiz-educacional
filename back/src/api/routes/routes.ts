import express from "express";
import authRouter from "./auth";

const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response) => {
    res.json({ "msg": "Alive!!" });
});

routes.use('/auth', authRouter);

export default routes;