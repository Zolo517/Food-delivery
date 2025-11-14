import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

export const CheckoutAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="bg-[#ef4444] rounded-full text-white"
        >
          Checkout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col items-center">
        <AlertDialogHeader className="flex justify-center">
          <AlertDialogTitle>
            Your order has been successfully placed!
          </AlertDialogTitle>
        </AlertDialogHeader>
        <Image
          src={"/boywithballoon.png"}
          alt="boy with balloon "
          width={250}
          height={250}
        />

        <div className="flex justify-center">
          <AlertDialogCancel className="rounded-full bg-[#F4F4F5] px-8 py-2">
            Back to home
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
