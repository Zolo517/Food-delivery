import { Router } from "express";
import {
  createFoodCategory,
  deletefoodCategoryById,
  getfoodCategories,
  updateCategoryName,
} from "../controllers/foodCategoryController.js";

export const CategoryRouter = Router();

CategoryRouter
  .post("/", createFoodCategory)
  .get("/", getfoodCategories)
  .patch("/:id", updateCategoryName)
  .delete("/:id", deletefoodCategoryById);
