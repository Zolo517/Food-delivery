import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

export const DishCard = () => {
  return (
    <Card>
      <CardContent>
        <Image src={"/"} alt="dish inage" width={100} height={200} />
        <div>
          <h4>Hoolniiner</h4>
          <p>Une</p>
        </div>
        <p>Description</p>
      </CardContent>
    </Card>
  );
};
