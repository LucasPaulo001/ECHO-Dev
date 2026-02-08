import mongoose, { Schema, Types } from "mongoose";
import { TProject } from "../../shared/@types/project.types";

const ProjectSchema = new Schema<TProject>({

    title: {
        type: String,
        required: true
    },

    ownerId: {
        type: Types.ObjectId
    },

    description: {
        type: String
    },

    status: {
        type: String,
        enum: ["completed", "peending"],
        default: "peending"
    },

    isPublic: {
        type: Boolean,
        default: true
    },

    tags: [{
        type: String
    }]

}, { timestamps: true });

export default mongoose.model("Project", ProjectSchema);