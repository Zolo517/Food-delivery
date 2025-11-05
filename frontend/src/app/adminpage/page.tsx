import { AdminPageSideBar } from "@/components/AdminPageSideBar";
import { FoodMenuSection } from "./feature/FoodMenuSection";

export default function AdminPage() {
  return (
    <div className="flex ">
      <AdminPageSideBar />
      <FoodMenuSection/>
    </div>
  );
}
