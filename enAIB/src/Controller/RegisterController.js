import jwt from "jsonwebtoken";
import { User } from "../Model/UserModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { username, role, password, avatar } = req.body;
    const hash = bcrypt.hashSync(password, 16);
    const newItem = new User({ username, role, password: hash, avatar }); 
    await newItem.save();
    const token = jwt.sign({ username: newItem.username, role: newItem.role }, process.env.JWTT_Key, { expiresIn: '3h' }); 
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};
