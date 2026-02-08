import { Types } from "mongoose";
import { DTOProjectPublishe, DTOProjectUpdate } from "../../../shared/dto/project.dto";
import { UserRepository } from "../../User/user.repository";
import { ProjectRepository } from "../project.repository";
import { EchoRepository } from "../../Echo/echo.repository";

export async function PublishProjectService(userId: string, data: DTOProjectPublishe){

    const user = await UserRepository.findById(userId);

    if(!user) throw new Error("Usuário inválido.");

    const userToObjectId = new Types.ObjectId(user._id);

    const dataPublish: DTOProjectPublishe = {
        title: data.title,
        description: data.description,
        status: data.status,
        isPublic: data.isPublic,
        ownerId: userToObjectId,
        link: data.link,
        tags: data.tags
    }

    const project = await ProjectRepository.create(dataPublish);

    return {
        msg: "Projeto publicado com sucesso.",
        project
    }
}

export async function EditProjectDataService(projectId: string, data: DTOProjectUpdate){
    
    const project = await ProjectRepository.findById(projectId);

    if(!project) throw new Error("Projeto não encontrado.");

    const updates: Partial<DTOProjectUpdate> = {};

    if(data.title && data.title !== project.title){
        updates.title = data.title;
    }

    if(data.description && data.description !== project.description){
        updates.description = data.description;
    }

    if(data.tags && data.tags !== project.tags){
        updates.tags = data.tags;
    }

    if(data.isPublic && data.isPublic !== project.isPublic){
        updates.isPublic = data.isPublic
    }

    if(data.status && data.status !== project.status){
        updates.status = data.status;
    }

    if(data.link && data.link !== project.link){
        updates.link = data.link;
    }

    if(Object.keys(updates).length === 0){
        return {
            msg: "Nada para ser atualizado."
        }
    }

    const newProject = await ProjectRepository.update(projectId, updates);

    return{
        msg: "Projeto atualizado com sucesso.",
        newProject
    }
}


export async function ListProjectByUserService(userId: string){
    
    const user = await UserRepository.findById(userId);

    if(!user) throw new Error("Usuário não encontrado.");

    const projects = await ProjectRepository.listByUser(userId);

    const data = projects.map((project) => ({
        id: project._id,
        title: project.title,
        description: project.description,
        status: project.status,
        isPublic: project.isPublic,
        tags: project.tags
    }));

    return data;
}

export async function DeleteProjectService(projectId: string){
    
    const project = await ProjectRepository.findById(projectId);

    if(!project) throw new Error("Projeto não encontrado.");

    await EchoRepository.deleteEchoByProject(projectId);

    await ProjectRepository.delete(projectId);

    return {
        msg: "Projeto deletado com sucesso."
    }

}

