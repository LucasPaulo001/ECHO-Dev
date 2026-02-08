import { Types } from "mongoose"

export type TProject = {
    _id?: string,
    title: string,
    description?: string,
    status: "completed" | "peending",
    tags: string[],
    ownerId: Types.ObjectId,
    isPublic: boolean
}
