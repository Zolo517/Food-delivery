"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { CategoryType, dishType } from "@/lib/types";
import { DishCard } from "./DishCard";
import useSWR, { mutate } from "swr";
import { AddDishCard } from "./AddDishCard";
import { axiosInstance, fetcher } from "@/lib/utils";
import { EditDishDialog } from "./EditDishDialog";

export const AdminCategory = ({ name }: { name: any }) => {
  const { foods } = name;

  console.log(name._id, "category id");
  console.log(name.categoryName, "category name");
  return (
    <Card className="p-5">
      <CardHeader className="text-xl font-semibold -tracking-[0.5px]">
        {name.categoryName}
      </CardHeader>
      <CardContent className="flex flex-wrap gap-5">
        <AddDishCard name={name.categoryName} id={name._id} />
        {foods &&
          foods?.map((dish: dishType, i: number) => {
            return (
              <div key={i} className="relative">
                <DishCard
                  dish={dish}
                  cardW={"270.75px"}
                  cardH={"241px"}
                  imgW={"238.75px"}
                  imgH={"129px"}
                  name={"14px"}
                  weight={"medium"}
                  price={"12px"}
                  ingre={"12px"}
                />
                <EditDishDialog dish={dish} />
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
};
