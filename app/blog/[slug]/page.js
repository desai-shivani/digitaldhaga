import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { BlogArt } from "@/components/Art";
import { BlogCard, formatDate, CtaBanner } from "@/components/Sections";
import { posts } from "@/lib/data";
import { site } from "@/lib/site";

// Blog is hidden for now: no article pages are generated. To switch the blog back on,
// return posts.map((p) => ({ slug: p.slug })) here and remove notFound() from PostPage.
export function generateStaticParams() {
  return [];
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, publishedTime: p.date },
  };
}

export default function PostPage({ params }) {
  notFound();
  const post = posts.find((x) => x.slug === params.slug);
  if (!post) notFound();
  const related = posts.filter((x) => x.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <article>
        <header className="post-head">
          <div className="container narrow">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span><Icon name="chevron" size={14} className="crumb-sep" /><Link href="/blog">Blog</Link></span>
            </nav>
            <p className="post-meta">
              <span className="pill">{post.category}</span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime} min read</span>
            </p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
          </div>
        </header>

        <div className="post-band">
        <div className="container narrow">
          <div className="post-cover card-hard"><BlogArt index={post.cover} /></div>

          <div className="prose">
            {post.body.map((b, i) => {
              if (b.h) return <h2 key={i}>{b.h}</h2>;
              if (b.ul) return <ul key={i}>{b.ul.map((li) => (<li key={li}>{li}</li>))}</ul>;
              return <p key={i}>{b.p}</p>;
            })}
          </div>

          <aside className="post-note">
            <h3>Want help with your own website?</h3>
            <p>Tell us what you are working on and we will share honest advice, with no obligation.</p>
            <Link href="/contact" className="btn btn-dark">Talk to our team</Link>
          </aside>
        </div>
        </div>
      </article>

      <section className="section">
        <div className="container">
          <h2 className="related-title">Keep reading</h2>
          <ul className="post-grid two">
            {related.map((p) => (<li key={p.slug}><BlogCard post={p} /></li>))}
          </ul>
        </div>
      </section>

      <CtaBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
