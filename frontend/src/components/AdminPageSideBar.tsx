import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import OrderSvg from "@/Icons/OrderSvg";
import MenuLogoSvg from "@/Icons/MenuLogoSvg";
import Link from "next/link";

export const AdminPageSideBar = () => {
  return (
    <div className="py-9 px-5 flex flex-col w-[205px] bg-white h-full sticky top-0">
      <div>
        <Logo om={"black"} nom={"black"} swift={"#71717A"} />
      </div>

      <div className="w-full flex flex-col gap-6 mt-10">
        <Link
          href={"/admin/food"}
          className="w-[165px] px-6 py-2 gap-2.5 rounded-3xl flex h-10"
        >
          <MenuLogoSvg />
          <p className="text-sm font-medium">Food Menu</p>
        </Link>
        <Link
          href={"/admin/orders"}
          className="px-6 py-2 gap-2.5 rounded-3xl bg-black flex"
        >
          <OrderSvg />
          <p className="text-sm font-medium text-white">Orders</p>
        </Link>
      </div>
    </div>
  );
};
