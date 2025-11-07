import { Router } from "express";
import {
  createFoodCategory,
  deletefoodCategoryById,
  getfoodCategories,
  updateCategoryName,
} from "../controllers/category.controller.js";

export const CategoryRouter = Router();

CategoryRouter.post("/", createFoodCategory)
  .get("/", getfoodCategories)
  .patch("/:id", updateCategoryName)
  .delete("/:id", deletefoodCategoryById);
