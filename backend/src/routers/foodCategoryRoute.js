import { Router } from "express";
import { createFoodCategory } from "../controllers/foodCategoryController.js";

export const categoryRouter = Router();

categoryRouter.post("/", createFoodCategory);
