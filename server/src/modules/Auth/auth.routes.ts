import express from "express";
import { LoginController, RegisterController } from "./auth.controller";
const authRouter = express.Router();

authRouter.post("/auth/register", RegisterController);
authRouter.post("/auth/login", LoginController);

export default authRouter;