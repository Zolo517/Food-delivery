"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { CategoryType, dishType } from "@/lib/types";
import { DishCard } from "./DishCard";
import useSWR, { mutate } from "swr";
import { AddDishCard } from "./AddDishCard";
import { axiosInstance, fetcher } from "@/lib/utils";

export const Category = ({ name }: { name: CategoryType }) => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/food",
    fetcher
  );
  const addDish = async (dish: object) => {
    await axiosInstance.post("/food", dish);
    mutate("http://localhost:4000/food");
  };

  return (
    <Card className="p-5">
      <CardHeader className="text-xl font-semibold -tracking-[0.5px]">
        {name.categoryName}
      </CardHeader>
      <CardContent className="flex flex-wrap gap-5">
        <AddDishCard addDish={addDish} name={name.categoryName} />
        {data &&
          data?.map((dish: dishType, i: number) => {
            return <DishCard key={i} dish={dish} />;
          })}
      </CardContent>
    </Card>
  );
};
