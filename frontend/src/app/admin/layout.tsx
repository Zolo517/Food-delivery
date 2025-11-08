import { AdminPageSideBar } from "@/components/AdminPageSideBar";
import { Profile } from "@/components/Profile";
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
          <Profile />
        </div>
        {children}
      </div>
    </div>
  );
}
