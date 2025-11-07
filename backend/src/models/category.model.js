import { Schema, model } from "mongoose";

const foodCategorySchema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const FoodCategory = model("foodCategory", foodCategorySchema);
