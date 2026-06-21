import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useCopy } from "../hooks/useCopy";

export default function LoadingScreen({ onDone, duration = 1600 }) {
  const { theme } = useTheme();
  const copy = useCopy();
  const [line, setLine] = useState(0);

  useEffect(() => {
    const stepTime = duration / copy.loading.length;
    const stepTimer = setInterval(() => {
      setLine((v) => Math.min(v + 1, copy.loading.length - 1));
    }, stepTime);
    const doneTimer = setTimeout(() => onDone?.(), duration);
    return () => {
      clearInterval(stepTimer);
      clearTimeout(doneTimer);
    };
  }, [duration, onDone, copy.loading.length]);

  return (
    <div className="loader">
      <div className="loader-inner">
        <div className="loader-logo">BYP</div>
        <div className="loader-line">{copy.loading[line]}</div>
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
