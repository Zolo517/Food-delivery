import { Schema, model } from "mongoose";
import { User } from "./userModel";

const foodOrderSchema = new Schema(
  {
    user: User,
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: Array },
    status: { type: String, enum: ["PENDING", "CANCELLED", "DELIVERED"] },
  },
  {
    timestamps: true,
  }
);
export const FoodOrder = model("foodOrder", foodOrderSchema)