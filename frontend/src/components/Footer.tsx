import CompanyLogoSvg from "@/Icons/CompanyLogoSvg";
import { FacebookIcon } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-black pt-15 pb-[111px]">
      <div className="bg-[#ef4444] py-7 flex gap-[34px] overflow-hidden px-[98px]">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => {
          return <p className="text-white text-3xl">Fresh fast delivered</p>;
        })}
      </div>
      <div className="flex gap-55 ">
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
        <div className="flex gap-28">
          <div className="flex flex-col gap-4">
            <p>OMNOM</p>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>
          <div className="flex gap-14">
            <div>
              <p>MENU</p>
              <p>Appetizers</p>
              <p>Salads</p>
              <p>Pizzas</p>
              <p>Main dishes</p>
              <p>Desserts</p>
            </div>
            <div>
              <p>Side dish</p>
              <p>Bruch</p>
              <p>Desserts</p>
              <p>Beverages</p>
              <p>Fish & Sea foods</p>
            </div>
          </div>
          <div>
            <p>FOLLOW US</p>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
