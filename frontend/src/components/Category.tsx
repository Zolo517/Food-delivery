import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DishCard } from "./DishCard";

type categoryType = {
  name: string;
};

export const Category = ({ name }: categoryType) => {
  return (
    <Card className="p-5">
      <CardHeader className="text-xl font-semibold -tracking-[0.5px]">
        {name}
      </CardHeader>
      <CardContent>
        <DishCard />
      </CardContent>
    </Card>
  );
};
