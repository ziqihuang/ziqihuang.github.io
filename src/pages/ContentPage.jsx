import { PageSection } from "../components/Section";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import { useTheme } from "../context/ThemeContext";
import { useCopy } from "../hooks/useCopy";

export default function ContentPage() {
  const { theme } = useTheme();
  const copy = useCopy();
  const spotlight = `color-mix(in srgb, ${theme.tokens["--primary"]} 35%, transparent)`;

  return (
    <PageSection index={copy.content.index} title={copy.content.title}>
      <div className="grid">
        {copy.content.items.map((item) => (
          <SpotlightCard key={item.title} className="card" spotlightColor={spotlight}>
            <span className="card-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{copy.content.placeholder}</p>
            <div className="card-meta">
              <span>{item.meta}</span>
              <span>{copy.content.view}</span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </PageSection>
  );
}
