import { MapPin, ShoppingCart, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Profile } from "./Profile";

export const Navbar = () => {
  return (
    <div className="flex justify-between py-16 px-22">
      <Logo om={"white"} nom={"#EF4444"} swift={"#F4F4F5"} />
      <div className="flex items-center">
        <div>
          <MapPin />
        </div>
        <div className="w-8 h-8 rounded-full bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M0.5 0.5H1.83333L3.60667 8.78C3.67172 9.08324 3.84045 9.35432 4.08381 9.54657C4.32717 9.73883 4.62994 9.84023 4.94 9.83333H11.46C11.7635 9.83284 12.0577 9.72886 12.294 9.53856C12.5304 9.34825 12.6948 9.08302 12.76 8.78667L13.86 3.83333H2.54667M5.13333 13.1333C5.13333 13.5015 4.83486 13.8 4.46667 13.8C4.09848 13.8 3.8 13.5015 3.8 13.1333C3.8 12.7651 4.09848 12.4667 4.46667 12.4667C4.83486 12.4667 5.13333 12.7651 5.13333 13.1333ZM12.4667 13.1333C12.4667 13.5015 12.1682 13.8 11.8 13.8C11.4318 13.8 11.1333 13.5015 11.1333 13.1333C11.1333 12.7651 11.4318 12.4667 11.8 12.4667C12.1682 12.4667 12.4667 12.7651 12.4667 13.1333Z"
              stroke="#18181B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Profile />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="flex flex-col items-center gap-2">
              <h3>UserName</h3>
              <Button className="rounded-full" variant={"secondary"}>
                Sign out
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
