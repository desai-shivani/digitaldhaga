# Digital Dhaga: company website

A complete, mobile-responsive company website built with **Next.js 14 (App Router)**. No Tailwind, no UI kit, no image downloads: all styling is plain CSS and all artwork is inline SVG that uses your brand colours.

| Role | Colour |
| --- | --- |
| Brand orange | `#ff6b2b` |
| Ink (text, dark sections) | `#222222` |
| Cream (page background) | `#faf2e3` |

Fonts (self-hosted via npm, no Google request at runtime): **Bricolage Grotesque** for headings, **Instrument Sans** for text.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

Requires Node.js 18.18 or newer.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, industries strip, why choose us (+ stats), services, process, products, technology, portfolio, reviews, global presence, blog preview, call to action |
| `/about` | Story, mission and vision, values, process, global presence, reviews, FAQ |
| `/services` | All services, process, technology, FAQ |
| `/services/[slug]` | One page per service (8 included) with features, deliverables, FAQ, related services |
| `/our-work` | Filterable portfolio and reviews |
| `/blog`, `/blog/[slug]` | Hidden for now (return 404). See comments in `app/blog/` to switch back on |
| `/contact` | Enquiry form, contact details, FAQ |

The header has a **Services dropdown** (desktop mega menu, accordion on mobile). `sitemap.xml`, `robots.txt`, page metadata, Open Graph tags and JSON-LD are generated automatically.

## Edit your content

Almost everything lives in two files:

- `lib/site.js`: company name, email, phone, hours, social links, site URL.
- `lib/data.js`: navigation, services, products, technology list, projects, reviews, regions, FAQs and blog posts.

### Before you go live

1. **Contact details.** Set in `lib/site.js` (email, phone, WhatsApp, address: Valsad, Gujarat, India).
2. **Sample content.** The reviews, portfolio projects, products, statistics and regions in `lib/data.js` are **placeholders** so you can see the design. Replace them with real clients and real numbers, then set `sampleContent: false` in `lib/site.js` to remove the small "Sample content" tags. Do not publish invented testimonials as real ones.
3. **Site URL.** Set `url` in `lib/site.js` (used for the sitemap and social previews).

## Images

All illustrations are SVG components in `components/Art.js` (services, products, projects, technology stack, blog covers, About page). To use photos instead, put them in `public/images/` and swap the relevant `<ServiceArt />`, `<ProjectArt />` etc. for `<Image />` from `next/image`.

## Contact form

The form posts to `app/api/contact/route.js`, which validates the message and writes it to the server log. To receive it by email, add a provider (Resend, SendGrid or SMTP with nodemailer) inside that file and keep keys in `.env.local`.

## Deploy

- **Vercel**: import the repository and deploy. No settings needed.
- **Your own server**: `npm run build`, then run `npm start` behind Nginx (use `pm2` to keep it running).

## Structure

```
app/            pages, layout, global CSS, API route, sitemap, robots
components/     Header, Footer, Hero, Sections, Art (SVG illustrations), forms
lib/            site settings, content data, generated world-map dots
scripts/        generate-world-dots.mjs (rebuilds the dotted map)
```
