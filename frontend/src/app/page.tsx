import { AdminPageSideBar } from "@/components/AdminPageSideBar";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex gap-20 justify-center">
        <Link className="font-bold text-xl" href={"/admin"}>
          admin
        </Link>
        <Link className="font-bold text-xl" href={"/login"}>
          login
        </Link>
        <Link className="font-bold text-xl" href={"/signup"}>
          signup
        </Link>
      </div>
    </div>
  );
}
