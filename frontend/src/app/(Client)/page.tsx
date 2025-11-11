"use client";

import { AdminPageSideBar } from "@/components/AdminPageSideBar";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { CategoryType, dishType } from "@/lib/types";
import { ClientCategory } from "@/components/ClientCategory";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/category",
    fetcher
  );

  return (
    <div className="w-full h-full bg-black">
      <Navbar />
      <div className="w-full h-142.5 bg-[#D8BFD8] flex gap-20 justify-center">
        <Link className="font-bold text-xl" href={"/admin/food"}>
          admin
        </Link>
        <Link className="font-bold text-xl" href={"/login"}>
          login
        </Link>
        <Link className="font-bold text-xl" href={"/signup"}>
          signup
        </Link>
      </div>
      <div className="w-full h-fit bg-[#404040] p-22 flex flex-col gap-[54px]">
        {data &&
          data.map((category: CategoryType, i: number) => {
            if (category.categoryName === "All dishes") {
              return;
            }
            return <ClientCategory category={category} key={i} />;
          })}
      </div>

      <Footer />
    </div>
  );
}
