// ─────────────────────────────────────────────────────────────
//  Content for the whole site.
//  NOTE: reviews, projects, products, figures and regions below are
//  SAMPLE content so the design can be reviewed. Replace them with
//  your real data, then set `sampleContent: false` in lib/site.js.
// ─────────────────────────────────────────────────────────────

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "website-design-development",
    benefits: [
      "More enquiries from a site built to convert",
      "Faster pages that keep visitors from leaving",
      "A strong first impression that builds trust",
    ],
    icon: "layout",
    title: "Website Design & Development",
    short: "Bespoke business websites that load fast, look sharp and turn every visitor into an enquiry for your business.",
    intro:
      "Your website is the first meeting with most customers. We design and build custom sites in Next.js and React that load in under two seconds, read well on every screen and are set up to rank on Google from day one.",
    features: [
      { t: "Custom design", d: "No templates. Every layout is drawn around your brand, audience and goals." },
      { t: "Mobile-first build", d: "Designed for the phone in your customer's hand, then scaled up to desktop." },
      { t: "Speed built in", d: "Optimised images, lean code and edge hosting keep pages quick everywhere." },
      { t: "SEO foundations", d: "Clean markup, metadata, sitemaps and schema so search engines understand you." },
      { t: "Easy to edit", d: "Update text, images and blog posts yourself with a simple editor." },
      { t: "Analytics ready", d: "Traffic and conversion tracking is set up before launch, not after." },
    ],
    deliverables: ["Sitemap and wireframes", "Custom visual design", "Responsive development", "Launch and training"],
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    faqs: [
      { q: "How much does website design and development cost in India?", a: "The cost depends on the number of pages, custom features and integrations. After a short call we send a fixed quote, so you know the price before any work starts." },
      { q: "Will my new website rank on Google?", a: "We build every site to be SEO-ready: clean code, fast loading, a mobile-first layout, proper headings, meta tags and a sitemap. That gives your pages a strong base, and our SEO service can build on it." },
      { q: "Do you build mobile-friendly websites?", a: "Yes. Every website is designed mobile-first and tested on phones, tablets and desktops before launch." },
      { q: "How long does a business website take?", a: "Most projects take four to eight weeks from kick-off to launch, depending on page count and how quickly feedback arrives." },
      { q: "Will I be able to edit the site myself?", a: "Yes. We connect a content editor so you can change text, images and blog posts without touching code." },
    ],
  },
  {
    slug: "ecommerce-development",
    benefits: [
      "Customers can buy in a few taps, on any device",
      "Fewer abandoned carts with a short checkout",
      "Sell in many currencies and countries",
    ],
    icon: "cart",
    title: "E-commerce Development",
    short: "Online stores with smooth checkout, local and global payments and shipping that works from the day you launch.",
    intro:
      "An online store has to do three things well: show products clearly, make paying effortless and keep working when traffic spikes. We build stores on Shopify, WooCommerce or fully custom stacks, chosen to fit how you sell.",
    features: [
      { t: "Product catalogue", d: "Variants, bundles, filters and search that help shoppers find the right item quickly." },
      { t: "Payments worldwide", d: "Cards, wallets, UPI and bank transfers through Stripe, Razorpay, PayPal and more." },
      { t: "Shipping and tax", d: "Rates, zones, GST, VAT and sales tax configured for every market you sell in." },
      { t: "Multi-currency", d: "Show prices in your customer's currency and language." },
      { t: "Order management", d: "Inventory, invoices, returns and customer emails in one dashboard." },
      { t: "Conversion tuning", d: "Abandoned-cart emails, upsells and a checkout trimmed to the fewest steps." },
    ],
    deliverables: ["Store design and build", "Payment and shipping setup", "Product data import", "Staff training"],
    tech: ["Shopify", "WooCommerce", "Next.js", "Stripe"],
    faqs: [
      { q: "How much does an e-commerce website cost?", a: "The price depends on the number of products, payment and shipping integrations and any custom features. We send a fixed quote after understanding your store." },
      { q: "Can you set up online payments and shipping for my store?", a: "Yes. We connect trusted payment gateways and shipping partners, depending on the platform you choose, so customers can pay and receive orders smoothly." },
      { q: "Will my online store be SEO friendly?", a: "Yes. We use clean product URLs, fast-loading pages, proper titles and descriptions and structured data so your products have a better chance of appearing in Google search." },
      { q: "Shopify, WooCommerce or custom?", a: "Shopify suits most stores that want to launch quickly. WooCommerce fits content-heavy shops. Custom builds make sense for unusual pricing or workflows. We recommend after a short discovery call." },
      { q: "Can you move my existing store?", a: "Yes. We migrate products, customers, orders and redirects so you keep your search rankings." },
    ],
  },
  {
    slug: "ui-ux-design",
    benefits: [
      "Visitors find what they need without thinking",
      "Higher conversion from clearer journeys",
      "Less rework, because design is tested first",
    ],
    icon: "pen",
    title: "UI/UX Design",
    short: "Research-led interface design that makes your product easy to understand, a pleasure to use and simple to buy.",
    intro:
      "Good design removes friction. We study how your customers behave, map the journey, then design screens that guide them to the action you want without making them think.",
    features: [
      { t: "User research", d: "Interviews, surveys and analytics review to learn what people actually need." },
      { t: "Journey mapping", d: "A clear picture of every step from first visit to repeat purchase." },
      { t: "Wireframes", d: "Low-fidelity layouts that settle structure before colour and style." },
      { t: "Visual design", d: "Typography, colour and imagery that express your brand." },
      { t: "Design systems", d: "Reusable components so every new page matches the last." },
      { t: "Usability testing", d: "Prototype tests with real users to catch problems early." },
    ],
    deliverables: ["Research summary", "Wireframes and prototype", "High-fidelity screens", "Design system in Figma"],
    tech: ["Figma", "Maze", "Hotjar", "Storybook"],
    faqs: [
      { q: "What is UI/UX design and why does my business need it?", a: "UI is how your website or app looks, and UX is how easy it is to use. Good UI/UX helps visitors find what they need quickly, which means more enquiries, sign-ups and sales." },
      { q: "How long does a UI/UX design project take?", a: "A focused job such as a homepage or checkout redesign is quicker than a full website or app. We confirm the timeline in your quote before starting." },
      { q: "Can you redesign only part of my site?", a: "Yes. Many clients start with the homepage or checkout, where small changes pay back fastest." },
      { q: "Do I get the Figma files?", a: "Yes, all design files are yours at the end of the project." },
    ],
  },
  {
    slug: "seo-digital-marketing",
    benefits: [
      "Steady organic traffic that does not need ad spend",
      "Reach buyers at the moment they search",
      "Clear reports showing leads and rankings",
    ],
    icon: "search",
    title: "SEO & Digital Marketing",
    short: "Search engine optimisation that gets you found on Google and converts steady traffic into enquiries and sales.",
    intro:
      "A great website still needs visitors. We combine technical SEO, useful content and focused campaigns so the right people find you, in every country you want to sell to.",
    features: [
      { t: "Technical SEO", d: "Crawlability, speed, structured data and clean URLs." },
      { t: "Keyword strategy", d: "Targeting the searches your buyers use, by country and language." },
      { t: "Content marketing", d: "Articles and landing pages that answer real questions." },
      { t: "Local and global SEO", d: "Google Business Profile for local reach, hreflang for international sites." },
      { t: "Paid campaigns", d: "Google and Meta ads managed against a clear cost-per-lead target." },
      { t: "Monthly reporting", d: "Plain-language reports on traffic, rankings and leads." },
    ],
    deliverables: ["SEO audit", "Keyword and content plan", "On-page optimisation", "Monthly performance report"],
    tech: ["Search Console", "Google Analytics", "Ahrefs", "Google Ads"],
    faqs: [
      { q: "What does an SEO company do?", a: "An SEO company improves your website so it appears higher on Google for the searches your customers make. This covers technical fixes, keyword research, on-page optimisation, useful content and tracking." },
      { q: "Is SEO better than paid advertising?", a: "They work differently. SEO builds steady organic traffic over time, while paid ads bring quick visits but stop when the budget stops. Many businesses use both, and we can advise on the right mix." },
      { q: "Do you offer local SEO for businesses in Gujarat and across India?", a: "Yes. We optimise your Google Business Profile, local keywords and location pages so nearby customers can find you when they search." },
      { q: "How long until I see SEO results?", a: "Technical fixes can help within weeks. Competitive rankings usually take three to six months of steady work." },
      { q: "Do you guarantee page-one rankings?", a: "No honest agency can. We commit to the work, the reporting and measurable growth in qualified traffic." },
    ],
  },
  {
    slug: "social-media-marketing",
    benefits: [
      "A bigger, engaged audience for your brand",
      "Leads from organic posts and paid campaigns",
      "Consistent content without the daily effort",
    ],
    icon: "users",
    title: "Social Media Marketing",
    short: "Instagram, Facebook and LinkedIn marketing that builds your audience and brings in a steady flow of new leads.",
    intro:
      "Your customers spend hours on social media every day. We plan the content, design the posts, run the paid campaigns and report on what works, so your brand stays visible and your followers turn into customers.",
    features: [
      { t: "Content calendar", d: "A monthly plan of posts, reels and stories matched to your brand and audience." },
      { t: "Post and reel design", d: "Scroll-stopping creatives designed and edited by our in-house team." },
      { t: "Paid social ads", d: "Meta and LinkedIn campaigns managed against a clear cost-per-lead target." },
      { t: "Community management", d: "Replies to comments and messages so no enquiry goes cold." },
      { t: "Influencer outreach", d: "Find and brief creators who fit your brand and budget." },
      { t: "Monthly reporting", d: "Reach, engagement and lead numbers explained in plain language." },
    ],
    deliverables: ["Social media audit", "Monthly content calendar", "Designed posts and reels", "Monthly performance report"],
    tech: ["Meta Business Suite", "LinkedIn Ads", "Canva", "Buffer"],
    faqs: [
      { q: "How can social media marketing help my business?", a: "It builds awareness, keeps you in front of customers and sends people to your website or shop. Consistent, well-designed posts also build trust in your brand." },
      { q: "Will you create the post designs and captions as well?", a: "Yes. We plan the content, design the creatives, write the captions and publish them, so you do not have to manage it yourself." },
      { q: "How often will you post on my social media pages?", a: "We agree a posting calendar with you at the start, based on your goals, industry and budget, and review it as results come in." },
      { q: "Which social platforms do you manage?", a: "Mainly Instagram, Facebook, LinkedIn and YouTube. We recommend the two or three that suit your customers rather than posting everywhere." },
      { q: "Do you also run paid ads?", a: "Yes. We combine organic posting with Meta and LinkedIn ad campaigns, and report cost per lead every month." },
    ],
  },
  {
    slug: "cms-headless-solutions",
    benefits: [
      "Update your site yourself in minutes",
      "Faster pages from a modern content setup",
      "Publish to many channels from one place",
    ],
    icon: "layers",
    title: "CMS & Headless Solutions",
    short: "Content systems your team can manage on its own, from WordPress to fast and modern headless setups for growth.",
    intro:
      "Your marketing team should not wait on a developer to fix a typo. We set up content systems that are simple to use and fast to serve, whether that is WordPress or a headless CMS feeding a Next.js front end.",
    features: [
      { t: "WordPress builds", d: "Custom themes and lean plugins, never a bloated page-builder maze." },
      { t: "Headless CMS", d: "Strapi, Sanity or Contentful powering a fast front end." },
      { t: "Editor-friendly", d: "Reusable content blocks with live preview." },
      { t: "Multi-language", d: "Manage translations and regional versions from one place." },
      { t: "Roles and approvals", d: "Writers draft, editors approve, nothing publishes by accident." },
      { t: "Migration", d: "Move content from an old site without losing rankings." },
    ],
    deliverables: ["CMS selection advice", "Content modelling", "Theme or front-end build", "Editor training"],
    tech: ["WordPress", "Strapi", "Sanity", "Next.js"],
    faqs: [
      { q: "What is a headless CMS?", a: "A headless CMS stores and manages your content separately from the website design, so the same content can be shown on websites, apps and other channels and the site can load faster." },
      { q: "Can I update my website content without a developer?", a: "Yes. We set up an easy content editor so your team can edit pages, images and posts on its own." },
      { q: "WordPress or headless?", a: "WordPress is great for most marketing sites. Headless suits teams that publish across several channels or need top speed at scale." },
      { q: "Is WordPress secure?", a: "Yes, when it is kept updated, uses few plugins and sits behind good hosting. Our care plans handle this for you." },
    ],
  },
];

