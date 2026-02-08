import express from "express";
import authRouter from "../modules/Auth/auth.routes";
import userRouter from "../modules/User/user.routes";
import projectRouter from "../modules/Project/project.routes";

const router = express.Router();

router.use("/api", authRouter);
router.use("/api", userRouter);
router.use("/api", projectRouter);


export default router;