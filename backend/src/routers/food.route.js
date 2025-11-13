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
  .get("/:category", getFoodByCategoryId)
  .get("/", getFood)
  .patch("/:id", updateFoodbyFoodId)
  .delete("/:id", deleteFoodByFoodId);
