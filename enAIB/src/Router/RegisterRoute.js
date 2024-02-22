import { Router } from "express";
import { registerUser } from './../Controller/RegisterController.js';

export const registerRouter = Router();

registerRouter.post("/", registerUser);
