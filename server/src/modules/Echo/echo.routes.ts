import { Router } from "express";
import { AuthGuard } from "../../middlewares/authGuard";
import { DeleteEchoController, EditEchoController, ListEchoByProjectController, RegisterEchoController } from "./echo.controller";
const echoRouter = Router();

echoRouter.post("/echo/:projectId", AuthGuard, RegisterEchoController);
echoRouter.get("/echo/:projectId", AuthGuard, ListEchoByProjectController);
echoRouter.delete("/echo/:echoId", AuthGuard, DeleteEchoController);
echoRouter.patch("/echo/:echoId", AuthGuard, EditEchoController);

export default echoRouter;