export const process = [
  { t: "Understand Client Business", d: "We learn your business, customers, competitors and goals before any work begins." },
  { t: "Analyze Opportunities", d: "We study your market, search demand and rivals to find the gaps and quick wins." },
  { t: "Execute Strategy", d: "We build the website, SEO and social media plan step by step, with you involved." },
  { t: "Update Progress Report", d: "Clear monthly reports on traffic, leads and rankings, so you see what your money earns." },
];

export const why = [
  { icon: "bolt", t: "Built for speed", d: "Pages that load fast on phones and slow networks, which Google and customers both reward." },
  { icon: "target", t: "Designed to convert", d: "Every page has one job. We shape layout and copy around it." },
  { icon: "globe", t: "Global from day one", d: "Multi-language, multi-currency and region-aware hosting for customers anywhere." },
  { icon: "shield", t: "Secure and reliable", d: "Encrypted, backed up and monitored, with 99.9% uptime hosting." },
  { icon: "users", t: "One accountable team", d: "Designers, developers and strategists working together, with one point of contact." },
  { icon: "headset", t: "Support after launch", d: "We stay available after go-live with fast replies and clear monthly reports." },
];

export const stats = [
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 6, suffix: "+", label: "Countries served" },
  { value: 96, suffix: "%", label: "Clients who return" },
  { value: 10, suffix: " yrs", label: "Building for the web" },
];

