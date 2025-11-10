import { Card, CardContent } from "@/components/ui/card";
import { dishType } from "@/lib/types";
import Image from "next/image";

type DishCardProps = {
  dish: dishType;
  cardW: string;
  cardH: string;
  imgW: string;
  imgH: string;
  name: string;
  weight: string;
  price: string;
  ingre: string;
};

export const DishCard = ({
  dish,
  cardW,
  cardH,
  imgW,
  imgH,
  name,
  price,
  weight,
  ingre,
}: DishCardProps) => {
  return (
    <Card className=" rounded-3xl " style={{ width: cardW, height: cardH }}>
      <CardContent className="p-4 flex flex-col gap-5 ">
        {/* <Image src="/1.png" alt="dish image" width={100} height={129} /> */}
        <div
          className="bg-[url('/1.png')] bg-cover  bg-center rounded-xl"
          style={{ width: imgW, height: imgH }}
        ></div>
        <div className="flex flex-col gap-2">
          {" "}
          <div className="flex items-center justify-between">
            <h4
              className={`text-red-500 font-${weight} `}
              style={{ fontSize: name }}
            >
              {dish.name}
            </h4>
            <p className={`font-${weight} `} style={{ fontSize: price }}>
              {dish.price}
            </p>
          </div>
          <p style={{fontSize:ingre}}>{dish.ingredients}</p>
        </div>
      </CardContent>
    </Card>
  );
};

