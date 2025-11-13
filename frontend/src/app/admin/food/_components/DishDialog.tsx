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

export const DishDialog = ({ name, id }: { name: string; id: string }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append("category", id);
    console.log(formData);

    const res = await axios.post("http://localhost:4000/food", formData, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("food", res.data.message);
    mutate("http://localhost:4000/food");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="w-9 h-9 flex justify-center items-center rounded-full bg-[#0c4b78]"
        >
          <p className="text-white my-2 mx-4">+</p>
        </button>
      </DialogTrigger>
      <DialogContent className="w-115 ">
        <DialogTitle className="mb-4 text-lg font-semibold">
          Add new Dish to {name}
        </DialogTitle>{" "}
        <form id="dish" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 mt-6 mb-12">
            <div className="flex gap-6">
              <div className={`flex flex-col gap-2 `}>
                <Label htmlFor="name">Food name</Label>
                <Input name="name" placeholder="Type food name" id="name" />
              </div>
              <div className={`flex flex-col gap-2 `}>
                <Label htmlFor="price">Food price</Label>
                <Input name="price" placeholder="Enter price..." id="price" />
              </div>
            </div>
            <div className={`flex flex-col gap-2 `}>
              <Label htmlFor="ingredients">Ingredients</Label>
              <Input
                name="ingredients"
                placeholder="List ingredients..."
                id="ingredients"
              />
            </div>
            <div className={`flex flex-col gap-2 `}>
              <Label htmlFor="img">Food image</Label>
              <Input className="h-[138px]" name="img" id="img" />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              form="dish"
              className="w-[123px] py-2 px-4 bg-black rounded-md text-white "
            >
              Add Dish
            </button>
          </div>{" "}
        </form>
      </DialogContent>
    </Dialog>
  );
};

// const [formData, setFormData] = useState({});

// const handleOnChange = (e: { target: { name: any; value: any } }) => {
//   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// };

// const addFood = async (food: FormData) => {
//   try {
//     const res = await axios.post("http://localhost:4000/food", food);
//     console.log("category", res.data.message);
//     mutate("http://localhost:4000/food");
//   } catch (error) {
//     console.error(error, "ERROR");
//   }
// };

// console.log(formData);

// type FormData = {
//   name: string;
//   price: string;
//   ingredients: string;
//   img: string;
// };
