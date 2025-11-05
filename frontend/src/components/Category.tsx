import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DishCard } from "./DishCard";
import { CategoryType } from "@/lib/types";

export const Category = ({ name }: { name: CategoryType }) => {
  return (
    <Card className="p-5">
      <CardHeader className="text-xl font-semibold -tracking-[0.5px]">
        {name.categoryName}
      </CardHeader>
      <CardContent>
        <DishCard />
      </CardContent>
    </Card>
  );
};
