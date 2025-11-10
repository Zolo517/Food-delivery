import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { dishType } from "@/lib/types";
import { useState } from "react";
import { PlusSvg } from "@/Icons/PlusSvg";

export const AddDishToCartDialog = ({ dish }: { dish: dishType }) => {
  const [index, setIndex] = useState(1);

  const plusBtn = () => {
    setIndex(index + 1);
  };
  const minusBtn = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"secondary"}
          className="bg-white rounded-full w-11 h-11 absolute top-[168px] left-[323px]"
        >
          <PlusSvg />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex gap-6 max-w-[826px]! w-200!">
        <div className="w-[380px]! h-[364px] bg-[url('/1.png')] bg-cover  bg-center rounded-xl"></div>
        <div className="flex flex-col justify-between w-[58%]">
          <div className="flex flex-col gap-3">
            <DialogTitle className="font-semibold text-3xl text-red-500 mt-8">
              {" "}
              {dish.name}
            </DialogTitle>
            <p>{dish.ingredients}</p>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex justify-between">
              <div>
                <p className="text-base">Total price</p>
                <p className="text-2xl font-semibold">{dish.price * index}₮</p>
              </div>
              <div className="flex gap-3 items-center">
                <Button
                  variant={"outline"}
                  onClick={minusBtn}
                  className="rounded-full w-11 h-11"
                >
                  -
                </Button>
                <p>{index}</p>
                <Button
                  variant={"outline"}
                  onClick={plusBtn}
                  className="rounded-full w-11 h-11"
                >
                  +
                </Button>
              </div>
            </div>
            <Button className="w-full rounded-full">Add to cart</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
