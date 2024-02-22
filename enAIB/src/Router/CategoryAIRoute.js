import { Router } from "express";
import { getAllCategories, postNewCategoryAi } from "../Controller/CategoryAIController.js";

export const CategoryAiRouter = Router();

CategoryAiRouter.get("/", getAllCategories);
CategoryAiRouter.post("/", postNewCategoryAi);



