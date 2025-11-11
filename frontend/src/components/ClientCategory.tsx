"use client";

import { DishCard } from "@/app/admin/food/_components";
import { CategoryType, dishType } from "@/lib/types";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { AddDishToCartDialog } from "@/components/AddDishToCartDialog";

export const ClientCategory = ({ category }: { category: CategoryType }) => {
  return (
    <div className="flex flex-col gap-[54px]">
      <p className="text-3xl font-semibold text-white">
        {category.categoryName}
      </p>
      <div className="flex flex-wrap gap-9">
        {" "}
        {category.foods &&
          category.foods?.map((dish: dishType, i: number) => {
            return (
              <div key={i} className="relative">
                <DishCard
                  dish={dish}
                  cardW={"397.3px"}
                  cardH={"342px"}
                  imgW={"365.3px"}
                  imgH={"210px"}
                  name={"24px"}
                  weight={"semibold"}
                  price={"18px"}
                  ingre={"14px"}
                />
                <AddDishToCartDialog dish={dish} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
