"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { log } from "console";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

export const LoginForm = ({
  signin,
}: {
  signin: (userInfo: object) => Promise<void>;
}) => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const { data, error, isLoading } = useSWR("", fetcher);

  // console.log(emailValueHandler);

  console.log(emailValue);
  console.log(passValue);

  return (
    <form
      onSubmit={() => signin({ email: emailValue, password: passValue })}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-[#09090B] text-2xl font-semibold"> Log in</h3>
        <p className="text-[#71717A] text-base">
          Log in to enjoy your favorite dishes.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="Enter your email address"
          className="border-[#E4E4E7]-1 rounded-md"
        />
        <Input
          value={passValue}
          onChange={(e) => setPassValue(e.target.value)}
          type="password"
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
    </form>
  );
};
