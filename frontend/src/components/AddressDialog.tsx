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
  const [address, setAddress] = useState("");

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex bg-[white] rounded-full gap-1 py-2 px-3 items-center">
          <MapPinSvg />
          <p className="text-red-500">
            Delivery address:{" "}
            {address ? (
              <span className="text-[#71717A]">{address}</span>
            ) : (
              <span className="text-[#71717A]">Add Location</span>
            )}{" "}
          </p>
          <ArrowRightSvg />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Please write your delivery address!</DialogTitle>
        <form className="flex flex-col gap-12" onSubmit={() => setAddress("")}>
          <Textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="h-20"
            placeholder="Please share your complete address"
          />
          <DialogFooter>
            <DialogClose>
              <Button className="px-4" variant={"outline"}>
                Cancel
              </Button>
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
