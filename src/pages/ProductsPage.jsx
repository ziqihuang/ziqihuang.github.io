import { useEffect, useMemo, useState } from "react";
import { PageSection } from "../components/Section";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import { useTheme } from "../context/ThemeContext";
import { useCopy } from "../hooks/useCopy";

export default function ProductsPage() {
  const copy = useCopy();
  const [filter, setFilter] = useState(() => copy.products.filters[0]);
  const { theme } = useTheme();
  const spotlight = `color-mix(in srgb, ${theme.tokens["--accent"]} 35%, transparent)`;

  useEffect(() => {
    setFilter(copy.products.filters[0]);
  }, [copy]);

  const items = useMemo(() => {
    const allLabel = copy.products.filters[0];
    if (filter === allLabel) return copy.products.items;
    const idx = copy.products.filters.indexOf(filter);
    const key = copy.products.filterKeys[idx];
    const tagsByKey = {
      Service: ["Service", "服务"],
      Product: ["Product", "产品"],
    };
    const tags = tagsByKey[key] || [key, filter];
    return copy.products.items.filter((p) => tags.includes(p.tag));
  }, [filter, copy]);

  const filters = (
    <div className="country-chips" style={{ marginBottom: 24 }}>
      {copy.products.filters.map((f) => (
        <button
          key={f}
          className={`chip ${filter === f ? "active" : ""}`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );

  return (
    <PageSection index={copy.products.index} title={copy.products.title} action={filters}>
      <div className="grid">
        {items.map((p) => (
          <SpotlightCard key={p.title} className="card" spotlightColor={spotlight}>
            <span className="card-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="card-meta">
              <span className="price">{p.price}</span>
              <button className="btn btn-accent" style={{ padding: "8px 14px" }}>
                {copy.products.buy}
              </button>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </PageSection>
  );
}
