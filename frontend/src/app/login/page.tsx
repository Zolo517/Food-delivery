import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="p-5 flex gap-12 ">
      <div className="w-104 ml-20 flex flex-col justify-center gap-6">
        <Button variant={"outline"} className="font-semibold w-fit">
          <ArrowLeft />
        </Button>
        <LoginForm />
      </div>
      <div className="w-full bg-[#064357] "></div>
    </div>
  );
}
