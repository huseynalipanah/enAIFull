import mongoose, { Schema } from "mongoose";

const slideSchema = new Schema({
    name: String,
    logo: String,
    link: String,
  });
  
 export const Slide = mongoose.model("Slide", slideSchema);