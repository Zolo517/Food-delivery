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
  addDish: (dish: object) => Promise<void>;
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Food name</Label>
              <Input
                id="name"
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                placeholder="Type food name"
                className="border-[#E4E4E7]-1 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="price">Food price</Label>
              <Input
                id="price"
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                placeholder="Enter price..."
                className="border-[#E4E4E7]-1 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Input
              id="ingredients"
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              placeholder="List ingredients..."
              className="border-[#E4E4E7]-1 rounded-md h-[90px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="image">Food image</Label>
            <Input
              id="image"
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              type="file"
              className="border-[#E4E4E7]-1 rounded-md h-[138px]"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => addDish({})}
            className="w-[123px] py-2 px-4 bg-black rounded-md text-white "
          >
            Add Dish
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
