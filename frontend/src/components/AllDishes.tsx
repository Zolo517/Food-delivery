"use client";

import { useState } from "react";
import { AllDishesCategory } from "./AllDishesCategory";
import { Category } from "./Category";
import useSWR from "swr";
import axios from "axios";

const categories = [
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch Favorites",
  "Main dishes",
  "Fish & Sea foods",
  "Brunch",
  "Side dish",
  "Dess1erts",
  "Beverages",
];

export const AllDishes = () => {
  const getFoodCategories = async () => {
    const res = await axios.get("https://localhost:4000/category");
    return res.data;
  };

  const { data, error, isLoading } = useSWR(
    "https://localhost:4000/categories",
    () => getFoodCategories()
  );

  return (
    <div className="flex flex-col gap-6">
      <AllDishesCategory data={data}/>
      {data &&
        data?.map((name: string) => {
          return <Category key={name} name={name} />;
        })}
    </div>
  );
};
