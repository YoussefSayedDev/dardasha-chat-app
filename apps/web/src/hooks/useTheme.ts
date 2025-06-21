import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => {
  if (!ThemeContext) {
    throw new Error("ThemeContext not found");
  }

  return useContext(ThemeContext);
};
