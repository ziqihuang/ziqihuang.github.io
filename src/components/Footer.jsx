import { useTheme } from "../context/ThemeContext";
import { useCopy } from "../hooks/useCopy";

export default function Footer() {
  const { theme } = useTheme();
  const copy = useCopy();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>{copy.footer(year, theme.styleName, theme.label)}</div>
    </footer>
  );
}