// Client logos for the "Brands We Proudly Work With" strip (files in public/images/clients/).
export const clients = [
  { name: "Giritvaa", logo: "/images/clients/giritvaa-wordmark.png" },
  { name: "Olive & Poppy Toy Library", logo: "/images/clients/olive-and-poppy.png" },
  { name: "Heal With Bhavna", logo: "/images/clients/heal-with-bhavna.png" },
  { name: "Nav", logo: "/images/clients/nav.png" },
];

// "Our Expertise: What We Help You Achieve" cards on the home page (4 cards, 2 per row).
export const expertise = [
  { icon: "search", t: "Rank higher on Google", d: "Technical SEO, keyword strategy and useful content that bring steady organic traffic to your website." },
  { icon: "users", t: "Grow on social media", d: "Content, creatives and paid campaigns on Instagram, Facebook and LinkedIn that build an engaged audience." },
  { icon: "layout", t: "Websites that convert", d: "Fast, mobile-first websites and online stores designed so more visitors become enquiries and customers." },
  { icon: "target", t: "Measurable growth", d: "Tracking, clear monthly reports and honest numbers, so you always know what your marketing earns." },
];

export const industries = [
  { name: "Healthcare", icon: "heart" },
  { name: "Retail & D2C", icon: "bag" },
  { name: "Real Estate", icon: "home" },
  { name: "Education", icon: "cap" },
  { name: "Hospitality", icon: "bed" },
  { name: "Logistics", icon: "truck" },
  { name: "Fintech", icon: "card" },
  { name: "Manufacturing", icon: "factory" },
  { name: "Travel", icon: "plane" },
  { name: "Professional Services", icon: "briefcase" },
  { name: "Non-profit", icon: "hands" },
  { name: "Start-ups", icon: "rocket" },
];

