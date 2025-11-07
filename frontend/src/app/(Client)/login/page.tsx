"use client";

import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/utils";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import useSWR, { mutate } from "swr";

export default function Page() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/auth/sign-in",
    fetcher
  );

  const signin = async (userInfo: object) => {
    const res = await axios.post(
      "http://localhost:4000/auth/sign-in",
      userInfo
    );
    mutate("http://localhost:4000/auth/sign-in");
  };

  return (
    <div className="p-5 flex gap-12 ">
      <div className="w-104 ml-20 flex flex-col justify-center gap-6">
        <Link href={"/"}>
          <Button variant={"outline"} className="font-semibold w-fit">
            <ArrowLeft />
          </Button>
        </Link>
        <LoginForm signin={signin} />
      </div>
      <div className="w-full bg-[#1d293d] "></div>
    </div>
  );
}
