import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};
