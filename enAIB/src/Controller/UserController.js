import { User } from "../Model/UserModel.js";

export const getAllUser = async (req, res) => {
  try {
    const userItems = await User.find();
    res.json(userItems);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUserbyId = async (req, res) => {
  try {
    const userItem = await User.findById(req.params.id);
    if (!userItem) {
      res.json({ message: "Item Not Found" });
    } else {
      res.json(userItem);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const postNewUser = async (req, res) => {
  const newItem = new User(req.body);
  try {
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const putUserbyId = async (req, res) => {
  try {
    const userItem = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!userItem) {
      res.json({ message: "User Not Found" });
    } else {
      res.json({ message: "User Updated", userItem });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteUserbyId = async (req, res) => {
  try {
    const userItem = await User.findByIdAndDelete(req.params.id);
    if (!userItem) {
      res.json({ message: "User Not Found" });
    } else {
      res.json({ message: "User Deleted", userItem });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
