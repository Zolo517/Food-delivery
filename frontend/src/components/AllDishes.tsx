import { AllDishesCategory } from "./AllDishesCategory";
import { Category } from "./Category";

const categories = [
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch Favorites",
  "Main dishes",
  "Fish & Sea foods",
  "Brunch",
  "Side dish",
  "Dess1erts",
  "Beverages",
];

export const AllDishes = () => {
  return (
    <div>
      <AllDishesCategory />
      {categories.map((name) => {
        return <Category key={name} name={name} />;
      })}
    </div>
  );
};
