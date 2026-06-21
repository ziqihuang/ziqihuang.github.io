import { Avatar, PageSection } from "../components/Section";
import { useCopy } from "../hooks/useCopy";

export default function AboutPage() {
  const copy = useCopy();

  return (
    <PageSection index={copy.about.index} title={copy.about.title}>
      <div className="about-grid">
        <div>
          <div className="member" style={{ marginBottom: 18 }}>
            <Avatar name={copy.about.name} />
            <div>
              <h3 style={{ fontSize: 18 }}>{copy.about.name}</h3>
              <small>{copy.about.role}</small>
            </div>
          </div>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8 }}>{copy.about.bio}</p>

          <div className="tags">
            {copy.about.skills.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="country-bar-title" style={{ marginBottom: 18 }}>
            {copy.about.timeline}
          </div>
          {copy.about.timelineItems.map((t) => (
            <div key={t.year} className="timeline-item">
              <span>{t.year}</span>
              <h4>{t.title}</h4>
              <p style={{ color: "var(--text-dim)", margin: "4px 0 0", fontSize: 13 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
