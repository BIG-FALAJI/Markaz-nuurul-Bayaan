import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn = class name helper
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
