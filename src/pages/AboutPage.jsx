import { Avatar, PageSection } from "../components/Section";
import { SKILLS, TIMELINE } from "../data/mock";

export default function AboutPage() {
  return (
    <PageSection index="04 / ABOUT" title="About Me">
      <div className="about-grid">
        <div>
          <div className="member" style={{ marginBottom: 18 }}>
            <Avatar name="Your Name" />
            <div>
              <h3 style={{ fontSize: 18 }}>Your Name</h3>
              <small>Creator · Page Builder</small>
            </div>
          </div>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8 }}>
            This is a placeholder bio block. The YELLOW PAGE generator lets you
            present yourself, your work, or your store with a visual identity
            that shifts to match a chosen country&apos;s culture. No portrait
            photo is used here — only an initials avatar and type.
          </p>

          <div className="tags">
            {SKILLS.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="country-bar-title" style={{ marginBottom: 18 }}>
            // Timeline
          </div>
          {TIMELINE.map((t) => (
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
