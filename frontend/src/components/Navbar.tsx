"use client";

import { MapPin, Moon, ShoppingCart, Sun, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { MapPinSvg } from "@/Icons/MapPinSvg";
import { ShoppingCartSvg } from "@/Icons/ShoppingCartSvg";
import { ArrowRightSvg } from "@/Icons/ArrowRightSvg";
import { AddressDialog } from "./AddressDialog";

export const Navbar = () => {
  return (
    <div className="flex justify-between py-16 px-22">
      <Logo om={"white"} nom={"#EF4444"} swift={"#F4F4F5"} />
      <div className="flex items-center gap-[12.81px]">
        <AddressDialog />
        <ShoppingCartSvg />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Profile />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 p-4">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-xl font-semibold">UserName</h3>
              <Button className="rounded-full py-2 px-3" variant={"secondary"}>
                Sign out
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
