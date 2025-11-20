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
import { CategoryType, dishType } from "@/lib/types";
import { PencilSvg } from "@/Icons/PencilSvg";
import { LabelAndInput } from "@/components/LabelAndInput";
import { TrashSvg } from "@/Icons/TrashSvg";
import { axiosInstance } from "@/lib/utils";
import useSWR from "swr";

export const EditDishDialog = ({ dish }: { dish: dishType }) => {
  console.log(dish._id, "id shuu");
  const editDish = async (id: string) => {
    const res = await axiosInstance.put("/food", id);
  };

  const { data, error, isLoading } = useSWR("http://localhost:4000/category", );

  // console.log(dish, "name");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="absolute bg-white w-11 h-11 rounded-full top-[83px] left-[194px]"
        >
          <PencilSvg />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dishes Info</DialogTitle>
        <LabelAndInput
          label={"Dish name"}
          w={"288px"}
          id="name"
          defaultValue={dish.name}
        />
        <div className="flex justify-between">
          <Label>Dish Category</Label>
          <Select>
            <SelectTrigger className="w-72 ">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>

        <LabelAndInput
          label="Ingredients"
          w="288px"
          text="text"
          id="ingre"
          defaultValue={dish.ingredients}
        />

        <LabelAndInput
          label="Price"
          w="288px"
          id="price"
          defaultValue={dish.price}
        />

        <LabelAndInput
          // type="file"
          label="Image"
          w={"288px"}
          h="116px"
          id="img"
          defaultValue={dish.img}
        />
        <div className="flex items-center justify-between">
          <Button variant={"outline"} className="border-red-500">
            <TrashSvg />
          </Button>
          <button
            onClick={() => dishValue}
            className="w-[126px] h-10  bg-black rounded-md text-white "
          >
            Save changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
