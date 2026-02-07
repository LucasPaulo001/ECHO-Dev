import { DTOCreateUser } from "../../../shared/dto/user.dto";
import { JWTGenerate } from "../../../shared/jwt/jwtGenerate";
import { UserRepository } from "../../User/user.repository";
import bcrypt from "bcrypt";

export async function RegisterService(data: DTOCreateUser){

    const user = await UserRepository.findByEmail(data.email);

    if(user) throw new Error("Usuário já existe.");

    const existUserName = await UserRepository.findByUserName(data.userName);

    if(existUserName) throw new Error("Nome de usuário já em uso.");

    const salt = await bcrypt.genSalt();
    const passHash = await bcrypt.hash(data.password, salt);

    const dataCreate = {
        name: data.name,
        email: data.email,
        userName: data.userName,
        password: passHash,
    }

    await UserRepository.create(dataCreate);

    return {
        msg: "Registro feito com sucesso."
    }

}

export async function LoginService(email: string, password: string){
    
    const user = await UserRepository.findByEmail(email);

    if(!user) throw new Error("Usuáiro não encontrado.");

    if(!(await bcrypt.compare(password, user.password))){
        throw new Error("Senha incorreta.");
    }

    const token = JWTGenerate(user._id.toString());

    return {
        id: user._id,
        token: token
    }

}