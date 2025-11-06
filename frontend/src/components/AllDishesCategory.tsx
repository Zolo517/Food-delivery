"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { CategoryType } from "@/lib/types";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import axios from "axios";

type propsType = {
  data: CategoryType[];
  addFoodCategory: (name: string) => Promise<void>;
};

export const AllDishesCategory = ({ data, addFoodCategory }: propsType) => {
  const [value, setValue] = useState("");

  console.log(value);
  console.log();
  return (
    <Card className="flex flex-col gap-4 p-6">
      <CardHeader className="text-xl font-semibold -tracking-[0.5px]">
        Dishes category
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {data &&
            data?.map((el, i) => {
              return (
                <Button
                  variant={"outline"}
                  className="rounded-full py-2 px-4"
                  key={i}
                >
                  {el.categoryName}
                  <Badge>7</Badge>
                </Button>
              );
            })}
          <Dialog>
            <DialogTrigger>
              <button className="w-9 h-9 flex justify-center items-center rounded-full bg-[#0c4b78]">
                <Plus className="text-white " />
              </button>
            </DialogTrigger>
            <DialogContent className="w-115">
              <DialogTitle className="mb-4 text-lg font-semibold">
                Add new category
              </DialogTitle>
              <div className="flex flex-col gap-2 mt-6 mb-12">
                <DialogDescription className="text-black text-sm font-medium">
                  Category name
                </DialogDescription>
                <Input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Type category name..."
                  className="border-[#E4E4E7]-1 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => addFoodCategory({ categoryName: value })}
                  className="w-[123px] py-2 px-3 bg-black rounded-md text-white "
                >
                  Add category
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};
