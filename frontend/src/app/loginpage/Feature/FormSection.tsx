"use client";

import { SignUpStepOne } from "@/components/SignUpStepOne";
import { SignUpStepTwo } from "@/components/SignUpStepTwo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export const FormSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const SignupSteps = [SignUpStepOne, SignUpStepTwo][currentIndex];

  const letsgoBtn = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const backbtn = () => {
    setCurrentIndex(currentIndex - 1);
  };
  return (
    <div className="w-104 ml-20 flex flex-col justify-center gap-6">
      <Button variant={"outline"} className="font-semibold w-fit">
        <ArrowLeft />
      </Button>
      <SignupSteps letsgoBtn={letsgoBtn} />
    </div>
  );
};
