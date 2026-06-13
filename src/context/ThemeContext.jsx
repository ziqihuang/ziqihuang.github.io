import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { COUNTRY_LIST, DEFAULT_COUNTRY, getTheme } from "../themes";

const ThemeContext = createContext(null);

const STORAGE_KEY = "yellowpage.country";
// How long the user must be idle before rotation kicks in, and the gap between switches.
const IDLE_MS = 4000;
const ROTATE_MS = 4000;
const TICK_MS = 500;

export function ThemeProvider({ children }) {
  const [country, setCountry] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_COUNTRY;
    return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_COUNTRY;
  });

  // True while the page is idle and actively rotating (used for UI status).
  const [autoRotate, setAutoRotate] = useState(false);

  const theme = useMemo(() => getTheme(country), [country]);

  const lastActivityRef = useRef(Date.now());
  const lastSwitchRef = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.tokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.dataset.country = theme.id;
    root.dataset.motif = theme.tokens["--motif"];
    window.localStorage.setItem(STORAGE_KEY, theme.id);
  }, [theme]);

  // Mark the user as active on any interaction; this pauses rotation.
  useEffect(() => {
    const markActive = () => {
      lastActivityRef.current = Date.now();
    };
    const events = ["mousemove", "mousedown", "keydown", "wheel", "touchstart", "scroll"];
    events.forEach((evt) => window.addEventListener(evt, markActive, { passive: true }));
    return () => {
      events.forEach((evt) => window.removeEventListener(evt, markActive));
    };
  }, []);

  // While idle, advance to the next country every ROTATE_MS.
  useEffect(() => {
    const ids = COUNTRY_LIST.map((c) => c.id);
    const timer = setInterval(() => {
      const now = Date.now();
      const idle = now - lastActivityRef.current >= IDLE_MS;
      setAutoRotate((prev) => (prev === idle ? prev : idle));
      if (!idle) return;
      if (now - lastSwitchRef.current < ROTATE_MS) return;
      lastSwitchRef.current = now;
      setCountry((prev) => {
        const idx = ids.indexOf(prev);
        return ids[(idx + 1) % ids.length];
      });
    }, TICK_MS);
    return () => clearInterval(timer);
  }, []);

  // A manual pick counts as activity, pausing rotation until idle again.
  const changeCountry = useCallback((id) => {
    lastActivityRef.current = Date.now();
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
