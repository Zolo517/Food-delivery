import { Router } from "express";
import {
  deleteFoodByFoodId,
  getFood,
  getFoodByCategoryId,
  updateFoodbyFoodId,
} from "../controllers/foodController.js";

export const FoodRouter = Router();

FoodRouter.get("/:categoryId", getFoodByCategoryId)
  .get("/", getFood)
  .patch("/:foodId", updateFoodbyFoodId)
  .delete("/:foodId", deleteFoodByFoodId);
