import { AllDishes } from "@/components/AllDishes";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const FoodMenuSection = () => {
  return (
    <div className=" px-10  flex flex-col gap-6 bg-[#f4f4f5]">
      <div className="flex justify-end sticky top-0 bg-[#f4f4f5] w-full">
        <Avatar className="mt-6">
          <AvatarImage
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL1zL2R1W0aBbP-WvL6Tiv6KH660Weoh_ug&s"
            }
            alt="@maxleiter"
          />
        </Avatar>
      </div>
      <AllDishes />
    </div>
  );
};