// Numbers for the homepage trust bar. Edit these to your real figures.
export const trustStats = [
  { value: 250, suffix: "+", label: "Projects completed", icon: "layers" },
  { value: 180, suffix: "+", label: "Happy clients", icon: "users" },
  { value: 10, suffix: "+", label: "Years of experience", icon: "award" },
  { value: 6, suffix: "+", label: "Countries served", icon: "globe" },
];

export const products = [
  {
    slug: "storekit",
    variant: "store",
    name: "StoreKit",
    tag: "Online store",
    d: "A ready-to-launch e-commerce store with catalogue, checkout and order dashboard. Live in days, not months.",
    points: ["Multi-currency checkout", "Inventory and orders", "Fully customisable"],
  },
  {
    slug: "bookly",
    variant: "booking",
    name: "Bookly",
    tag: "Booking system",
    d: "Let customers book appointments, classes or tables online, with reminders that cut no-shows.",
    points: ["Calendar sync", "SMS and email reminders", "Online deposits"],
  },
  {
    slug: "leadflow",
    variant: "crm",
    name: "LeadFlow",
    tag: "Mini CRM",
    d: "Capture enquiries from your website, track every lead and never miss a follow-up.",
    points: ["Pipeline board", "WhatsApp and email", "Team assignments"],
  },
  {
    slug: "sitekits",
    variant: "kits",
    name: "SiteKits",
    tag: "Website templates",
    d: "Professionally designed starter sites for clinics, salons, restaurants, schools and more.",
    points: ["Industry-specific", "Mobile responsive", "SEO-ready"],
  },
  {
    slug: "menuqr",
    variant: "menu",
    name: "MenuQR",
    tag: "Digital menu",
    d: "A scannable menu and ordering page for cafés and restaurants, updated in seconds.",
    points: ["QR table codes", "Live item availability", "Order to kitchen"],
  },
  {
    slug: "careplan",
    variant: "care",
    name: "Care Plans",
    tag: "Website care",
    d: "Monthly maintenance, security and updates so your website stays fast and safe.",
    points: ["Daily backups", "Uptime monitoring", "Monthly report"],
  },
];

export const techGroups = [
  {
    id: "frontend",
    label: "Front end",
    items: [
      ["React", "Re"], ["Next.js", "Nx"], ["Angular", "Ng"], ["Vue.js", "Vu"],
      ["TypeScript", "TS"], ["JavaScript", "JS"], ["HTML5", "H5"], ["CSS3", "C3"],
      ["Tailwind CSS", "Tw"], ["SASS", "Ss"],
    ],
  },
  {
    id: "backend",
    label: "Back end",
    items: [
      ["Node.js", "Nd"], ["Express.js", "Ex"], ["Python", "Py"], ["Django", "Dj"],
      ["PHP", "Ph"], ["Laravel", "Lv"], ["Java", "Jv"], ["Spring Boot", "Sb"],
      ["Ruby on Rails", "Rr"], ["GraphQL", "Gq"],
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      ["MongoDB", "Mg"], ["MySQL", "My"], ["PostgreSQL", "Pg"], ["Firebase", "Fb"],
      ["Redis", "Rd"], ["Elasticsearch", "Es"], ["SQL Server", "Sq"], ["DynamoDB", "Dy"],
    ],
  },
  {
    id: "graphic",
    label: "Graphic",
    items: [
      ["Figma", "Fg"], ["Adobe XD", "Xd"], ["Photoshop", "Ps"], ["Illustrator", "Ai"],
      ["Sketch", "Sk"], ["InVision", "Iv"], ["After Effects", "Ae"],
    ],
  },
  {
    id: "cms",
    label: "CMS",
    items: [
      ["WordPress", "Wp"], ["Shopify", "Sh"], ["Drupal", "Dr"], ["Magento", "Mn"],
      ["Strapi", "St"], ["Contentful", "Cf"], ["Sanity", "Sn"],
    ],
  },
];

export const projectCategories = ["All"];

// Live websites we have built. `image` is a screenshot of the live site (public/images/work/sites/), shown on the work cards.
export const projects = [
  {
    slug: "navbykk",
    title: "Nav by KK",
    category: "E-commerce",
    url: "https://navbykk.com",
    domain: "navbykk.com",
    image: "/images/work/sites/navbykk.webp",
    accent: "#9b1c2e",
  },
  {
    slug: "giritvaa",
    title: "Giritvaa",
    category: "Travel",
    url: "https://giritvaa.com",
    domain: "giritvaa.com",
    image: "/images/work/sites/giritvaa.webp",
    accent: "#2f6f4f",
  },
  {
    slug: "terrarium-tales",
    title: "Terrarium Tales",
    category: "E-commerce",
    url: "https://terrariumtales.in",
    domain: "terrariumtales.in",
    image: "/images/work/sites/terrariumtales.webp",
    accent: "#3f8a5a",
  },
];

