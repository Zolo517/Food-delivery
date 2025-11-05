import Link from "next/link";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const LoginForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#09090B] text-2xl font-semibold"> Log in</h3>
        <p className="text-[#71717A] text-base">
          Log in to enjoy your favorite dishes.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Enter your email address"
          className="border-[#E4E4E7]-1 rounded-md"
        />
        <Input
          placeholder="Password"
          className="border-[#E4E4E7]-1 rounded-md"
        />
        <Link
          href={"/resetpass"}
          className="underline underline-offset-auto text-sm"
        >
          Forgot password ?
        </Link>
      </div>
      <Button type="submit" variant={"secondary"} className="w-full">
        Let's go
      </Button>
      <p className="text-[#71717A] text-base text-center ">
        Don't have an account?{" "}
        <Link href={"/signup"}>
          <span className="text-[#2563EB] text-base">Sign Up</span>
        </Link>
      </p>
    </div>
  );
};
