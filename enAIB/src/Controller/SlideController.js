import { Slide } from "../Model/SlideModel.js";

export const getAllSlide = async (req, res) => {
  try {
    const slideItems = await Slide.find();
    res.json(slideItems);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getSlidebyId = async (req, res) => {
  try {
    const slideItem = await Slide.findById(req.params.id);
    if (!slideItem) {
      res.json({ message: "Item Not Found" });
    } else {
      res.json(slideItem);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const postNewSlide = async (req, res) => {
  const newItem = new Slide(req.body);
  try {
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const putSlidebyId = async (req, res) => {
  try {
    const slideItem = await Slide.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!slideItem) {
      res.json({ message: "Item Not Found" });
    } else {
      res.json({ message: "Item Updated", slideItem });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteSlidebyId = async (req, res) => {
  try {
    const slideItem = await Slide.findByIdAndDelete(req.params.id);
    if (!slideItem) {
      res.json({ message: "Item Not Found" });
    } else {
      res.json({ message: "Item Deleted", slideItem });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
