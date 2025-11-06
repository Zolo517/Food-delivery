import CompanyLogoSvg from "@/Icons/CompanyLogoSvg";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-3 items-center">
      <CompanyLogoSvg />
      <div>
        <h4 className="text-lg font-semibold">
          Om <span className="text-lg font-semibold">Nom</span>
        </h4>
        <p className="text-[#71717A] text-xs ">Swift delivery</p>
      </div>
    </Link>
  );
};
