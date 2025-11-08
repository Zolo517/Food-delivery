import { Button } from "@/components/ui/button";
import Link from "next/link";

export const VerifyEmail = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#09090B] text-2xl font-semibold">
          {" "}
          Please verify your email
        </h3>
        <p className="text-[#71717A] text-base">
          We just sent an email to {} . Click the link in the email to verify
          your account.
        </p>
      </div>

      <Button type="submit" className="w-full">
        Resend email
      </Button>
    </form>
  );
};
