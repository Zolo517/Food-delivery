import { Schema, model } from "mongoose";
import { User } from "./userModel.js";

const foodOrderSchema = new Schema(
  {
    user: { type: String },
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: Array },
    status: { type: String, enum: ["PENDING", "CANCELLED", "DELIVERED"] },
  },
  {
    timestamps: true,
  }
);
export const FoodOrder = model("foodOrder", foodOrderSchema);
