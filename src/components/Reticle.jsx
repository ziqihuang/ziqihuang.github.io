import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

// Japan-default cursor reticle. Rendered only when the active theme uses it.
export default function Reticle() {
  const { theme } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    if (theme.cursor !== "reticle") return undefined;
    const el = ref.current;
    if (!el) return undefined;

    const move = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";
    };
    const enlarge = (e) => {
      const interactive = e.target.closest("a, button, input, textarea, .chip, .card");
      el.style.width = interactive ? "44px" : "26px";
      el.style.height = interactive ? "44px" : "26px";
    };
    const leave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", enlarge);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enlarge);
      document.removeEventListener("mouseleave", leave);
    };
  }, [theme.cursor]);

  if (theme.cursor !== "reticle") return null;
  return <div className="reticle" ref={ref} style={{ opacity: 0 }} />;
}
