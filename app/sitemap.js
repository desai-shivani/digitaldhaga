import { services } from "@/lib/data";
import { site } from "@/lib/site";

// The blog is hidden for now, so its pages are left out of the sitemap.
export default function sitemap() {
  const now = new Date();
  const pages = ["", "/about", "/services", "/our-work", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
  const svc = services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, priority: 0.7 }));
  return [...pages, ...svc];
}
