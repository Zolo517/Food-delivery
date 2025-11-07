import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Dispatch, SetStateAction } from "react";

export const SignUpStepTwo = ({
  letsgoBtn,
  signup,
  setPass,
}: {
  letsgoBtn: () => void;
  signup: (Signup: object) => Promise<void>;
  setPass: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <form onSubmit={signup} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#09090B] text-2xl font-semibold">
          {" "}
          Create a strong password
        </h3>
        <p className="text-[#71717A] text-base">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Password"
          className="border-[#E4E4E7]-1 rounded-md"
        />
        <Input
          type="password"
          placeholder="Confirm"
          className="border-[#E4E4E7]-1 rounded-md"
        />
        <div className="flex gap-2 items-center">
          <Checkbox id="show" />
          <Label className="text-[#71717A] text-sm text-center" htmlFor="show">
            Show password{" "}
          </Label>
        </div>
      </div>
      <Button type="submit" variant={"secondary"} className="w-full">
        Let's go
      </Button>
      <p className="text-[#71717A] text-base text-center">
        Already have an account?{" "}
        <Link href={"/login"}>
          <span className="text-[#2563EB] text-base">Log in</span>
        </Link>
      </p>
    </form>
  );
};
