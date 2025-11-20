import { ReactNode } from "react";

export type CategoryType = {
  _id: string;
  categoryName: string;
  foods: dishType[];
};

export type dishType = {
  _id: string;
  length: ReactNode;
  name: string;
  price: string;
  img: string;
  ingredients: string;
};

export type LoggedUser = {
  email: string;
  image: string;
};
