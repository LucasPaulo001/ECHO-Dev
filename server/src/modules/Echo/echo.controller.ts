import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard";
import { ListEchoByProjectService, RegisterEchoService } from "./service/echo.service";

export async function RegisterEchoController(req: CustomRequest, res: Response){
    try{

        const userId = req.user._id;

        const data = req.body;

        const projectId = req.params.projectId as string;

        const result = await RegisterEchoService(userId, projectId, data);

        res.status(201).json(result);

    }
    catch(error: any){

        console.log(error);
        
        res.status(500).json({
            error: "Erro interno do servidor",
            err: error.message
        });

    }
}

export async function ListEchoByProjectController(req: CustomRequest, res: Response){
    try{

        const projectId = req.params.projectId as string;

        const result = await ListEchoByProjectService(projectId);

        res.status(201).json(result);

    }
    catch(error: any){

        console.log(error);
        
        res.status(500).json({
            error: "Erro interno do servidor",
            err: error.message
        });

    }
}