import { Types } from "mongoose";
import { DTOEchoCreate } from "../../../shared/dto/echo.dto";
import { UserRepository } from "../../User/user.repository";
import { EchoRepository } from "../echo.repository";
import { ProjectRepository } from "../../Project/project.repository";

export async function RegisterEchoService(userId: string, projectId: string, data: DTOEchoCreate){
    
    const user = await UserRepository.findById(userId);

    if(!user) throw new Error("Usuário não encontrado ou inválido.");

    const authorObjectId = new Types.ObjectId(userId);
    const projectObjectId = new Types.ObjectId(projectId);

    const dataCreate: DTOEchoCreate = {
        title: data.title,
        authorId: authorObjectId,
        projectId: projectObjectId,
        content: data.content
    }

    await EchoRepository.create(dataCreate);

    return {
        msg: "Echo criado com sucesso.",
        dataCreate
    }
}

export async function ListEchoByProjectService(projectId: string){

    const project = await ProjectRepository.findById(projectId);

    if(!project) throw new Error("Projeto não encontrado.");

    const echos = await EchoRepository.listByProject(projectId);

    const dataEcho = echos.map((echo: any) => ({
        id: echo._id,
        title: echo.title,
        content: echo.content,
        authorId: {
            id: echo.authorId._id,
            name: echo.authorId?.name,
        }
    }));

    return dataEcho;

}