export const reviews = [
  {
    quote: "They rebuilt our store in six weeks and our checkout completion went up noticeably the first month. Communication was clear throughout.",
    name: "Layla Haddad",
    role: "Founder",
    company: "Aurora Interiors",
    country: "UAE",
  },
  {
    quote: "Rare to find a team that understands both design and engineering. The dashboard they built is now the core of our product.",
    name: "James Whitfield",
    role: "CEO",
    company: "FinPulse",
    country: "United Kingdom",
  },
  {
    quote: "Appointments online used to be a dream for us. Patients now book in under a minute and our front desk finally has breathing room.",
    name: "Dr. Meera Shah",
    role: "Medical Director",
    company: "Healwell Clinics",
    country: "India",
  },
  {
    quote: "Honest estimates, no surprises and a site that actually ranks. We have since moved our marketing support to them as well.",
    name: "Sophie Laurent",
    role: "Marketing Lead",
    company: "Trailhead Travel",
    country: "Australia",
  },
  {
    quote: "From wireframes to launch, they kept us in the loop. Our students and parents find the platform easy to use.",
    name: "Daniel Tan",
    role: "Head of Product",
    company: "EduSpark",
    country: "Singapore",
  },
  {
    quote: "Direct orders are now our biggest channel. The QR ordering setup paid for itself within the first quarter.",
    name: "Arjun Mehta",
    role: "Operations Director",
    company: "Spice Route Kitchen",
    country: "Canada",
  },
];

// lon / lat for the map. "hq" renders larger.
export const regions = [
  { name: "India", flag: "in", note: "Headquarters", lon: 73.2, lat: 22.3, hq: true },
  { name: "United Arab Emirates", flag: "ae", note: "Middle East", lon: 54.4, lat: 24.4 },
  { name: "United Kingdom", flag: "gb", note: "Europe", lon: -1.5, lat: 52.6 },
  { name: "Germany", flag: "de", note: "Europe", lon: 10.4, lat: 51.2 },
  { name: "United States", flag: "us", note: "North America", lon: -96, lat: 39 },
  { name: "Canada", flag: "ca", note: "North America", lon: -79.4, lat: 43.7 },
  { name: "Brazil", flag: "br", note: "South America", lon: -47, lat: -15 },
  { name: "South Africa", flag: "za", note: "Africa", lon: 25, lat: -29 },
  { name: "Singapore", flag: "sg", note: "South-East Asia", lon: 103.8, lat: 1.4 },
  { name: "Australia", flag: "au", note: "Oceania", lon: 150, lat: -33.6 },
];


export const values = [
  { icon: "target", t: "Outcomes over output", d: "A finished website is not the goal. More enquiries, sales or sign-ups is. We measure ourselves on that." },
  { icon: "users", t: "Plain talk", d: "No jargon and no padding. Clear estimates, clear timelines and honest advice, even when it means saying no." },
  { icon: "award", t: "Craft in the details", d: "Spacing, speed, accessibility and edge cases get the same care as the headline feature." },
  { icon: "refresh", t: "Long-term partners", d: "We would rather earn your next project than squeeze this one. Most of our work comes from returning clients." },
];

export const faqsHome = [
  { q: "What does a digital marketing and web design company do?", a: "A digital marketing and web design company builds your website and then helps customers find it. At Digital Dhaga that means web design and development, SEO, social media marketing and ongoing support from one team." },
  { q: "Why choose Digital Dhaga for web design and SEO?", a: "You work with a small team that plans your website around enquiries and sales, builds it properly, and keeps supporting you after launch, with clear communication and a fixed quote up front." },
  { q: "Where is Digital Dhaga located?", a: "We are based in Valsad, Gujarat, India, and work with clients across India and around the world." },
  { q: "How long does SEO and social media marketing take to show results?", a: "Technical SEO fixes can help within weeks, while strong rankings and a growing social audience usually build over a few months. We share clear monthly reports so you can see the progress." },
  { q: "Can you handle my website, SEO and social media together?", a: "Yes. Having one team look after all three keeps your branding, messaging and results consistent, and means you only have one point of contact." },
  { q: "How do I get a quote?", a: "Send us a message or call us. We will reply within one working day, ask a few questions about your business and send a written proposal with a fixed price and timeline." },
];

export const faqsAbout = [
  { q: "Who is Digital Dhaga?", a: "Digital Dhaga is a web design, SEO and social media marketing agency. We design and build websites and run marketing for growing businesses in India and abroad." },
  { q: "Where is Digital Dhaga based?", a: "Our office is in Valsad, Gujarat, India. We work remotely with clients in different cities and countries and schedule calls around your time zone." },
  { q: "What services does Digital Dhaga offer?", a: "We offer website design and development, e-commerce development, UI/UX design, SEO and digital marketing, social media marketing, and CMS and headless solutions." },
  { q: "Why work with a small, senior team?", a: "The person who plans your project is the person who answers your questions. That means faster replies, fewer misunderstandings and work that gets the same care from start to finish." },
  { q: "Do you work with clients outside India?", a: "Yes. We work with clients across several countries, hold calls in your time zone and agree pricing clearly before we start." },
  { q: "How do I start a project with Digital Dhaga?", a: "Contact us with a few details about your business and goals. We will reply within one working day to arrange a short call and prepare a fixed quote." },
];

