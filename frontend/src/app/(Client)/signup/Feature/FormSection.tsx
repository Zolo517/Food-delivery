"use client";

import { SignUpStepOne } from "@/components/SignUpStepOne";
import { SignUpStepTwo } from "@/components/SignUpStepTwo";
import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { fetcher } from "@/lib/utils";
import axios from "axios";
import useSWR, { mutate } from "swr";

export const FormSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  console.log(email, "email");

  const SignupSteps = [SignUpStepOne, SignUpStepTwo][currentIndex];

  const letsgoBtn = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const backbtn = () => {
    setCurrentIndex(currentIndex - 1);
  };

  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:4000/auth/sign-up",
  //   fetcher
  // );

  // const signup = async (Signup: object) => {
  //   const res = await axios.post("http://localhost:4000/auth/sign-up", Signup);
  //   mutate("http://localhost:4000/auth/sign-up");
  // };
  // const validation = (email)=>{
  // if(currentIndex===0){
  //   if(email){

  //   }
  // }

  // }

  return (
    <div className="w-104 ml-20 flex flex-col justify-center gap-6">
      <Link href={"/"}>
        <Button variant={"outline"} className="font-semibold w-fit">
          <ArrowLeft />
        </Button>
      </Link>
      {/* <SignupSteps
        setEmail={setEmail}
        setPass={setPass}
        signup={signup}
        letsgoBtn={letsgoBtn}
      /> */}
    </div>
  );
};
