import { Request, Response } from "express";
import { LoginService, RegisterService } from "./service/auth.service";

export async function RegisterController(req: Request, res: Response) {
    try{

        const data = req.body;

        const result = await RegisterService(data);

        res.status(201).json(result);

    }
    catch(error: any){
        console.log(error);
        res.status(500).json({
            error: "Erro interno do servidor",
            err: error
        })
    }
}

export async function LoginController(req: Request, res: Response) {
    try{

        const { email, password } = req.body;

        const result = await LoginService(email, password);

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