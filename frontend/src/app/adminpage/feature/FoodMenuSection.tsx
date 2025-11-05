import { AllDishes } from "@/components/AllDishes";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const FoodMenuSection = () => {
  return (
    <div className="py-6 px-10  flex flex-col gap-6 bg-[#f4f4f5]">
      <div className="flex justify-end">
        <Avatar>
          <AvatarImage
            src={"https://github.com/maxleiter.png"}
            alt="@maxleiter"
          />
        </Avatar>
      </div>
      <AllDishes />
    </div>
  );
};
