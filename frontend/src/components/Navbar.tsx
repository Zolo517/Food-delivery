import Logo from "@/Icons/Logo";
import { MapPin, ShoppingCart, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <Logo />
        <div>
          <h4>
            Om <span>Nom</span>
          </h4>
          <p>Swift delivery</p>
        </div>
      </div>
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
              <h3>sdfklghds;gl</h3>
              <Button>Sign out</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
