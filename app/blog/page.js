import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { PageHero } from "@/components/Bits";
import { BlogArt } from "@/components/Art";
import { BlogCard, formatDate, CtaBanner } from "@/components/Sections";
import { posts } from "@/lib/data";

export const metadata = {
  title: "Blog",
  description:
    "Practical articles on website design, speed, SEO, e-commerce and getting more customers online.",
  alternates: { canonical: "/blog" },
  robots: { index: false, follow: false },
};

// Blog is hidden for now. Delete the notFound() line below to switch it back on
// (and restore the Blog links in lib/data.js `nav`, components/Footer.js and app/sitemap.js).
export default function BlogPage() {
  notFound();
  const [feature, ...rest] = posts;
  return (
    <>
      <PageHero
        title="Website Tips & Articles"
        intro="Plain-language guides on websites, speed, SEO and selling online."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="section bg-white">
        <div className="container">
          <article className="feature-post card-hard">
            <Link href={`/blog/${feature.slug}`} className="feature-post-link">
              <div className="feature-post-art"><BlogArt index={feature.cover} /></div>
              <div className="feature-post-body">
                <p className="post-meta">
                  <span className="pill">{feature.category}</span>
                  <span>{formatDate(feature.date)}</span>
                  <span>{feature.readTime} min read</span>
                </p>
                <h2>{feature.title}</h2>
                <p>{feature.excerpt}</p>
                <span className="link-arrow">Read article <Icon name="arrow" size={16} /></span>
              </div>
            </Link>
          </article>

          <ul className="post-grid spaced">
            {rest.map((p) => (
              <li key={p.slug}><BlogCard post={p} /></li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
