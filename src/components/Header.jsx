import { useState } from "react";
import { NavLink } from "react-router-dom";
import GlitchText from "./reactbits/GlitchText";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/content", label: "Content" },
  { to: "/circle", label: "Circle" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Me" },
  { to: "/contact", label: "Contact Me" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
        <GlitchText className="brand-glitch" enableOnHover speed={2}>
          YELLOW PAGE
        </GlitchText>
        <small>BUILD YOUR PAGE</small>
      </NavLink>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        ≡
      </button>

      <nav className={`nav ${open ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
