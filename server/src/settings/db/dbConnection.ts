import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI;

export async function DBConnection() {

    if(!DB_URI) throw new Error("Variável de ambiente 'DB_URI' não definida.");

    try{
        await mongoose.connect(DB_URI);
        console.log("Conectado ao mongoose.");
    }
    catch(err: any){
        console.log("Erro ao se conectar ao mongoose", err);
        process.exit(1);
    }
}