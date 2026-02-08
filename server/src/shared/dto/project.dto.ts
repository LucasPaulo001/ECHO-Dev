import { Types } from "mongoose"

export type DTOProjectPublishe = {
    title: string,
    description: string,
    status: "completed" | "peending",
    tags: string[],
    ownerId: Types.ObjectId,
    isPublic: boolean,
    link: string
}

export type DTOProjectUpdate = {
    title?: string,
    description?: string,
    status?: "completed" | "peending",
    tags?: string[],
    link?: string,
    isPublic?: boolean
}