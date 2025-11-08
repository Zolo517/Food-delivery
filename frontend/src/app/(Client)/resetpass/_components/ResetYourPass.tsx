import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";



export const ResetYourPass = ({ nextPage }: { nextPage: () => void }) => {
  return (
    <form onSubmit={nextPage} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#09090B] text-2xl font-semibold">
          {" "}
          Reset your password
        </h3>
        <p className="text-[#71717A] text-base">
          Enter your email to receive a password reset link.
        </p>
      </div>
      <Input
        placeholder="example@gmail.com"
        className="border-[#E4E4E7]-1 rounded-md"
      />
      <Button type="submit" className="w-full">
        Send Link
      </Button>
      <p className="text-[#71717A] text-base text-center">
        Don't have an account?{" "}
        <Link href={"/signup"}>
          <span className="text-[#2563EB] text-base">Sign up</span>
        </Link>
      </p>
    </form>
  );
};
