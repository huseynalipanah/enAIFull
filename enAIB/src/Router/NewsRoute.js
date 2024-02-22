import { Router } from "express";
import { deleteNewsbyId, getAllNews, getNewsbyId, postNewNews, putNewsbyId } from "../Controller/NewsController.js";

export const newsRouter = Router();

newsRouter.get("/", getAllNews);
  
  newsRouter.get("/:id",getNewsbyId );
  
  newsRouter.post("/", postNewNews);
  
  newsRouter.put('/:id', putNewsbyId)
  
  newsRouter.delete("/:id", deleteNewsbyId);