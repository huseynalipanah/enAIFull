import { Router } from "express";
import { deleteSlidebyId, getAllSlide, getSlidebyId, postNewSlide, putSlidebyId } from "../Controller/SlideController.js";
export const slideRouter = Router();
slideRouter.get("/", getAllSlide);
  
  slideRouter.get("/:id", getSlidebyId);
  
  slideRouter.post("/", postNewSlide);
  
  slideRouter.put('/:id', putSlidebyId)
  
  slideRouter.delete("/:id", deleteSlidebyId);