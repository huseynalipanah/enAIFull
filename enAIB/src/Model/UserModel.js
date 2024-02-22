import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        default:"User"
    },
    avatar: {
        type: String,
        default: "default_avatar.png"
    },
    dateJoined: {
        type: Date,
        default: Date.now
    }
});

export const User = mongoose.model("User", userSchema);