export const faqsServices = [
  { q: "What services does Digital Dhaga offer?", a: "We offer website design and development, e-commerce development, UI/UX design, SEO and digital marketing, social media marketing, and CMS and headless solutions." },
  { q: "Can I hire you for just one service?", a: "Yes. You can start with a single service such as a new website or SEO, and add others later as your business grows." },
  { q: "How much do web design, SEO and social media marketing services cost?", a: "Pricing depends on the scope of work. After a short call we send a fixed quote for web projects and a clear monthly plan for SEO and social media, so there are no surprises." },
  { q: "Which service should I start with?", a: "If you do not have a website, start there. If you already have one, SEO helps customers find it and social media marketing helps you build an audience. We will recommend a starting point after learning about your business." },
  { q: "Do you provide support after the project is finished?", a: "Yes. Every project includes a period of fixes after launch, and optional monthly plans cover updates, security and improvements." },
  { q: "Do you provide services to businesses outside India?", a: "Yes. We work with clients in many countries and schedule meetings around your time zone." },
];

export const faqsWork = [
  { q: "What kind of work can I see in the Digital Dhaga portfolio?", a: "Our portfolio includes websites, social media post designs, and logos and brand identities created for our clients." },
  { q: "Can I see websites Digital Dhaga has built?", a: "Yes. The Websites tab above links to live sites such as navbykk.com, giritvaa.com and terrariumtales.in, so you can browse them yourself." },
  { q: "Do you design social media posts and logos as well as websites?", a: "Yes. Many clients ask us to design their social media creatives and logo along with their website, so everything looks consistent." },
  { q: "Can you create something similar for my business?", a: "Yes. Every project is designed around your brand, audience and goals. Contact us with your idea and we will suggest the best approach." },
  { q: "Do you work with small and new businesses?", a: "Yes. We work with start-ups and small businesses as well as established brands, and we scope each project to fit your needs." },
];

export const faqsContact = [
  { q: "How can I contact Digital Dhaga for a website project?", a: "You can use the contact form on this page, email digitaldhaga1@gmail.com or call +91 9723701925. We reply within one working day." },
  { q: "How quickly will you reply to my enquiry?", a: "We aim to reply within one working day with ideas, questions about your project and next steps." },
  { q: "Can I get a fixed quote for my website?", a: "Yes. After a short conversation about your needs we send a written proposal with a fixed price and timeline." },
  { q: "Can I contact you on WhatsApp?", a: "Yes. Use the WhatsApp button on this page to message us on +91 9723701925 during working hours." },
  { q: "Where is Digital Dhaga located?", a: "We are based in Valsad, Gujarat, India, and work with clients across India and in other countries." },
  { q: "What should I include in my project enquiry?", a: "Tell us about your business, what you want to build or improve, any websites you like and your rough timeline. The more detail you share, the more accurate our quote will be." },
];

export const faqsGeneral = [
  { q: "How much does a website cost?", a: "It depends on the number of pages, custom features and integrations. After a short call we send a fixed quote, so you know the price before we start." },
  { q: "Do you work with clients outside India?", a: "Yes. Our clients are spread across five continents. We schedule calls around your time zone and invoice in major currencies." },
  { q: "Who owns the website after it is built?", a: "You do. Code, designs, domain and hosting accounts are all transferred to you." },
  { q: "Do you provide support after launch?", a: "Yes. Every project includes 30 days of fixes, and optional monthly care plans cover updates, security and improvements." },
];

