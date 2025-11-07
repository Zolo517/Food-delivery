import { Card, CardContent } from "@/components/ui/card";
import { dishType } from "@/lib/types";
import Image from "next/image";

export const DishCard = ({ dish }: { dish: dishType }) => {
  return (
    <Card className="w-[270.75px] h-[241px]">
      <CardContent>
        {/* <Image src={dish.image} alt="dish image" width={100} height={129} /> */}
        <div>
          <h4>{dish.name}</h4>
          <p>{dish.price}</p>
        </div>
        <p>{dish.ingredients}</p>
      </CardContent>
    </Card>
  );
};
