"use client";

import { Key, useEffect, useState } from "react";
import { AllDishesCategory } from "./AllDishesCategory";
import { Category } from "./Category";
import useSWR from "swr";
import axios from "axios";
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
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   async () => {
  //     const res = await axios.get("http://localhost:4000/category");
  //     console.log(res.data);
  //     console.log(res);

  //     setCategories(res.data);
  //   };
  // }, []);

  const getFoodCategories = async () => {
    const res = await axios.get("http://localhost:4000/category");
    return res.data;
  };

  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/category",
    () => getFoodCategories()
  );

  // console.log(categories);
  return (
    <div className="flex flex-col gap-6">
      <AllDishesCategory data={data} />
      {data &&
        data?.map((c: any, i: Key | null | undefined) => {
          // return <Category key={name} name={name} />;
          return <div key={i}>{c.id}</div>;
        })}
    </div>
  );
};
