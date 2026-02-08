import { DTOProjectPublishe, DTOProjectUpdate } from "../../shared/dto/project.dto";
import projectModel from "./project.model";

export const ProjectRepository = {
    async create(data: DTOProjectPublishe){
        return await projectModel.create(data);
    },

    async findById(projectId: string){
        return await projectModel.findById(projectId);
    },

    async update(projectId: string, data: Partial<DTOProjectUpdate>){
        return await projectModel.findByIdAndUpdate(projectId, data, { new: true });
    },

    async listByUser(userId: string){
        return await projectModel.find({ ownerId: userId });
    }
}