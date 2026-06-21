import { useState } from "react";
import { PageSection } from "../components/Section";
import { useCopy } from "../hooks/useCopy";

const SOCIALS = ["IG", "X", "IN", "GH"];

export default function ContactPage() {
  const copy = useCopy();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageSection index={copy.contact.index} title={copy.contact.title}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">{copy.contact.name}</label>
          <input id="name" name="name" type="text" placeholder={copy.contact.namePh} required />
        </div>
        <div className="field">
          <label htmlFor="email">{copy.contact.email}</label>
          <input id="email" name="email" type="email" placeholder={copy.contact.emailPh} required />
        </div>
        <div className="field">
          <label htmlFor="message">{copy.contact.message}</label>
          <textarea id="message" name="message" rows={5} placeholder={copy.contact.messagePh} required />
        </div>

        <button className="btn btn-accent" type="submit">
          {sent ? copy.contact.sent : copy.contact.send}
        </button>

        <div>
          <div className="country-bar-title" style={{ margin: "10px 0 8px" }}>
            {copy.contact.connect}
          </div>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s} href="#" className="social-link" aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </form>
    </PageSection>
  );
}
