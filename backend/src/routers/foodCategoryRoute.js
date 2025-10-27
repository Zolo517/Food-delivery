import { Router } from "express";
import {
  createFoodCategory,
  getfoodCategories,
} from "../controllers/foodCategoryController.js";

export const categoryRouter = Router();

categoryRouter.post("/", createFoodCategory)
.get("/", getfoodCategories);
