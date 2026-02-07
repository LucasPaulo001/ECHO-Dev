import express from "express";
import authRouter from "../modules/Auth/auth.routes";

const router = express.Router();


router.use("/api", authRouter);


export default router;