import CompanyLogoSvg from "@/Icons/CompanyLogoSvg";

export const Logo = () => {
  return (
    <div className="flex gap-3">
      <CompanyLogoSvg />
      <div>
        <h4>
          Om <span>Nom</span>
        </h4>
        <p>Swift delivery</p>
      </div>
    </div>
  );
};
