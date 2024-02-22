import mongoose from "mongoose";

const { Schema } = mongoose;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Technology", "AI", "Updates"],
        default: "AI"
    },
    imageUrl: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


export const News = mongoose.model("News", newsSchema);

