import { ReactNode } from "react";

export type CategoryType = {
  categoryName: string;
  foods: dishType[];
};

export type dishType = {
  length: ReactNode;
  name: string;
  price: number;
  image: string;
  ingredients: string;
};

export type LoggedUser = {
  email:string
  image:string
}