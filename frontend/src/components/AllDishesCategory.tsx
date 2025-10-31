import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const AllDishesCategory = () => {
  return (
    <Card className="flex flex-col gap-4 p-6">
      <CardHeader>Dishes category</CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => {
            return (
              <Button>
                All Dishes
                <Badge>112</Badge>
              </Button>
            );
          })}
          <Button>+</Button>
        </div>
      </CardContent>
    </Card>
  );
};
