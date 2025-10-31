import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type categoryType = {
  name: string;
};

export const Category = ({ name }: categoryType) => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
