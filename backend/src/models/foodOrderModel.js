import { Schema, model } from "mongoose";


const foodOrderSchema = new Schema(
  {
    user: {type:Schema.Types.ObjectId, ref:"user"},
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: Array },
    status: { type: String, enum: ["PENDING", "CANCELLED", "DELIVERED"] },
  },
  {
    timestamps: true,
  }
);
export const FoodOrder = model("foodOrder", foodOrderSchema)