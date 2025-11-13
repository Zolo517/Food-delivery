import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DishDialog } from "./DishDialog";

export const AddDishCard = ({ name, id }: { name: string; id: string }) => {
  return (
    <Card className="border-dashed border border-[#731616] w-[270.75px] h-[241px] flex flex-col justify-center ">
      <CardContent className="flex flex-col gap-6 items-center">
        <DishDialog name={name} id={id} />
        <p className="text-sm font-medium"> Add new dish to {name}</p>
      </CardContent>
    </Card>
  );
};
