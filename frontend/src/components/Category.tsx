import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DishCard } from "./DishCard";

type categoryType = {
  name: string;
};

export const Category = ({ name }: categoryType) => {
  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardContent>
        <DishCard />
      </CardContent>
    </Card>
  );
};
