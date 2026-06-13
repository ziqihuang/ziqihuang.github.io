import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_COUNTRY, getTheme } from "../themes";

const ThemeContext = createContext(null);

const STORAGE_KEY = "yellowpage.country";

export function ThemeProvider({ children }) {
  const [country, setCountry] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_COUNTRY;
    return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_COUNTRY;
  });

  const theme = useMemo(() => getTheme(country), [country]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.dataset.country = theme.id;
    root.dataset.motif = theme.tokens["--motif"];
    window.localStorage.setItem(STORAGE_KEY, theme.id);
  }, [theme]);

  const changeCountry = useCallback((id) => setCountry(id), []);

  const value = useMemo(
    () => ({ country, theme, changeCountry }),
    [country, theme, changeCountry]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
