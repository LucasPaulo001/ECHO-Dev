import { Router } from "express";
import { AuthGuard } from "../../middlewares/authGuard";
import { EditProfileController, ProfileController } from "./user.controller";
const userRouter = Router();


userRouter.get("/user/profile", AuthGuard, ProfileController);
userRouter.patch("/user/profile", AuthGuard, EditProfileController);


export default userRouter;