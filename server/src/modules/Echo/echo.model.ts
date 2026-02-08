import mongoose, { Schema, Types } from "mongoose";
import { TEcho } from "../../shared/@types/echo.types";

const EchoSchema = new Schema<TEcho>({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String
    },

    authorId: {
        type: Types.ObjectId,
        required: true
    },

    projectId: {
        type: Types.ObjectId,
        required: true
    }
});

export default mongoose.model("Echo", EchoSchema);