import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const BOOT_LINES = [
  "> SYSTEM ONLINE",
  "> LOADING CULTURAL THEME ENGINE",
  "> RENDERING YELLOW PAGE",
];

export default function LoadingScreen({ onDone, duration = 1600 }) {
  const { theme } = useTheme();
  const [line, setLine] = useState(0);

  useEffect(() => {
    const stepTime = duration / BOOT_LINES.length;
    const stepTimer = setInterval(() => {
      setLine((v) => Math.min(v + 1, BOOT_LINES.length - 1));
    }, stepTime);
    const doneTimer = setTimeout(() => onDone?.(), duration);
    return () => {
      clearInterval(stepTimer);
      clearTimeout(doneTimer);
    };
  }, [duration, onDone]);

  return (
    <div className="loader">
      <div className="loader-inner">
        <div className="loader-logo">BYP</div>
        <div className="loader-line">{BOOT_LINES[line]}</div>
        <div className="loader-bar">
          <span />
        </div>
        <div className="chip-style" style={{ marginTop: 16 }}>
          {theme.styleName}
        </div>
      </div>
    </div>
  );
}
