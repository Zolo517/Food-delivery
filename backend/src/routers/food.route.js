import { Router } from "express";
import {
  createFood,
  deleteFoodByFoodId,
  getFood,
  getFoodByCategoryId,
  updateFoodbyFoodId,
} from "../controllers/food.controller.js";

export const FoodRouter = Router();

FoodRouter.post("/", createFood)
  .get("/:categoryId", getFoodByCategoryId)
  .get("/", getFood)
  .patch("/:foodId", updateFoodbyFoodId)
  .delete("/:foodId", deleteFoodByFoodId);
