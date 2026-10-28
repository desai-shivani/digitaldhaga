import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow not-found">
        <h1>That page does not exist.</h1>
        <p className="lead">The link may be old or mistyped. Try one of these instead.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn-primary">Go to the homepage</Link>
          <Link href="/services" className="btn btn-ghost">Browse services</Link>
          <Link href="/contact" className="btn btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
