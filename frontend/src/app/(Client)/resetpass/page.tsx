"use client";

import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { ResetYourPass } from "./_components/ResetYourPass";
import { VerifyEmail } from "./_components/VerifyEmail";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ResetPassSteps = [ResetYourPass, VerifyEmail][currentIndex];

  const nextPage = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="p-5 flex gap-12 ">
      <div className="w-104 ml-20 flex flex-col justify-center gap-6">
        <Button variant={"outline"} className="font-semibold w-fit">
          <ArrowLeft />
        </Button>
        <ResetPassSteps nextPage={nextPage} />
      </div>
      <div className="w-full bg-[#064357] "></div>
    </div>
  );
}
