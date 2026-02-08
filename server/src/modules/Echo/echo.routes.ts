import { Router } from "express";
import { AuthGuard } from "../../middlewares/authGuard";
import { ListEchoByProjectController, RegisterEchoController } from "./echo.controller";
const echoRouter = Router();

echoRouter.post("/echo/:projectId", AuthGuard, RegisterEchoController);
echoRouter.get("/echo/:projectId", AuthGuard, ListEchoByProjectController);

export default echoRouter;