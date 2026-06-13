import { PageSection } from "../components/Section";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import { CONTENT_ITEMS } from "../data/mock";
import { useTheme } from "../context/ThemeContext";

export default function ContentPage() {
  const { theme } = useTheme();
  const spotlight = `color-mix(in srgb, ${theme.tokens["--primary"]} 35%, transparent)`;

  return (
    <PageSection index="01 / CONTENT" title="Content">
      <div className="grid">
        {CONTENT_ITEMS.map((item) => (
          <SpotlightCard key={item.title} className="card" spotlightColor={spotlight}>
            <span className="card-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>
              Placeholder showcase block — typography and geometry only, no
              imagery in this prototype.
            </p>
            <div className="card-meta">
              <span>{item.meta}</span>
              <span>→ View</span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </PageSection>
  );
}
