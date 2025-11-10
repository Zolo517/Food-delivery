import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryType } from "@/lib/types";

export const EditDishDialog = ({ name }: { name: CategoryType }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"secondary"}
          className="absolute bg-white w-11 h-11 rounded-full top-[83px] left-[194px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_27717_3075)">
              <path
                d="M11.334 1.99955C11.5091 1.82445 11.7169 1.68556 11.9457 1.5908C12.1745 1.49604 12.4197 1.44727 12.6673 1.44727C12.9149 1.44727 13.1601 1.49604 13.3889 1.5908C13.6177 1.68556 13.8256 1.82445 14.0007 1.99955C14.1757 2.17465 14.3146 2.38252 14.4094 2.61129C14.5042 2.84006 14.5529 3.08526 14.5529 3.33288C14.5529 3.58051 14.5042 3.8257 14.4094 4.05448C14.3146 4.28325 14.1757 4.49112 14.0007 4.66622L5.00065 13.6662L1.33398 14.6662L2.33398 10.9996L11.334 1.99955Z"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_27717_3075">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dishes Info</DialogTitle>
        <div className="flex justify-between">
          <Label>Dish name</Label>
          <Input className="w-72" />
        </div>
        <div className="flex justify-between">
          <Label>Dish Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {/* {name.map((n) => {
                return (
                  <SelectItem key={n.categoryName} value="">
                    {n.categoryName}
                  </SelectItem>
                );
              })} */}
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between">
          <Label>Ingredients</Label>
          <Textarea className="w-72 h-20" />
        </div>
        <div className="flex justify-between">
          <Label>Price</Label>
          <Input className="w-72" />
        </div>
        <div className="flex justify-between">
          <Label>Image</Label>
          <Input type="file" className="w-72 h-[116px]" />
        </div>
        <div className="flex items-center justify-between">
          <Button variant={"outline"} className="border-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2 3.99967H14M12.6667 3.99967V13.333C12.6667 13.9997 12 14.6663 11.3333 14.6663H4.66667C4 14.6663 3.33333 13.9997 3.33333 13.333V3.99967M5.33333 3.99967V2.66634C5.33333 1.99967 6 1.33301 6.66667 1.33301H9.33333C10 1.33301 10.6667 1.99967 10.6667 2.66634V3.99967"
                stroke="#EF4444"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <button
            // onClick={() => addDish({})}
            className="w-[126px] h-10  bg-black rounded-md text-white "
          >
            Save changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
