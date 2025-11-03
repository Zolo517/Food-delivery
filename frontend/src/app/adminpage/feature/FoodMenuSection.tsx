import { AllDishes } from "@/components/AllDishes";
import { AllDishesCategory } from "@/components/AllDishesCategory";
import { Avatar } from "@/components/ui/avatar";

export const FoodMenuSection = () => {
  return (
    <div className="py-6 px-10 gap-6 ">
      <div className="flex justify-end">
        <Avatar />
      </div>
      <AllDishes />
    </div>
  );
};
