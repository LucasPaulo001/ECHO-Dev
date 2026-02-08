import { DTOEchoCreate, DTOEchoUpdate } from "../../shared/dto/echo.dto";
import echoModel from "./echo.model";

export const EchoRepository = {

  async create(data: DTOEchoCreate) {
    return await echoModel.create(data);
  },

  async listByProject(projectId: string) {
    return await echoModel.find({ projectId: projectId }).populate("authorId");
  },

  async deleteEchoByProject(projectId: string) {
    return await echoModel.deleteMany({projectId: projectId});
  },

  async delete(echoId: string){
    return await echoModel.findByIdAndDelete(echoId);
  },

  async findById(echoId: string){
    return await echoModel.findById(echoId);
  },

  async update(echoId: string, data: Partial<DTOEchoUpdate>){
    return await echoModel.findByIdAndUpdate(echoId, data, { new: true });
  }

};
