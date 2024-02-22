

import { Router } from "express";
import { loginUser } from "../Controller/LoginController.js";

export const loginRouter = Router();

loginRouter.post("/", loginUser);
