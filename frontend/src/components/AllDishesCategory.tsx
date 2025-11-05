import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export const AllDishesCategory = ({data}:{data:any}) => {
  return (
    <Card className="flex flex-col gap-4 p-6">
      <CardHeader className="text-xl font-semibold -tracking-[0.5px]">
        Dishes category
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {data && data?.map((el) => {
            return (
              <Button
                variant={"outline"}
                className="rounded-full py-2 px-4"
                key={el}
              >
                All Dishes
                <Badge>111</Badge>
              </Button>
            );
          })}
          <Button className="rounded-full py-2 px-4 bg-[#0c4b78]">
            <Plus />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
