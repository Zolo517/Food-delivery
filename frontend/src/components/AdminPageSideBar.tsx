import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import OrderSvg from "@/Icons/OrderSvg";
import MenuLogoSvg from "@/Icons/MenuLogoSvg";

export const AdminPageSideBar = () => {
  return (
    <SidebarProvider>
      <Sidebar>
        <div className="py-9 px-5 flex flex-col gap-10">
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarContent className="w-full flex flex-col gap-6">
            <Button className="px-6 py-2 gap-2.5">
              {/* <MenuLogoSvg /> */}
              
              <p>Food Menu</p>
            </Button>
            <Button>
              <OrderSvg />
              <p>Orders</p>
            </Button>
          </SidebarContent>
        </div>
      </Sidebar>
    </SidebarProvider>
  );
};
