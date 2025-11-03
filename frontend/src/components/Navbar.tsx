import { MapPin, ShoppingCart, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <div className="flex justify-between ">
      <Logo />
      <div>
        <div>
          <MapPin />
        </div>
        <div>
          <ShoppingCart />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="">
              <h3>hsdl</h3>
              <Button>Sign out</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
