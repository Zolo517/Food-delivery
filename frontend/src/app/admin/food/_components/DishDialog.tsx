import { LabelAndInput } from "@/components/LabelAndInput";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const DishDialog = ({
  name,
  addDish,
}: {
  name: string;
  addDish?: (dish: object) => Promise<void>;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="w-9 h-9 flex justify-center items-center rounded-full bg-[#0c4b78]">
          <p className="text-white my-2 mx-4">+</p>
        </button>
      </DialogTrigger>
      <DialogContent className="w-115 ">
        <DialogTitle className="mb-4 text-lg font-semibold">
          Add new Dish to {name}
        </DialogTitle>
        <div className="flex flex-col gap-6 mt-6 mb-12">
          <div className="flex gap-6">
            <LabelAndInput
              gap="gap"
              label="Food name"
              id="name"
              place="Type food name"
            />
            <LabelAndInput
              gap="gap"
              label="Food price"
              id="price"
              place="Enter price..."
            />
          </div>
          <LabelAndInput
            gap="gap"
            label="Ingredients"
            id="ingre"
            place="List ingredients..."
          />
          <LabelAndInput
            gap="gap"
            label="Food image"
            h="138px"
            id="img"
            type="file"
          />
        </div>
        <div className="flex justify-end">
          <button
            // onClick={() => addDish({})}
            className="w-[123px] py-2 px-4 bg-black rounded-md text-white "
          >
            Add Dish
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
