import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { COUNTRY_LIST, DEFAULT_COUNTRY, getTheme } from "../themes";

const ThemeContext = createContext(null);

const STORAGE_KEY = "yellowpage.country";
const ROTATE_MS = 5000;

export function ThemeProvider({ children }) {
  const [country, setCountry] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_COUNTRY;
    return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_COUNTRY;
  });

  // Auto-rotate countries while the user hasn't manually picked one.
  const [autoRotate, setAutoRotate] = useState(true);

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

  // Switch to the next country every 5s until the user picks one.
  useEffect(() => {
    if (!autoRotate) return undefined;
    const ids = COUNTRY_LIST.map((c) => c.id);
    const timer = setInterval(() => {
      setCountry((prev) => {
        const idx = ids.indexOf(prev);
        return ids[(idx + 1) % ids.length];
      });
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [autoRotate]);

  // A manual pick from the selector stops auto-rotation.
  const changeCountry = useCallback((id) => {
    setAutoRotate(false);
    setCountry(id);
  }, []);

  const value = useMemo(
    () => ({ country, theme, changeCountry, autoRotate, setAutoRotate }),
    [country, theme, changeCountry, autoRotate]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
