import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SignUpStepOne = ({ letsgoBtn }: { letsgoBtn: () => void }) => {
  return (
    <form onSubmit={letsgoBtn} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#09090B] text-2xl font-semibold">
          {" "}
          Create your account
        </h3>
        <p className="text-[#71717A] text-base">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <Input
        placeholder="Enter your email address"
        className="border-[#E4E4E7]-1 rounded-md"
      />
      <Button type="submit" variant={"secondary"} className="w-full">
        Let's go
      </Button>
      <p className="text-[#71717A] text-base text-center">
        Already have an account?{" "}
        <span className="text-[#2563EB] text-base">Log in</span>
      </p>
    </form>
  );
};
