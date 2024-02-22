import mongoose, { Schema } from "mongoose";


const CategoryAiSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export const CategoryAi = mongoose.model("CategoryAi", CategoryAiSchema);


