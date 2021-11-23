import express from "express";

import authRouter from "./auth";
import userRouter from "./user"
import questionRouter from "./question"

import { verifyToken } from "./middleware/token";

const routes = express.Router();

routes.use("/question", questionRouter);

routes.use('/auth', authRouter);

routes.get("/", (req: express.Request, res: express.Response) => {
    res.json({ "msg": "Alive!!" });
});

// All routes after here needs to have a valid token to run
routes.use(verifyToken)

routes.use("/user", userRouter);

export default routes;