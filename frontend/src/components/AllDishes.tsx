"use client";

import { Key, useEffect, useState } from "react";
import { AllDishesCategory } from "./AllDishesCategory";
import { Category } from "./Category";
import useSWR from "swr";
import axios from "axios";
import { CategoryType } from "@/lib/types";
import { fetcher } from "@/lib/utils";
import { log } from "console";

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
  //   }, []);
  // console.log(categories);

 

  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/category",
    fetcher
  );

  // console.log(categories);
  return (
    <div className="flex flex-col gap-6">
      <AllDishesCategory data={data} />
      {data &&
        data.map((c: CategoryType, i: number) => {
          return <Category key={i} name={data} />;
        })}
    </div>
  );
};
