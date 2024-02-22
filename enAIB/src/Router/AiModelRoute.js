import { Router } from "express";
import { deleteAIModelById, getAIModelById, getAllAIModels, getAllFullAIModels, postNewAIModel, updateAIModelById } from "../Controller/AiModelsController.js";

export const AiModelRouter = Router();

AiModelRouter.get("/", getAllAIModels);
  
AiModelRouter.get("/detail/:id",getAIModelById );
  
AiModelRouter.post("/", postNewAIModel);
  
AiModelRouter.put('/:id', updateAIModelById)
  
AiModelRouter.delete("/:id", deleteAIModelById);
  
AiModelRouter.get("/full", getAllFullAIModels);
