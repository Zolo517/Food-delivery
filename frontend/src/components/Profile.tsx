"use client";

import { useContext } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { UserContext } from "@/contexts/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

export const Profile = () => {
  const user = useContext(UserContext);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="">
          <AvatarImage src={user.image} alt="huurhun jennie" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 p-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-semibold">{user.email}</h3>
          {user.email === "Guest" ? (
            <Link href={"/login"}>
              <Button className="rounded-full py-2 px-3" variant={"secondary"}>
                Log in
              </Button>
            </Link>
          ) : (
            <Button className="rounded-full py-2 px-3" variant={"secondary"}>
              Sign out
            </Button>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
