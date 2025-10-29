import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { type: [Schema.ObjectId] },
  },
  {
    timestamps: true,
  }
);
export const Food = model("food", foodSchema);
