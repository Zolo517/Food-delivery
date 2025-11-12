"use client";

import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { ShoppingCartSvg } from "@/Icons/ShoppingCartSvg";
import { AddressDialog } from "./AddressDialog";
import { UserContext } from "@/contexts/UserContext";
import { LoggedUser } from "@/lib/types";
import { createContext } from "react";

export const Navbar = () => {
  // const user = {
  //   email: "Zoloo",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL1zL2R1W0aBbP-WvL6Tiv6KH660Weoh_ug&s",
  // };
  return (
    // <UserContext value={user}>
      <div className="flex justify-between py-16 px-22">
        <Logo om={"white"} nom={"#EF4444"} swift={"#F4F4F5"} />
        <div className="flex items-center gap-[12.81px]">
          <AddressDialog />
          <ShoppingCartSvg />
          <Profile />
        </div>
      </div>
    // </UserContext>
  );
};
