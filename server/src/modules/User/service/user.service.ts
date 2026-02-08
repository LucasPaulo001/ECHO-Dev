import { TUser } from "../../../shared/@types/user.types";
import { DTOUpdateUser } from "../../../shared/dto/user.dto";
import { UserRepository } from "../user.repository";

export async function ProfileService(user: TUser){

    const profile = {
        id: user._id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        role: user.role,
        stack: user.stack,
        isActive: user.isActive
    }

    return profile;
}

export async function EditProfileService(userId: string, data: DTOUpdateUser) {
    
    const user = await UserRepository.findById(userId);

    if(!user) throw new Error("Usuário não encontrado ou inválido.");

    const updates: Partial<DTOUpdateUser> = {};

    if(data.name && data.name !== user.name){
        updates.name = data.name;
    }

    if(data.userName && data.userName !== user.userName){
        const existUserName = await UserRepository.findByUserName(data.userName);

        if(existUserName) throw new Error("Nome de usuário já está em uso.");

        updates.userName = data.userName;
    }

    const newProfile = await UserRepository.update(userId, updates);

    return {
        msg: "Perfil atualizado com sucesso.",
        newProfile
    }

}