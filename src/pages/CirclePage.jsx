import { Avatar, PageSection } from "../components/Section";
import { useCopy } from "../hooks/useCopy";

export default function CirclePage() {
  const copy = useCopy();

  return (
    <PageSection index={copy.circle.index} title={copy.circle.title}>
      <div className="grid">
        {copy.circle.members.map((m) => (
          <article key={m.name} className="card">
            <div className="member">
              <Avatar name={m.name} />
              <div>
                <h3 style={{ fontSize: 16 }}>{m.name}</h3>
                <small>{m.role}</small>
              </div>
            </div>
            <p style={{ marginTop: 14 }}>{copy.circle.memberDesc}</p>
            <div className="card-meta">
              <span>{copy.circle.posts(m.posts)}</span>
              <span>{copy.circle.follow}</span>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
