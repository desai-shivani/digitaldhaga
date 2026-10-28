import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { PageHero, FaqSection } from "@/components/Bits";
import { faqsContact, regions } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Tell Digital Dhaga about your website, online store or app. Consultation and a fixed quote within one working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us for Your Website Project"
        intro="Share a few details and we will reply within one working day with ideas, a timeline and a fixed quote."
        crumbs={[{ label: "Contact" }]}
        actions={false}
        cards={[
          { icon: "call", t: "Call us", d: site.phone },
          { icon: "mail", t: "Email", d: "Reply in one working day" },
          { icon: "pin", t: "Valsad, Gujarat", d: "Serving clients worldwide" },
        ]}
      />

      <section className="section bg-white">
        <div className="container contact-grid">
          <div className="form-card card-hard">
            <h2>Send us a message</h2>
            <ContactForm />
          </div>

          <aside className="contact-info">
            <ul className="info-list">
              <li>
                <span className="icon-chip"><Icon name="mail" size={22} /></span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <span className="icon-chip"><Icon name="call" size={22} /></span>
                <div>
                  <h3>Phone and WhatsApp</h3>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                </div>
              </li>
              <li>
                <span className="icon-chip"><Icon name="pin" size={22} /></span>
                <div>
                  <h3>Location</h3>
                  <p>{site.address}</p>
                </div>
              </li>
              <li>
                <span className="icon-chip"><Icon name="clock" size={22} /></span>
                <div>
                  <h3>Working hours</h3>
                  <p>{site.hours}</p>
                </div>
              </li>
            </ul>

            <div className="info-card">
              <h3>What happens next</h3>
              <ol className="next-steps">
                <li>We read your message and prepare questions.</li>
                <li>We reply within one working day to book a short call.</li>
                <li>You receive a written proposal with a fixed price and timeline.</li>
              </ol>
            </div>

            <div className="info-card">
              <h3>We work with clients in</h3>
              <ul className="tags">
                {regions.map((r) => (<li key={r.name}>{r.name}</li>))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FaqSection title="Contact Digital Dhaga: Frequently Asked Questions" items={faqsContact} tone="cream" />
    </>
  );
}
