import { Types } from "mongoose"

export type DTOProjectPublishe = {
    title: string,
    description: string,
    status: "completed" | "peending",
    tags: string[],
    ownerId: Types.ObjectId,
    isPublic: boolean
}

export type DTOProjectUpdate = {
    title?: string,
    description?: string,
    status?: "completed" | "peending",
    tags?: string[],
    isPublic?: boolean
}