export const posts = [
  {
    slug: "nextjs-vs-wordpress-for-business-websites",
    title: "Next.js vs WordPress: which is right for your business website?",
    excerpt: "Both can power a great site. The right choice depends on who edits it, how fast it must be and how far it needs to scale.",
    category: "Development",
    date: "2026-10-12",
    readTime: 6,
    cover: 0,
    body: [
      { h: "The short answer" },
      { p: "If your team publishes content daily and wants a familiar editor, WordPress is a solid choice. If speed, custom features and long-term scale matter most, Next.js usually wins. Many of our clients end up with both: WordPress as the editor, Next.js as the front end." },
      { h: "Where WordPress shines" },
      { ul: ["A huge plugin library for forms, bookings and memberships", "Editors who already know the dashboard", "Lower upfront cost for simple brochure sites"] },
      { p: "The trade-off is maintenance. Every plugin is something to update and secure, and too many of them slow the site down." },
      { h: "Where Next.js shines" },
      { ul: ["Pages served from the edge, so they load fast worldwide", "Full control over design and behaviour", "Easy to connect to payment, CRM and mobile apps"] },
      { p: "Next.js needs a developer for changes unless you add a CMS. That is a small cost for the speed and flexibility you get back." },
      { h: "How to decide" },
      { p: "Ask three questions. Who will edit the site? How important is a sub-two-second load time? Will the site grow into an app? If you answered 'non-technical staff, very, and yes', pair Next.js with a headless CMS." },
    ],
  },
  {
    slug: "website-mistakes-that-kill-conversions",
    title: "Seven website mistakes that quietly kill your conversions",
    excerpt: "Most visitors leave without a word. These are the common reasons they do, and how to fix each one.",
    category: "Conversion",
    date: "2026-10-03",
    readTime: 5,
    cover: 1,
    body: [
      { p: "Traffic is expensive. Losing it to avoidable mistakes is more expensive. Here are the issues we find most often when auditing business websites." },
      { h: "1. A vague headline" },
      { p: "Visitors decide in seconds. Your first line should say what you do and who it is for, in plain words." },
      { h: "2. Slow mobile pages" },
      { p: "Large images and heavy scripts make phones crawl. Compress images, drop unused scripts and test on a mid-range device, not just your laptop." },
      { h: "3. Too many choices" },
      { p: "Five buttons compete with each other. Give each page one main action and make it obvious." },
      { h: "4. No proof" },
      { p: "Real reviews, case studies and client names reduce doubt. Put them near the action, not buried on a separate page." },
      { h: "5. Long, confusing forms" },
      { p: "Every extra field loses people. Ask for the minimum you need to start a conversation." },
      { h: "6. Hidden contact details" },
      { p: "Put your phone number, email or WhatsApp link where people expect to find them: the header and footer." },
      { h: "7. Not measuring anything" },
      { p: "Without analytics and goal tracking you are guessing. Set up conversion events before changing anything else." },
    ],
  },
  {
    slug: "core-web-vitals-speed-checklist",
    title: "Core Web Vitals: a practical speed checklist",
    excerpt: "Google measures loading, responsiveness and visual stability. Here is what each metric means and the fixes that move the needle.",
    category: "Performance",
    date: "2026-09-24",
    readTime: 7,
    cover: 2,
    body: [
      { p: "Core Web Vitals are Google's measures of real-world page experience. They are a ranking signal, and more importantly they track how pleasant your site feels to use." },
      { h: "The three metrics" },
      { ul: ["Largest Contentful Paint (LCP): how quickly the main content appears. Aim for 2.5 seconds or less.", "Interaction to Next Paint (INP): how fast the page responds to taps and clicks. Aim for 200 milliseconds or less.", "Cumulative Layout Shift (CLS): how much the layout jumps around. Aim for 0.1 or less."] },
      { h: "Fixes for LCP" },
      { ul: ["Serve images in modern formats such as WebP or AVIF", "Size images correctly instead of shrinking huge files in the browser", "Use a CDN and cache static pages"] },
      { h: "Fixes for INP" },
      { ul: ["Remove or delay third-party scripts such as chat widgets", "Break up long JavaScript tasks", "Avoid heavy work on every keystroke"] },
      { h: "Fixes for CLS" },
      { ul: ["Set width and height on images and embeds", "Reserve space for ads and banners", "Load fonts without causing text to jump"] },
      { p: "Test with PageSpeed Insights and the Core Web Vitals report in Search Console, which shows field data from real visitors." },
    ],
  },
  {
    slug: "what-affects-the-cost-of-a-website",
    title: "What actually affects the cost of a business website?",
    excerpt: "Two sites with the same number of pages can cost very different amounts. Here is what drives the price.",
    category: "Planning",
    date: "2026-09-14",
    readTime: 5,
    cover: 3,
    body: [
      { p: "Asking 'how much for a website?' is like asking how much for a building. The answer depends on what goes inside. These are the factors that move the quote the most." },
      { h: "Design depth" },
      { p: "A site built on a polished template costs less than one with custom layouts, illustrations and animation. Neither is wrong. Match the investment to how much your brand depends on first impressions." },
      { h: "Features and integrations" },
      { p: "A brochure site is simple. Add online payments, user accounts, booking, a CRM link or multi-language support and the work grows with each one." },
      { h: "Content" },
      { p: "Who writes the copy and prepares the photos? Professional copywriting and photography improve results and add to the budget." },
      { h: "Ongoing costs" },
      { ul: ["Domain and hosting", "Security, backups and updates", "Third-party tools and licences", "Marketing and content after launch"] },
      { h: "A sensible way to start" },
      { p: "Launch a focused first version, then expand based on what visitors actually do. It keeps risk low and results visible early." },
    ],
  },
  {
    slug: "selling-online-globally",
    title: "Selling online globally: payments, tax and shipping",
    excerpt: "Opening your store to the world is mostly a logistics problem. Here is how to prepare for it.",
    category: "E-commerce",
    date: "2026-08-30",
    readTime: 6,
    cover: 4,
    body: [
      { p: "A fast store is only part of selling abroad. Customers expect to pay in their currency, see the full price up front and receive their order without surprise fees." },
      { h: "Payments" },
      { p: "Offer the methods people use locally. Cards work almost everywhere, but wallets, bank transfers and local methods lift conversion in many regions. Use a provider that supports multi-currency settlement." },
      { h: "Tax and duties" },
      { p: "Rules differ by country and change often. Decide whether prices include tax and whether you collect duties at checkout. Check requirements for each market or use a tax service." },
      { h: "Shipping" },
      { ul: ["Show delivery times and costs before checkout", "Offer tracked shipping for higher-value orders", "Make the returns policy easy to find"] },
      { h: "Language and trust" },
      { p: "Translate the pages that matter most: product pages, checkout and policies. Display local contact details and reviews where possible." },
    ],
  },
  {
    slug: "ux-design-decisions-that-build-trust",
    title: "UX decisions that make visitors trust your website",
    excerpt: "Trust is built from small signals. These design choices make a site feel credible within seconds.",
    category: "Design",
    date: "2026-08-18",
    readTime: 4,
    cover: 5,
    body: [
      { p: "People judge a website in a fraction of a second, long before they read a word. Most of that judgement comes from design." },
      { h: "Consistency" },
      { p: "Matching colours, spacing and type styles across every page signals care. Inconsistency signals carelessness." },
      { h: "Clear hierarchy" },
      { p: "Make the most important thing the biggest thing. Visitors should know where to look first on every page." },
      { h: "Readable text" },
      { ul: ["Body text of at least 16 pixels", "Strong contrast between text and background", "Short paragraphs and descriptive subheadings"] },
      { h: "Real people and real details" },
      { p: "Genuine photos, named team members and a physical or registered address build more confidence than stock images ever will." },
      { h: "Accessibility" },
      { p: "Keyboard support, alt text and sensible colour contrast widen your audience and show respect for every visitor." },
    ],
  },
];

