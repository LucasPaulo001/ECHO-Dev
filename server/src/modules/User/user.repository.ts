import { DTOCreateUser } from "../../shared/dto/user.dto";
import userModel from "./user.model";

export const UserRepository = {

    async findByEmail(email: string){
        return await userModel.findOne({ email: email });
    },

    async findById(userId: string){
        return await userModel.findById(userId);
    },

    async findByUserName(userName: string){
        return await userModel.findOne({ userName: userName });
    },

    async create(data: DTOCreateUser){
        return await userModel.create(data);
    }

}