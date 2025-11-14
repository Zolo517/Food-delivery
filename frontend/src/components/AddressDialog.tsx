import { ArrowRightSvg } from "@/Icons/ArrowRightSvg";
import { MapPinSvg } from "@/Icons/MapPinSvg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

export const AddressDialog = () => {
  // const [address, setAddress] = useState("");

  const hanleOnSubmit = (e: { currentTarget: HTMLFormElement | undefined }) => {
    const formData = new FormData(e.currentTarget);

    console.log(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex bg-[white] rounded-full gap-1 py-2 px-3 items-center">
          <MapPinSvg />
          <p className="text-red-500">
            Delivery address:{" "}
            <span className="text-[#71717A]">Add Location</span>
          </p>
          <ArrowRightSvg />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Please write your delivery address!</DialogTitle>
        <form className="flex flex-col gap-12" onSubmit={hanleOnSubmit}>
          <Textarea
            className="h-20"
            placeholder="Please share your complete address"
          />
          <DialogFooter>
            <DialogClose className="px-4 border-[#F4F4F5]-1">
              Cancel
            </DialogClose>
            <Button className="px-4" type="submit">
              Deliver here
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
