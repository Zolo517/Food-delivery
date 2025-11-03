import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-104">
      <Button variant={"outline"} className="font-semibold">
        <ArrowLeft />
      </Button>
      <h3 className="text-[#09090B] text-2xl font-semibold">
        {" "}
        Create your account
      </h3>
      <p className="text-[#71717A] text-base">
        Sign up to explore your favorite dishes.
      </p>
      <Input
        placeholder="Enter your email address"
        className="border-[#E4E4E7]-1 rounded-md"
      />
      <Button variant={"secondary"} className="w-full">
        Let's go
      </Button>
      <p className="text-[#71717A] text-base">
        Already have an account?{" "}
        <span className="text-[#2563EB] text-base">Log in</span>
      </p>
    </div>
  );
}
