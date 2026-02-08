import Router from "express";
import { AuthGuard } from "../../middlewares/authGuard";
import { DeleteProjectController, EditProjectDataController, ListProjectByUserController, PublishProjectController } from "./project.controller";
const projectRouter = Router();

projectRouter.post("/project", AuthGuard, PublishProjectController);
projectRouter.patch("/project/:projectId", AuthGuard, EditProjectDataController);
projectRouter.get("/project", AuthGuard, ListProjectByUserController);
projectRouter.delete("/project/:projectId", AuthGuard, DeleteProjectController);

export default projectRouter;