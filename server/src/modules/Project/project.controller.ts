import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard";
import { EditProjectDataService, PublishProjectService } from "./service/project.service";

export async function PublishProjectController(req: CustomRequest, res: Response){
    try{
        const data = req.body;

        const userId = req.user._id;

        const result = await PublishProjectService(userId, data);

        res.status(201).json(result);
    }
    catch(error: any){
        console.log(error);
        res.status(500).json({
            error: "Erro interno do servidor",
            err: error.message
        })
    }
}

export async function EditProjectDataController(req: CustomRequest, res: Response){
    try{
        const data = req.body;

        const projectId = req.params.projectId as string;

        const result = await EditProjectDataService(projectId, data);

        res.status(201).json(result);
    }
    catch(error: any){
        console.log(error);
        res.status(500).json({
            error: "Erro interno do servidor",
            err: error.message
        })
    }
}