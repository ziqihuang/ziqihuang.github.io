import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        YELLOW PAGE © {year} — <b>{theme.styleName}</b> theme active ·{" "}
        {theme.label}
      </div>
    </footer>
  );
}
