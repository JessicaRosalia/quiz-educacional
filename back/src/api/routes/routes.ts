import express from "express";
import authRouter from "./auth";
import userRouter from "./user"
import { verifyToken } from "./middleware/token";



const routes = express.Router();

routes.use('/auth', authRouter);


routes.get("/", (req: express.Request, res: express.Response) => {
    res.json({ "msg": "Alive!!" });
});

routes.use(verifyToken)

routes.use("/user", userRouter);

export default routes;