"use client";

import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetcher } from "@/lib/utils";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { SignUpStepOne } from "../_components/SignUpStepOne";
import { SignUpStepTwo } from "../_components/SignUpStepTwo";

export const FormSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localData, setLocalData] = useState({});
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // console.log(email, "email");
  
  console.log("data", localData);
  
  const SignupSteps = [SignUpStepOne, SignUpStepTwo][currentIndex];
  
  const nextBtn = () => setCurrentIndex(currentIndex + 1);
  
  const prevBtn = () => setCurrentIndex(currentIndex - 1);
  
  useEffect(() => {
    const localoStorageData = JSON.parse(localStorage.getItem("data"));
    if (localoStorageData) {
      setLocalData(localoStorageData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(localData));
  }, [localData]);
  
  // const { data, error, isLoading } = useSWR(
    //   "http://localhost:4000/auth/sign-up",
    //   fetcher
    // );
    
    const signup = async (Signup: object) => {
      const res = await axios.post("http://localhost:4000/auth/sign-up", Signup);
      mutate("http://localhost:4000/auth/sign-up");
    };
    // const validation = (email)=>{
      // if(currentIndex===0){
        //   if(email){
          
        //   }
        // }
        
        // }
        
        return (
          <div className="w-104 ml-20 flex flex-col justify-center gap-6">
      {currentIndex === 1 ? (
        <Button
        onClick={prevBtn}
        variant={"outline"}
        className="font-semibold w-fit"
        >
          <ArrowLeft />
        </Button>
      ) : (
        <Link href={"/"}>
          <Button
            onClick={prevBtn}
            variant={"outline"}
            className="font-semibold w-fit"
            >
            <ArrowLeft />
          </Button>
        </Link>
      )}

      <SignupSteps
        // setEmail={setEmail}
        // setPass={setPass}
        signup={signup}
        nextBtn={nextBtn}
      />
    </div>
  );
};
