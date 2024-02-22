import mongoose from "mongoose";

const { Schema } = mongoose;

const aiModelSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true

    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryAi' 

    }
});



export const AIModel = mongoose.model("AIModel", aiModelSchema);
