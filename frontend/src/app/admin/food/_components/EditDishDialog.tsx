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
import { PencilSvg } from "@/Icons/PencilSvg";
import { LabelAndInput } from "@/components/LabelAndInput";
import { TrashSvg } from "@/Icons/TrashSvg";

export const EditDishDialog = ({ name }: { name: CategoryType }) => {
  console.log(name, "name");
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"secondary"}
          className="absolute bg-white w-11 h-11 rounded-full top-[83px] left-[194px]"
        >
          <PencilSvg />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dishes Info</DialogTitle>
        <LabelAndInput label={"Dish name"} w={"288px"} id="name" />
        <div className="flex justify-between">
          <Label>Dish Category</Label>
          <Select>
            <SelectTrigger className="w-72 ">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
            
            </SelectContent>
          </Select>
        </div>
        <LabelAndInput label="Ingredients" w="288px" text="text" id="ingre" />

        <LabelAndInput label="Price" w="288px" id="price" />

        <LabelAndInput
          // type="file"
          label="Image"
          w={"288px"}
          h="116px"
          id="img"
        />
        <div className="flex items-center justify-between">
          <Button variant={"outline"} className="border-red-500">
            <TrashSvg />
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
