import { XSvg } from "@/Icons/XSvg";

export const ButtonX = ({ color }: { color: string }) => {
  return (
    <div
      className="rounded-full w-9 h-9 border flex items-center justify-center "
      style={{ borderColor: color }}
    >
      <XSvg color={color } />
    </div>
  );
};
