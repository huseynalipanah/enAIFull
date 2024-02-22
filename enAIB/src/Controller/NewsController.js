import { News } from "../Model/NewsModel.js";

export const getAllNews = async (req, res) => {
  try {
    const newsItems = await News.find();
    res.json(newsItems);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getNewsbyId = async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);
    if (!newsItem) {
      res.json({ message: "Item Not Found" });
    } else {
      res.json(newsItem);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const postNewNews = async (req, res) => {
  const newItem = new News(req.body);
  try {
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const putNewsbyId = async (req, res) => {
  try {
    const newsItem = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!newsItem) {
      res.json({ message: "Item Not Found" });
    } else {
      res.json({ message: "Item Updated", mewsItem });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteNewsbyId = async (req, res) => {
  try {
    const newsItem = await News.findByIdAndDelete(req.params.id);
    if (!newsItem) {
      res.json({ message: "Item Not Found" });
    } else {
      res.json({ message: "Item Deleted", newsItem });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
