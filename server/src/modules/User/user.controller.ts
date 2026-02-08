import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard";
import { EditProfileService, ProfileService } from "./service/user.service";

export async function ProfileController(req: CustomRequest, res: Response){
    try{

        const user = req.user;

        const result = await ProfileService(user);

        res.status(200).json(result);

    }
    catch(error: any){
        console.log(error);
        res.status(500).json({
            error: "Erro interno do servidor",
            err: error.message
        })
    }
}

export async function EditProfileController(req: CustomRequest, res: Response){
    try{

        const userId = req.user._id;

        const data = req.body;

        const result = await EditProfileService(userId, data);

        res.status(200).json(result);

    }
    catch(error: any){
        console.log(error);
        res.status(500).json({
            error: "Erro interno do servidor",
            err: error.message
        })
    }
}