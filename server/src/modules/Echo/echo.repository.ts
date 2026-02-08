import { DTOEchoCreate } from "../../shared/dto/echo.dto";
import echoModel from "./echo.model";

export const EchoRepository = {

    async create(data: DTOEchoCreate){
        return await echoModel.create(data);
    },

    async listByProject(projectId: string){
        return await echoModel.find({ projectId: projectId }).populate("authorId");
    }
}