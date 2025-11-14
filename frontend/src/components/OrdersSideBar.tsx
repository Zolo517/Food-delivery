import { ShoppingCartSvg } from "@/Icons/ShoppingCartSvg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { CheckoutAlert } from "./CheckoutAlert";
import { XSvg } from "@/Icons/XSvg";
import { ButtonX } from "./ButtonX";
import { OrdersFoodCard } from "./OrdersFoodCard";

export const OrdersSideBar = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="flex justify-center items-center w-9 h-9 rounded-full bg-white">
          <ShoppingCartSvg stroke={"#18181B"} />
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-6 border-l border-l-[#E4E4E7]">
        <DrawerHeader className="flex justify-between">
          <DrawerTitle>
            <div className="flex gap-3 items-center">
              <ShoppingCartSvg stroke="white" />
              <p className="text-white">Order detail</p>
            </div>
          </DrawerTitle>
          <DrawerClose>
            <ButtonX color={"#E4E4E7"} />
          </DrawerClose>
        </DrawerHeader>
        <div className="px-8 flex flex-col gap-6">
          <div className="flex  bg-white p-1 rounded-full gap-2">
            <p className="bg-[#ef4444] rounded-full py-1 px-2 w-full text-center text-white">
              Cart
            </p>
            <p className="bg-[#ef4444] rounded-full py-1 px-2 w-full text-center text-white">
              Order
            </p>
          </div>
          <Card className="w-full">
            <CardContent className="rounded-3xl p-4 flex flex-col gap-5">
              <CardTitle className="text-[#71717A] text-xl">My cart</CardTitle>

              {[0, 1].map((el) => {
                return (
                  <div key={el}>
                    <OrdersFoodCard />
                    <Separator className="mt-5" />
                  </div>
                );
              })}
              <div className="flex flex-col gap-2">
                <Label className="text-xl font-semibold text-[#71717A]">
                  Delivery Location
                </Label>
                <Textarea placeholder="Please share your complete address" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="rounded-3xl p-4 flex flex-col gap-5">
              <CardTitle className="text-[#71717A] text-xl">
                Payment Info
              </CardTitle>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-base text-[#71717A]">Items </p>
                  <p className="font-semibold text-lg"> </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base text-[#71717A]">Shipping</p>
                  <p className="font-semibold text-lg">5000₮</p>
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-base text-[#71717A]">Total</p>
                <p className="font-semibold text-lg"></p>
              </div>
              <CheckoutAlert />
            </CardContent>
          </Card>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
