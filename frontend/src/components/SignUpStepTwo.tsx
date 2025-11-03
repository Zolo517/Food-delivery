import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const SignUpStepTwo = ({ letsgoBtn }: { letsgoBtn: () => void }) => {
  return (
    <div className="flex flex-col gap-6">
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
        <span className="text-[#2563EB] text-base">Log in</span>
      </p>
    </div>
  );
};
