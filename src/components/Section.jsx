import AutoDecrypt from "./AutoDecrypt";

export function PageSection({ index, title, action, children }) {
  return (
    <AutoDecrypt>
      <div className="page">
        <div className="section-head">
          <h2 className="section-title">{title}</h2>
          {index && <span className="section-index">{index}</span>}
        </div>
        {action}
        {children}
      </div>
    </AutoDecrypt>
  );
}

export function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return <div className="avatar">{initials}</div>;
}
