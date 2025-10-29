import { Router } from "express";
import {
  createFoodOrder,
  getFoodOrder,
  getFoodOrderByUserId,
  updateFoodOrderByFoodOrderId,
} from "../controllers/foodOrderController.js";

export const OrderRouter = Router();

OrderRouter.post("/", createFoodOrder)
  .get("/", getFoodOrder)
  .get("/:userId", getFoodOrderByUserId)
  .patch("/:foodOrderId", updateFoodOrderByFoodOrderId);