export const blogCategories = ["All", "Development", "Conversion", "Performance", "Planning", "E-commerce", "Design"];

/* ───────────────────────────────────────────────────────────────
   "Our Work" on the home page: three kinds of work we have done.
   Websites come from `projects` above. Social posts and logos below
   are our real client work (images in public/images/work/).
   ─────────────────────────────────────────────────────────────── */
const post = (slug, brand, desc) => ({ image: `/images/work/posts/${slug}.webp`, brand, desc });

// Ordered so the brands alternate in the grid and in the 3D post wall.
export const socialPosts = [
  post("giritvaa-1", "Giritvaa", "Brand-launch announcement for a trekking and adventure company, introducing its new name and identity over a mountain trail."),
  post("nav-1", "Nav", "Vihanga collection launch for a handcrafted jewellery brand, with the dragonfly necklace shown on a rich green leaf."),
  post("olive-and-poppy-1", "Olive & Poppy Toy Library", "Piano fitness rack spotlight for a toy rental library, with clear contact details and a rental call to action."),
  post("giritvaa-2", "Giritvaa", "Brand-story post explaining what the Giritvaa name and logo stand for, set against a mountain landscape."),
  post("nav-2", "Nav", "Collection introduction with the brand mark and a short story of the craft behind the Vihanga pieces."),
  post("olive-and-poppy-2", "Olive & Poppy Toy Library", "Mapology post that turns a map puzzle of India into a warm, playful family moment."),
  post("giritvaa-3", "Giritvaa", "Core-values post, with five values shown as simple icons above a trekker silhouette."),
  post("nav-3", "Nav", "Close-up product post with the dragonfly earrings styled on green leaf, so the jewellery is the hero."),
  post("olive-and-poppy-3", "Olive & Poppy Toy Library", "Rental post for an activity toy, with bright colour and a clear Play, Learn, Grow message."),
  post("giritvaa-4", "Giritvaa", "Mission post using real trekking photography to show respect for people, culture and mountains."),
  post("nav-4", "Nav", "Navami collection post with a heavy statement necklace on deep red fabric, ideal for festive campaigns."),
  post("olive-and-poppy-4", "Olive & Poppy Toy Library", "World-puzzle post for parents who want travel and learning in one toy, with rental details at the bottom."),
  post("giritvaa-5", "Giritvaa", "Vision post that pairs a quiet peak photograph with a clear statement of where the brand is heading."),
  post("nav-5", "Nav", "Collection story post on the Navami theme, setting out traditional craft in contemporary jewellery."),
  post("olive-and-poppy-5", "Olive & Poppy Toy Library", "Human-body learning kit post that shows kids learning through play, with rental details at the bottom."),
  post("nav-6", "Nav", "Silver and blue-bead necklace on red, continuing the Navami collection with the same rich, consistent look."),
];

const logo = (name, file, desc, extra = {}) => ({ name, image: `/images/work/logos/${file}`, desc, ...extra });

export const logoWork = [
  logo("Giritvaa", "giritvaa-icon.png", "A bold G made from a mountain, with a trekker standing at the summit. Built for a trekking brand that connects people to nature."),
  logo("Giritvaa Wordmark", "giritvaa-wordmark.png", "A wide wordmark with mountain peaks in the letter A and the line We Connect You To Nature, made for headers, signs and gear."),
  logo("Heal With Bhavna", "heal-with-bhavna.png", "Open hands holding a lotus in calm greens and warm brown, to show care, healing and growth for a wellness practice."),
  logo("Heal With Bhavna Submark", "heal-with-bhavna-submark.png", "A round submark version for social profiles and stamps, with the lotus and hands inside a ring of text."),
  logo("Nav", "nav.png", "A graceful Devanagari monogram in deep red with a decorative crown, giving a handcrafted jewellery brand a timeless identity."),
  logo("Olive & Poppy Toy Library", "olive-and-poppy.png", "A playful character-led logo in bright pink and yellow, made to feel fun and friendly for parents and children.", { fit: "contain" }),
  logo("Giritvaa Business Card (Front)", "giritvaa-card-front.webp", "Front of the business card, with the logo centred on a warm cream background for a clean, premium first impression.", { card: true }),
  logo("Giritvaa Business Card (Back)", "giritvaa-card-back.webp", "Back of the card with contact details, an orange icon band, a QR code to Instagram and the BNI member mark.", { card: true }),
];
