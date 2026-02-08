import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard";
import { DeleteProjectService, EditProjectDataService, ListProjectByUserService, PublishProjectService } from "./service/project.service";
import { ListEchoByProjectService } from "../Echo/service/echo.service";

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

export async function ListProjectByUserController(req: CustomRequest, res: Response){
    try{

        const userId = req.user._id;

        const result = await ListProjectByUserService(userId);

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

export async function DeleteProjectController(req: CustomRequest, res: Response){
    try{

        const projectId = req.params.projectId as string;

        const result = await DeleteProjectService(projectId);

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