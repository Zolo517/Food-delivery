import { AdminPageSideBar } from "@/components/AdminPageSideBar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <AdminPageSideBar />
      <div className="p-6 items-end flex flex-col gap-6 w-full h-full bg-[#f4f4f5] ">
        <div className="sticky top-6 bg-[#f4f4f5] ">
          <Avatar className="">
            <AvatarImage
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL1zL2R1W0aBbP-WvL6Tiv6KH660Weoh_ug&s"
              }
              alt="huurhun jennie"
            />
          </Avatar>
        </div>
        {children}
      </div>
    </div>
  );
}
