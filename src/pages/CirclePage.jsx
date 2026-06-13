import { Avatar, PageSection } from "../components/Section";
import { CIRCLE_MEMBERS } from "../data/mock";

export default function CirclePage() {
  return (
    <PageSection index="02 / CIRCLE" title="Circle">
      <div className="grid">
        {CIRCLE_MEMBERS.map((m) => (
          <article key={m.name} className="card">
            <div className="member">
              <Avatar name={m.name} />
              <div>
                <h3 style={{ fontSize: 16 }}>{m.name}</h3>
                <small>{m.role}</small>
              </div>
            </div>
            <p style={{ marginTop: 14 }}>
              Community member — initials avatar only, no profile photo.
            </p>
            <div className="card-meta">
              <span>{m.posts} posts</span>
              <span>→ Follow</span>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
