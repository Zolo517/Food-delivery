import { Food } from "../models/foodModel.js";

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
    await Food.find();
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
    await Food.findByIdAndDelete();
  } catch (error) {
    console.error("error", error);
  }
};
