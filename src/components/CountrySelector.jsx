import { COUNTRY_LIST } from "../themes";
import { useTheme } from "../context/ThemeContext";

export default function CountrySelector() {
  const { country, theme, changeCountry, autoRotate } = useTheme();

  return (
    <section className="country-bar" aria-label="Select country">
      <div className="country-bar-title">
        // Select Country — switch cultural style
        {autoRotate && " · idle auto-rotating every 4s (interact to pause)"}
      </div>

      <div className="country-chips" role="radiogroup" aria-label="Country">
        {COUNTRY_LIST.map((c) => (
          <button
            key={c.id}
            role="radio"
            aria-checked={country === c.id}
            className={`chip ${country === c.id ? "active" : ""}`}
            onClick={() => changeCountry(c.id)}
          >
            <span className="flag">{c.flag}</span>
            {c.label}
          </button>
        ))}
      </div>

      <div className="chip-style">
        Active style: <b>{theme.styleName}</b> — {theme.description}
      </div>
    </section>
  );
}
