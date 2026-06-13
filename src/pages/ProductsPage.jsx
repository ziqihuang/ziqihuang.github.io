import { useMemo, useState } from "react";
import { PageSection } from "../components/Section";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import { PRODUCTS, PRODUCT_FILTERS } from "../data/mock";
import { useTheme } from "../context/ThemeContext";

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const { theme } = useTheme();
  const spotlight = `color-mix(in srgb, ${theme.tokens["--accent"]} 35%, transparent)`;

  const items = useMemo(
    () => (filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.tag === filter)),
    [filter]
  );

  const filters = (
    <div className="country-chips" style={{ marginBottom: 24 }}>
      {PRODUCT_FILTERS.map((f) => (
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
    <PageSection index="03 / PRODUCTS" title="Products" action={filters}>
      <div className="grid">
        {items.map((p) => (
          <SpotlightCard key={p.title} className="card" spotlightColor={spotlight}>
            <span className="card-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="card-meta">
              <span className="price">{p.price}</span>
              <button className="btn btn-accent" style={{ padding: "8px 14px" }}>
                Buy
              </button>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </PageSection>
  );
}
