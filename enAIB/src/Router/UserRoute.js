import { Router } from "express";
import { deleteUserbyId, getAllUser, getUserbyId, postNewUser, putUserbyId } from "../Controller/UserController.js";
export const userRouter = Router();

userRouter.get("/", getAllUser);
  
  userRouter.get("/:id", getUserbyId);
  
  userRouter.post("/", postNewUser);
  
  userRouter.put('/:id', putUserbyId)
  
  userRouter.delete("/:id", deleteUserbyId);


