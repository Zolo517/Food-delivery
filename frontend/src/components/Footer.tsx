import CompanyLogoSvg from "@/Icons/CompanyLogoSvg";
import { Facebook, FacebookIcon, Instagram } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <div className="bg-black pt-15 pb-[111px] text-[#FAFAFA]">
      <div className="bg-[#ef4444] py-7 flex gap-[34px] overflow-hidden px-[98px]">
        {[0, 1, 2, 3].map((el) => {
          return (
            <p key={el} className=" text-white text-3xl">
              Fresh fast delivered
            </p>
          );
        })}
      </div>
      <div className="flex gap-55 mt-[76px] mb-26 mx-22">
        <div className="flex flex-col gap-[12.41px]">
          <CompanyLogoSvg />
          <div>
            <h4 className="text-lg font-semibold text-white">
              Om
              <span className="text-lg font-semibold text-[#ef4444]">Nom</span>
            </h4>
            <p className=" text-xs text-[#f4f4f5]">Swift delivery</p>
          </div>
        </div>
        <div className="flex gap-28 text-base">
          <div className="flex flex-col gap-4">
            <p className="text-[#71717A]">OMNOM</p>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#71717A]">MENU</p>
            <div className="flex gap-14">
              <div className="flex flex-col gap-4 text-base">
                <p>Appetizers</p>
                <p>Salads</p>
                <p>Pizzas</p>
                <p>Main dishes</p>
                <p>Desserts</p>
              </div>
              <div className=" flex flex-col gap-4 text-base">
                <p>Side dish</p>
                <p>Bruch</p>
                <p>Desserts</p>
                <p>Beverages</p>
                <p>Fish & Sea foods</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#71717A]">FOLLOW US</p>
            <div className="flex gap-2">
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-22 ">
        <Separator className="bg-[#71717A]" />
        <div className="my-8 flex gap-12 text-[#71717A] text-sm">
          <p>
            Copy right 2024
            <span>© Omnom LLC</span>
          </p>
          <p>Privacy policy</p>
          <p>Terms and condition</p>
          <p>Cookie policy</p>
        </div>
      </div>
    </div>
  );
};
