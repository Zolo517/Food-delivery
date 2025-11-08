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
        <div>
          <ShoppingCart />
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
