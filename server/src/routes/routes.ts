import express from "express";
import authRouter from "../modules/Auth/auth.routes";
import userRouter from "../modules/User/user.routes";
import projectRouter from "../modules/Project/project.routes";
import echoRouter from "../modules/Echo/echo.routes";

const router = express.Router();

router.use("/api", authRouter);
router.use("/api", userRouter);
router.use("/api", projectRouter);
router.use("/api", echoRouter);


export default router;