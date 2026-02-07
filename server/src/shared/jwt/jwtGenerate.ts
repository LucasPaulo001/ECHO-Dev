import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

export function JWTGenerate(id: string){
    if(!jwt_secret) throw new Error("Variável de ambiente 'jwt_secret' inválida.");

    return jwt.sign(
        { id },
        jwt_secret,
        { expiresIn: "5h" }
    )
}