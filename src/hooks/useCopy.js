import { useMemo } from "react";
import { getCopy } from "../data/copy";
import { useTheme } from "../context/ThemeContext";

export function useCopy() {
  const { country } = useTheme();
  return useMemo(() => getCopy(country), [country]);
}
