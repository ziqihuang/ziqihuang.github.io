import { useState } from "react";
import { PageSection } from "../components/Section";

const SOCIALS = ["IG", "X", "IN", "GH"];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageSection index="05 / CONTACT" title="Contact Me">
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Tell me about your page…" required />
        </div>

        <button className="btn btn-accent" type="submit">
          {sent ? "Message Sent ✓" : "Send Message"}
        </button>

        <div>
          <div className="country-bar-title" style={{ margin: "10px 0 8px" }}>
            // Connect
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
