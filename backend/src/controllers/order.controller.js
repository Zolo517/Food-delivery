import { FoodOrder } from "../models/order.model.js";

export const createFoodOrder = async (req, res) => {
  try {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    await FoodOrder.create();
  } catch (error) {
    console.error(error, "error");
  }
};

export const getFoodOrder = async (req, res) => {
  try {
    await FoodOrder.find();
  } catch (error) {
    console.error(error, "error");
  }
};

export const getFoodOrderByUserId = async (req, res) => {
  try {
    await FoodOrder.findById();
  } catch (error) {
    console.error(error, "error");
  }
};

export const updateFoodOrderByFoodOrderId = async (req, res) => {
  try {
    await FoodOrder.findByIdAndUpdate();
  } catch (error) {
    console.error(error, "error");
  }
};
    //          