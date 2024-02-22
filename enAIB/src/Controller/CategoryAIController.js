import { CategoryAi } from "../Model/CategoryAiModel.js";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryAi.find({});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const postNewCategoryAi = async (req, res) => {
    try {
        const newCategory = new CategoryAi(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
