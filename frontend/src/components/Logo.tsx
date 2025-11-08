import CompanyLogoSvg from "@/Icons/CompanyLogoSvg";
import Link from "next/link";

type LogoProps = {
  om: string;
  nom: string;
  swift: string;
};

export const Logo = ({ om, nom, swift }: LogoProps) => {
  return (
    <Link href={"/"} className="flex gap-3 items-center">
      <CompanyLogoSvg />
      <div>
        <h4 className="text-lg font-semibold" style={{ color: om }}>
          Om
          <span className="text-lg font-semibold" style={{ color: nom }}>
            Nom
          </span>
        </h4>
        <p className=" text-xs " style={{ color: swift }}>
          Swift delivery
        </p>
      </div>
    </Link>
  );
};
