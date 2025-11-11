"use client";

import { Key, useEffect, useState } from "react";
import { AllDishesCategory } from "./AllDishesCategory";

import useSWR, { mutate } from "swr";
import axios from "axios";
import { CategoryType } from "@/lib/types";
import { log } from "console";
import { fetcher } from "@/lib/utils";
import { AdminCategory } from "./AdminCategory";

// const categories = [
//   "Appetizers",
//   "Salads",
//   "Pizzas",
//   "Lunch Favorites",
//   "Main dishes",
//   "Fish & Sea foods",
//   "Brunch",
//   "Side dish",
//   "Dess1erts",
//   "Beverages",
// ];

export const AllDishes = () => {
  // const [categories, setCategories] = useState<CategoryType[]>([]);

  //   useEffect(() => {
  //     (async () => {
  //       const res = await axios.get("https://localhost:4000/category");
  //       setCategories(res.data);
  //       console.log(categories);
  //     })();
  // console.log(categories);

  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/category",
    fetcher
  );

  const addFoodCategory = async (name: string) => {
    const res = await axios.post("http://localhost:4000/category", name);
    console.log("category", res.data.message);
    mutate("http://localhost:4000/category");
  };

  // console.log(categories);
  return (
    <div className="flex flex-col gap-6">
      <AllDishesCategory data={data} addFoodCategory={addFoodCategory} />
      {data &&
        data.map((c: CategoryType, i: number) => {
          if (c.categoryName === "All dishes") {
            return;
          }
          return <AdminCategory key={i} name={c} />;
        })}
    </div>
  );
};
