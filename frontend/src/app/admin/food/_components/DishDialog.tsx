"use client";

import { LabelAndInput } from "@/components/LabelAndInput";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import { mutate } from "swr";

type FormData = {
  name: string;
  price: string;

  ingredients: string;
  img: string;
};

export const DishDialog = ({
  name,
  addDish,
}: {
  name: string;
  addDish?: (dish: object) => Promise<void>;
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    ingredients: "",
    img: "",
  });

  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addFood = async (food: FormData) => {
    try {
      const res = await axios.post("http://localhost:4000/food", food);
      console.log("category", res.data.message);
      mutate("http://localhost:4000/food");
    } catch (error) {
      console.error(error, "ERROR");
    }
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addFood(formData);
    console.log("final data", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Dialog>
        <DialogTrigger>
          <button className="w-9 h-9 flex justify-center items-center rounded-full bg-[#0c4b78]">
            <p className="text-white my-2 mx-4">+</p>
          </button>
        </DialogTrigger>
        <DialogContent className="w-115 ">
          <DialogTitle className="mb-4 text-lg font-semibold">
            Add new Dish to {name}
          </DialogTitle>
          <div className="flex flex-col gap-6 mt-6 mb-12">
            <div className="flex gap-6">
              <LabelAndInput
                value={formData.name}
                onChange={handleOnChange}
                gap="gap"
                label="Food name"
                id="name"
                place="Type food name"
              />
              <LabelAndInput
                value={formData.price}
                onChange={handleOnChange}
                gap="gap"
                label="Food price"
                id="price"
                place="Enter price..."
              />
            </div>
            <LabelAndInput
              value={formData.ingredients}
              onChange={handleOnChange}
              gap="gap"
              label="Ingredients"
              id="ingredients"
              place="List ingredients..."
            />
            <LabelAndInput
              value={formData.img}
              onChange={handleOnChange}
              gap="gap"
              label="Food image"
              h="138px"
              id="img"
              // type="file"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[123px] py-2 px-4 bg-black rounded-md text-white "
            >
              Add Dish
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  );
};
