import Router from "express";
import { AuthGuard } from "../../middlewares/authGuard";
import { EditProjectDataController, ListProjectByUserController, PublishProjectController } from "./project.controller";
const projectRouter = Router();

projectRouter.post("/project", AuthGuard, PublishProjectController);
projectRouter.patch("/project/:projectId", AuthGuard, EditProjectDataController);
projectRouter.get("/project", AuthGuard, ListProjectByUserController);

export default projectRouter;