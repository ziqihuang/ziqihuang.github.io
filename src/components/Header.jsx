import { useState } from "react";
import { NavLink } from "react-router-dom";
import GlitchText from "./reactbits/GlitchText";
import { useCopy } from "../hooks/useCopy";

export default function Header() {
  const [open, setOpen] = useState(false);
  const copy = useCopy();

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
        {copy.nav.map((item) => (
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
