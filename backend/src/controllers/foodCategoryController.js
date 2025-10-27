import { FoodCategory } from "../models/foodCategoryModel.js";

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
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
  }
};
