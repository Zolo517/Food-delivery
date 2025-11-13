import { Food } from "../models/food.model.js";

export const createFood = async (req, res) => {
  const { name, price, img, ingredients, category } = req.body;

  console.log("request body", req.body);
  try {
    const data = await Food.create({
      name,
      price,
      img,
      ingredients,
      category,
    });
    res.send(data);
  } catch (error) {
    console.error(error);
  }
};

export const getFoodByCategoryId = async (req, res) => {
  const { id } = req.params;
  try {
    await Food.findById();
  } catch (error) {
    console.error(error, "error");
  }
};

export const getFood = async (req, res) => {
  try {
    const data = await Food.find();
    res.send(data);
  } catch (error) {
    console.error(error, "error");
  }
};

export const updateFoodbyFoodId = async (req, res) => {
  const { id } = req.params;
  try {
    await Food.findByIdAndUpdate();
  } catch (error) {
    console.error(error), "error";
  }
};
export const deleteFoodByFoodId = async (req, res) => {
  const { id } = req.params;
  try {
    await Food.findByIdAndDelete(id);
  } catch (error) {
    console.error("error", error);
  }
};
