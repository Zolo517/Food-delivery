import { MinusSvg } from "@/Icons/MinusSvg";
import { ButtonX } from "./ButtonX";
import { useState } from "react";
import { PlusSvg } from "@/Icons/PlusSvg";

export const OrdersFoodCard = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-2.5 h-30">
      <div className="bg-[url(/1.png)] bg-cover bg-center w-31 h-30 rounded-xl" />
      <div className="flex flex-col gap-6 w-[305px]">
        <div className="flex gap-2.5">
          <div className="w-[259px]">
            <h5 className="text-[#ef4444] font-bold text-base">
              Sunshine stackers
            </h5>
            <p className="text-xs">
              {" "}
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </p>
          </div>
          <ButtonX color={"#ef4444"} />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <MinusSvg />
            <p className="text-lg font-bold">{count}</p>
            <PlusSvg color={"#ef4444"} />
          </div>
          <p className="text-base font-bold">5000₮</p>
        </div>
      </div>
    </div>
  );
};
