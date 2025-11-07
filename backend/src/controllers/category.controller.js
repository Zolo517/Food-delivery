import { FoodCategory } from "../models/category.model.js";

export const createFoodCategory = async (req, res) => {
  try {
    const data = await FoodCategory.create({
      categoryName: req.body.categoryName,
    });
    res.status(200).send({ message: "successfully", data: data });
  } catch (error) {
    console.error(error);
  }
};

export const getfoodCategories = async (req, res) => {
  try {
    const data = await FoodCategory.find();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
};

export const updateCategoryName = async (req, res) => {
  const { id } = req.params;

  try {
    const categoryName = req.body;
    const data = await FoodCategory.findByIdAndUpdate(id, categoryName);
    res.status(200).send(data);
  } catch (error) {
    console.error(error, "error");
  }
};

export const deletefoodCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await FoodCategory.findByIdAndDelete(id);
    res.status(200).send({ message: "deleted successfully", data: data });
  } catch (error) {
    console.error(error, "error");
  }
};
