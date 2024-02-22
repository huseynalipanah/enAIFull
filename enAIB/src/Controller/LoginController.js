import { User } from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username }); 
    if (!user) {
      return res.json({ message: "User not found" });
    }
    
    const checkPassword = await bcrypt.compare(password, user.password); 
    if (!checkPassword) {
      return res.json({ message: "Incorrect Password" });
    }
    
    const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWTT_Key, { expiresIn: '3h' });
    res.json( user ); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};
