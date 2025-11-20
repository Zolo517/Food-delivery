"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CategoryType } from "@/lib/types";
import axios from "axios";
import { CircleX, Plus } from "lucide-react";
import { useState } from "react";
import { mutate } from "swr";

type propsType = {
  data: CategoryType[];
  addFoodCategory: (name: string) => Promise<void>;
};

export const AllDishesCategory = ({ data, addFoodCategory }: propsType) => {
  const [value, setValue] = useState("");

  console.log(value);
  console.log();

  const deleteCategory = async (id: string) => {
    const res = await axios.delete(`http://localhost:4000/category/${id}`);
    console.log("categoryname", res.data.message);
    mutate("http://localhost:4000/food");
  };
  return (
    <Card className="flex flex-col gap-4 p-6">
      <CardHeader className="text-xl font-semibold -tracking-[0.5px]">
        Dishes category
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {data &&
            data?.map(({ _id, categoryName, foods }, i: number) => {
              return (
                <Button
                  variant={"outline"}
                  className="rounded-full py-2 px-4 relative"
                  key={i}
                >
                  <CircleX
                    // onClick={deleteCategory(_id)}
                    className="w-3 hover: absolute bottom-6 right-0 hover:scale-50"
                  />

                  {categoryName}
                  <Badge>{foods.length}</Badge>
                </Button>
              );
            })}
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-9 h-9 flex justify-center items-center rounded-full bg-[#0c4b78]">
                <p className="text-white my-2 mx-4">+</p>
              </button>
            </DialogTrigger>

            <DialogContent className="w-115">
              <form onSubmit={() => addFoodCategory({ categoryName: value })}>
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
                    type="submit"
                    className="w-[123px] py-2 px-3 bg-black rounded-md text-white "
                  >
                    Add category
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};
