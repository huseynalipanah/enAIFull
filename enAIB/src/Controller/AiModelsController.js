import { AIModel } from "../Model/AiModelsModel.js";

export const getAllAIModels = async (req, res) => {
  try {
    const aiModels = await AIModel.find();
    res.status(200).json(aiModels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAIModelById = async (req, res) => {
  try {
    const aiModel = await AIModel.findById(req.params.id);
    if (!aiModel) {
      res.status(404).json({ message: "AI Model Not Found" });
    } else {
      res.status(200).json(aiModel);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postNewAIModel = async (req, res) => {
  const newModel = new AIModel(req.body);
  try {
    await newModel.save();
    res.status(201).json(newModel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAIModelById = async (req, res) => {
  try {
    const aiModel = await AIModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!aiModel) {
      res.status(404).json({ message: "AI Model Not Found" });
    } else {
      res.status(200).json({ message: "AI Model Updated", aiModel });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAIModelById = async (req, res) => {
  try {
    const aiModel = await AIModel.findByIdAndDelete(req.params.id);
    if (!aiModel) {
      res.status(404).json({ message: "AI Model Not Found" });
    } else {
      res.status(200).json({ message: "AI Model Deleted", aiModel });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllFullAIModels = async (req, res) => {
  try {
    const aiModels = await AIModel.find().populate("categoryId")
    res.status(200).json(aiModels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};