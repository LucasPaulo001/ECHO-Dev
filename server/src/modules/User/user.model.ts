import mongoose, { Schema } from "mongoose";
import { TUser } from "../../shared/@types/user.types";

const UserSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        requried: true
    },

    bio: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        trim: true,
        required: true
    },

    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },

    isActive: {
        type: Boolean
    },

    stack: [{
        type: String
    }]
}, { timestamps: true });

export default mongoose.model("User", UserSchema);

