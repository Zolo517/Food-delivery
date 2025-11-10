import { DishCard } from "@/app/admin/food/_components";
import { CategoryType, dishType } from "@/lib/types";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";

export const ClientCategory = ({ category }: { category: CategoryType }) => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:4000/category",
    fetcher
  );

  return (
    <div className="flex flex-col gap-[54px]">
      <p className="text-3xl font-semibold text-white">
        {category.categoryName}
      </p>
      <div className="flex flex-wrap gap-9">
        {" "}
        {data &&
          data?.map((dish: dishType, i: number) => {
            return <DishCard key={i} dish={dish} />;
          })}
      </div>
    </div>
  );
};
