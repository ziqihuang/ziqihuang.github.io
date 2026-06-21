import { Link } from "react-router-dom";
import AutoDecrypt from "../components/AutoDecrypt";
import CountrySelector from "../components/CountrySelector";
import DecryptedText from "../components/reactbits/DecryptedText";
import StarBorder from "../components/reactbits/StarBorder";
import TiltedCard from "../components/reactbits/TiltedCard";
import Aurora from "../components/reactbits/Aurora";
import { useTheme } from "../context/ThemeContext";
import { useCopy } from "../hooks/useCopy";

export default function HomePage() {
  const { theme } = useTheme();
  const copy = useCopy();
  const primary = theme.tokens["--primary"];
  const accent = theme.tokens["--accent"];
  const accent2 = theme.tokens["--accent-2"];

  return (
    <AutoDecrypt>
    <div className="page">
      <section className="hero" style={{ position: "relative" }}>
        <div className="hero-aurora">
          <Aurora
            key={theme.id}
            colorStops={[primary, accent, accent2]}
            amplitude={1.1}
            blend={0.55}
          />
        </div>

        <div className="hero-tag">{copy.home.tag}</div>
        <h1 className="hero-byp">BYP</h1>
        <div className="hero-sub">
          <DecryptedText
            text={copy.home.subtitle}
            animateOn="view"
            sequential
            revealDirection="center"
            speed={55}
            maxIterations={14}
          />
        </div>
        <p className="hero-desc">{copy.home.desc}</p>
        <div className="hero-cta">
          <StarBorder as={Link} to="/products" color={accent} speed="5s">
            {copy.home.ctaBuild}
          </StarBorder>
          <StarBorder as={Link} to="/content" color={primary} speed="6s">
            {copy.home.ctaShowcase}
          </StarBorder>
        </div>
      </section>

      <CountrySelector />

      <section style={{ marginTop: 56 }}>
        <div className="country-bar-title" style={{ marginBottom: 18 }}>
          {copy.home.explore}
        </div>
        <div className="grid">
          {copy.home.entries.map((e) => (
            <Link key={e.to} to={e.to} style={{ display: "block" }}>
              <TiltedCard
                containerHeight="180px"
                containerWidth="100%"
                imageWidth="100%"
                imageHeight="180px"
                rotateAmplitude={10}
                scaleOnHover={1.05}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <div className="tilt-entry">
                    <span className="card-tag">{copy.home.enter}</span>
                    <div>
                      <h3>{e.label}</h3>
                      <p>{e.desc}</p>
                    </div>
                    <div className="card-meta">
                      <span>{copy.home.open}</span>
                    </div>
                  </div>
                }
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
    </AutoDecrypt>
  );
}
