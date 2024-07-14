import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//This function allows you to merge tailwind classes you can read more in the npm docs
// Also check the usage here
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
