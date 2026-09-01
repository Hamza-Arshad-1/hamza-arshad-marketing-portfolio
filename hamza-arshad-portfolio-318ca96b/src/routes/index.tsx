import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  CircleDot,
  LineChart,
  Linkedin,
  Megaphone,
  MousePointerClick,
  PieChart,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import googleAdsImage from "@/assets/google-ads.webp";
import hamzaImage from "@/assets/hamza.webp";
import microsoftAdsImage from "@/assets/microsoft-ads.webp";
import sprinklersLandscapingImage from "@/assets/sprinklers-landscaping-google-ads.webp";
import septicServicesImage from "@/assets/septic-services-google-ads.webp";
import drainFieldImage from "@/assets/drain-field-google-ads.webp";
import { OG_IMAGE, absoluteUrl } from "@/lib/site";

const linkedInUrl = "https://www.linkedin.com/in/hamza-arshad-profile/";

const proofMetrics = [
  { value: "$638K+", label: "Google Ads Spend", note: "Latest 30 days" },
  { value: "6.38K+", label: "Conversions", note: "Google Ads" },
  { value: "187K+", label: "Clicks", note: "Google Ads" },
  { value: "12.1M+", label: "Impressions", note: "Google Ads" },
  { value: "$9.6K+", label: "Meta Ads Spend", note: "Selected period" },
  { value: "317", label: "Meta Leads", note: "Selected period" },
  { value: "719", label: "Microsoft Ads Conversions", note: "Campaign snapshot" },
  { value: "5", label: "Paid Media Platforms", note: "Hands-on experience" },
];

const specializationCards = [
  {
    title: "Paid Media",
    tag: "Primary",
    icon: Megaphone,
    items: ["Google Ads", "Meta Ads", "Microsoft Advertising", "TikTok Ads", "LinkedIn Ads"],
  },
  {
    title: "Performance Marketing",
    tag: "Primary",
    icon: Target,
    items: ["Campaign Strategy", "Budget Management", "Audience Targeting", "A/B Testing", "Optimization"],
  },
  {
    title: "Analytics & Tracking",
    icon: BarChart3,
    items: ["GA4", "Google Tag Manager", "Conversion Tracking", "Meta Pixel", "Looker Studio"],
  },
  {
    title: "Digital Growth",
    icon: TrendingUp,
    items: ["SEO", "CRO", "Landing Pages", "Website Optimization", "AI & Automation"],
  },
];

const googleCapabilities = [
  "Keyword Research",
  "Search Term Analysis",
  "Negative Keywords",
  "Bid Optimization",
  "Budget Management",
  "Ad Testing",
  "Campaign Structure",
  "Conversion Optimization",
];

const metaCapabilities = [
  "Campaign Setup",
  "Audience Targeting",
  "Creative Testing",
  "Lead Generation",
  "Retargeting",
  "Budget Optimization",
  "Meta Pixel",
  "Conversion API",
];

const metaIndustries = ["Dentists", "Sports", "Cafe", "Education", "Clothing", "Food", "HVAC", "& Others"];

const clientCampaignAccent = ["var(--chart-1)", "var(--chart-3)", "var(--chart-5)"];

const clientCampaigns = [
  {
    id: "sprinklers",
    title: "Sprinklers & Landscaping (US)",
    period: "30 Mar – 24 Aug 2026",
    note: "Conversions tracked as phone call leads and form submissions",
    metrics: [
      ["1.03K", "Clicks"],
      ["4.70%", "Actual ROAS"],
      ["199.99", "Conversions"],
      ["$2.81K", "Cost"],
    ],
    image: sprinklersLandscapingImage,
    alt: "Google Ads performance chart for a sprinklers and landscaping business showing clicks, actual ROAS, conversions and cost",
  },
  {
    id: "septic",
    title: "Septic Services (US)",
    period: "27 Apr – 24 Aug 2026",
    metrics: [
      ["1.43K", "Clicks"],
      ["567.85", "Conversions"],
      ["$14.19", "Cost / Conv."],
      ["$8.06K", "Cost"],
    ],
    image: septicServicesImage,
    alt: "Google Ads performance chart for a septic services business showing clicks, conversions, cost per conversion and cost",
    searchTerms: [
      "septic tank pumping",
      "septic service near me",
      "septic companies near me",
      "septic pumping near me",
      "septic tank pumping near me",
      "septic system service near me",
    ],
  },
  {
    id: "drain-field",
    title: "Drain Field Services (US)",
    period: "1 Aug – 30 Aug 2026",
    metrics: [
      ["3.19K", "Clicks"],
      ["472.50", "Conversions"],
      ["$3.24K", "Cost"],
      ["$6.85", "Cost / Conv."],
    ],
    image: drainFieldImage,
    alt: "Google Ads performance chart for a drain field services business showing clicks, conversions, cost and cost per conversion",
  },
];

const performanceMetrics = [
  ["CTR", "Creative & keyword relevance"],
  ["CPC", "Auction efficiency"],
  ["CPM", "Delivery cost"],
  ["CPA", "Cost per acquisition"],
  ["CPL", "Cost per lead"],
  ["Conversion Rate", "Landing page & intent fit"],
  ["ROAS", "Return on ad spend"],
  ["Conversions", "Volume outcome"],
];

const measurementFlow = [
  "Google Ads · Meta Ads · Microsoft Ads",
  "Google Tag Manager",
  "GA4 / Platform Tracking",
  "Conversions",
  "Reporting",
  "Optimization",
];

const experience = [
  {
    role: "Digital Marketing Lead",
    company: "Khired Networks",
    period: "March 2025 – Present",
    description:
      "Leading digital marketing activities across paid advertising, SEO, analytics, website optimization and digital growth.",
    bullets: [
      "Paid media strategy",
      "Google Ads",
      "Meta Ads",
      "SEO",
      "GA4 & GTM",
      "Conversion tracking",
      "Website optimization",
      "Digital strategy",
      "Team coordination",
      "AI-powered marketing workflows",
    ],
  },
  {
    role: "Paid Media / Digital Marketing",
    company: "US-Based Freelance Marketing Company",
    period: "March 2026 – August 2026",
    description:
      "Managed Google Ads, Meta Ads and Microsoft Advertising campaigns across multiple industries with a focus on measurable performance.",
    bullets: [
      "Managed campaign budgets and performance optimization",
      "Implemented conversion tracking using GA4 and GTM",
      "Optimized keywords, search terms, negative keywords, audiences and budgets",
      "Worked with Search, Performance Max, Display and Demand Gen",
      "Analyzed CTR, CPC, CPA, CPL, conversions and ROAS",
    ],
  },
];

const platforms = ["Google Ads", "Meta Ads", "Microsoft Advertising", "TikTok Ads", "LinkedIn Ads"];

const platformTasks = ["Campaign Setup", "Audience Strategy", "Budget Management", "Optimization", "Performance Analysis"];

const skillGroups = [
  { title: "Paid Media", skills: ["Google Ads", "Meta Ads", "Microsoft Ads", "TikTok Ads", "LinkedIn Ads"] },
  { title: "Google Ads", skills: ["Search", "Performance Max", "Display", "Demand Gen", "Keyword Research", "Search Terms", "Negative Keywords", "Bidding"] },
  { title: "Analytics", skills: ["GA4", "GTM", "Looker Studio", "Conversion Tracking", "Event Tracking"] },
  { title: "Performance", skills: ["A/B Testing", "CRO", "CPA Optimization", "CPL Optimization", "ROAS Analysis", "Campaign Optimization"] },
  { title: "Digital Marketing", skills: ["SEO", "Local SEO", "AEO", "GEO", "Website Optimization", "Landing Pages", "AI Marketing"] },
  { title: "Leadership", skills: ["Digital Strategy", "Team Coordination", "Marketing Operations", "AI Workflows"] },
];

const processSteps = [
  ["Research", "Understand the business, audience, market and objective."],
  ["Strategy", "Build campaign structure, targeting and budget."],
  ["Track", "Implement accurate conversion measurement."],
  ["Launch", "Deploy campaigns with controlled budgets."],
  ["Optimize", "Analyze performance and continuously test."],
  ["Scale", "Scale campaigns and strategies that demonstrate sustainable performance."],
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hamza Arshad | Performance Marketing & Paid Media Portfolio" },
      {
        name: "description",
        content:
          "Hamza Arshad — Digital Marketing Lead & Performance Marketer. Google Ads, Meta Ads and Microsoft Advertising results, GA4 tracking, and paid media case studies.",
      },
      { property: "og:title", content: "Hamza Arshad | Performance Marketing & Paid Media Portfolio" },
      {
        property: "og:description",
        content:
          "Explore Hamza Arshad's paid media experience, campaign results, analytics stack, platform expertise, and selected marketing work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hamza Arshad | Performance Marketing & Paid Media Portfolio" },
      {
        name: "twitter:description",
        content: "Google Ads, Meta Ads and Microsoft Advertising results, tracking and paid media case studies.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Hamza Arshad",
          jobTitle: "Digital Marketing Lead & Performance Marketer",
          url: absoluteUrl("/"),
          image: OG_IMAGE,
          sameAs: [linkedInUrl],
          worksFor: { "@type": "Organization", name: "Khired Networks" },
          knowsAbout: [
            "Performance Marketing",
            "Paid Media",
            "Google Ads",
            "Meta Ads",
            "Microsoft Advertising",
            "Analytics",
            "Conversion Tracking",
            "SEO",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Hamza Arshad Portfolio",
          url: absoluteUrl("/"),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <PlatformMarquee />
      <ProofSection />
      <AboutSection />
      <SpecializationSection />
      <PlatformsSection />
      <MethodSection />
      <ExperienceSection />
      <WorkSection />
      <SkillsSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}

function SiteHeader() {
  const links = [
    ["Results", "#results"],
    ["About", "#about"],
    ["Platforms", "#platforms"],
    ["Experience", "#experience"],
    ["Work", "#work"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-5" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3 font-display text-sm font-bold uppercase tracking-normal text-ink">
          <span className="size-2.5 rounded-full bg-brand transition-transform group-hover:scale-125" aria-hidden="true" />
          Hamza Arshad
          <span className="hidden border-l border-border pl-3 font-sans text-[0.65rem] font-semibold text-muted-foreground md:inline">
            Digital Marketing Lead
          </span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" aria-hidden="true" />
            </a>
          ))}
          <Link to="/media-buying" className="group relative text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            Media Buying
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" aria-hidden="true" />
          </Link>
        </div>
        <Button asChild size="sm" className="glow-brand bg-brand text-brand-foreground shadow-none hover:bg-brand/90">
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" />
            LinkedIn
          </a>
        </Button>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="soft-highlight subtle-grid border-b border-border/80">
      <div className="section-shell grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand">
            Performance Marketing Portfolio · 2+ Years Experience
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.98] text-ink text-balance sm:text-6xl lg:text-7xl">
            Digital Marketing Lead & <span className="gradient-text">Performance Marketer</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-foreground">
            Specializing in Paid Media, Performance Marketing, Analytics & Conversion Tracking.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I combine hands-on campaign management, data analysis, technical tracking and digital marketing strategy to improve acquisition performance and measurable business outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="glow-brand bg-brand text-brand-foreground shadow-card hover:bg-brand/90">
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                <Linkedin aria-hidden="true" />
                View LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border bg-surface-elevated text-foreground shadow-none transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-surface-soft"
            >
              <a href="#experience">
                View Experience
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Paid Media", "Performance Marketing", "Analytics", "Digital Growth"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand/25 bg-brand-soft/50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-brand"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px] lg:max-w-[520px]">
          <div className="animate-float absolute inset-8 rounded-full bg-accent blur-3xl" aria-hidden="true" />
          <div className="relative aspect-square rounded-full border-[18px] border-surface-elevated bg-accent p-3 shadow-soft">
            <img
              src={hamzaImage}
              alt="Portrait of Hamza Arshad, digital marketing lead and performance marketer"
              className="h-full w-full rounded-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div
            className="hover-lift absolute -right-2 top-6 hidden -rotate-3 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft sm:flex lg:-right-6"
            aria-hidden="true"
          >
            <TrendingUp className="size-5 text-brand" />
            <div>
              <p className="font-display text-lg font-bold leading-none text-ink">$638K+</p>
              <p className="mt-1 text-[11px] font-semibold text-muted-foreground">Ad Spend Managed</p>
            </div>
          </div>
          <div
            className="hover-lift absolute -left-2 bottom-10 hidden rotate-2 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft sm:flex lg:-left-8"
            aria-hidden="true"
          >
            <PieChart className="size-5 text-brand" />
            <div>
              <p className="font-display text-lg font-bold leading-none text-ink">12.1M+</p>
              <p className="mt-1 text-[11px] font-semibold text-muted-foreground">Impressions Driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformMarquee() {
  const items = ["Google Ads", "Meta Ads", "Microsoft Advertising", "TikTok Ads", "LinkedIn Ads", "GA4 & GTM"];
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-border/80 bg-surface py-4">
      <div className="flex w-max animate-marquee gap-10">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-10 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {item}
            <span className="text-brand" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ProofSection() {
  const [feature, ...rest] = proofMetrics;
  const bars = [35, 55, 45, 75, 60, 95];

  return (
    <Section
      id="results"
      eyebrow="01 / Proof"
      title="Selected Performance Results"
      description="Each figure below is reported against its own campaign period. Periods are never combined."
    >
      <div className="grid gap-4 lg:grid-cols-4 lg:[grid-auto-flow:dense]">
        {feature ? (
          <article className="hover-lift relative overflow-hidden rounded-2xl border border-border bg-ink p-8 text-primary-foreground shadow-soft lg:col-span-2 lg:row-span-2">
            <div className="animate-float pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">{feature.note}</p>
            <p className="mt-6 font-display text-6xl font-bold leading-none">{feature.value}</p>
            <p className="mt-4 text-lg font-semibold text-primary-foreground/85">{feature.label}</p>
            <div className="mt-10 flex h-16 items-end gap-2" aria-hidden="true">
              {bars.map((h, index) => (
                <span key={index} className="w-3 rounded-t-sm bg-brand-soft/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </article>
        ) : null}
        {rest.map((metric) => (
          <article key={metric.label} className="hover-lift rounded-lg border border-border bg-card p-5 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{metric.note}</p>
            <p className="mt-4 font-display text-4xl font-bold text-ink">{metric.value}</p>
            <p className="mt-2 font-semibold text-foreground">{metric.label}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function AboutSection() {
  const paragraphs = [
    "I'm a Digital Marketing Lead and Performance Marketer with 2+ years of hands-on experience across paid advertising, SEO, analytics, conversion tracking, website optimization and digital growth.",
    "My strongest area is performance marketing, where I manage and optimize paid campaigns using data, testing and accurate conversion tracking.",
    "Alongside paid media, my experience as a Digital Marketing Lead has given me exposure to broader marketing strategy, team coordination, SEO, websites, CRO and AI-powered marketing workflows.",
  ];

  return (
    <Section id="about" eyebrow="02 / Profile" title="About Me">
      <div className="relative max-w-3xl space-y-10 pl-10 sm:pl-14">
        <span className="absolute left-[11px] top-2 bottom-2 w-px bg-border sm:left-[15px]" aria-hidden="true" />
        {paragraphs.map((text, index) => (
          <div key={text} className="relative">
            <span className="animate-pulse-ring absolute -left-10 top-0 grid size-6 place-items-center rounded-full border-2 border-brand bg-background font-display text-[11px] font-bold text-brand sm:-left-14 sm:size-8">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-lg leading-8 text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const specializationAccent = ["var(--chart-2)", "var(--chart-3)", "var(--chart-4)"];

function SpecializationSection() {
  const spans = ["md:col-span-2 md:row-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-3"];

  return (
    <Section id="focus" eyebrow="03 / Focus" title="My Core Specialization">
      <div className="grid gap-4 md:grid-cols-3 md:[grid-auto-rows:1fr]">
        {specializationCards.map((card, index) => {
          const Icon = card.icon;
          const isFeature = index === 0;
          return (
            <article
              key={card.title}
              className={`hover-lift rounded-lg border border-border p-6 shadow-card ${isFeature ? "bg-ink text-primary-foreground" : "bg-card"} ${spans[index] ?? ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`font-display text-sm font-bold ${isFeature ? "text-brand-soft" : "text-brand"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className={`mt-4 font-display font-bold ${isFeature ? "text-3xl" : "text-2xl text-ink"}`}>{card.title}</h3>
                </div>
                <div className="flex items-center gap-3">
                  {card.tag ? (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${isFeature ? "bg-brand text-brand-foreground" : "bg-brand-soft text-brand"}`}
                    >
                      {card.tag}
                    </span>
                  ) : null}
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-lg ${isFeature ? "bg-white/10 text-brand-soft" : "text-white"}`}
                    style={isFeature ? undefined : { background: specializationAccent[(index - 1) % specializationAccent.length] }}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className={`flex flex-wrap gap-2 ${isFeature ? "mt-8" : "mt-6"}`}>
                {card.items.map((item) => (
                  <span
                    key={item}
                    className={
                      isFeature
                        ? "rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-primary-foreground/90"
                        : "rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function PlatformsSection() {
  return (
    <section id="platforms" className="dot-grid border-y border-border/80 bg-surface">
      <div className="section-shell section-pad space-y-16">
        <Reveal>
          <SectionHeader eyebrow="04 / Platform" title="Google Ads" description="My strongest paid media specialization." />
        </Reveal>
        <Reveal delay={100} className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <MiniMetricGrid
              metrics={[
                ["$638K+", "Spend"],
                ["6.38K+", "Conversions"],
                ["187K+", "Clicks"],
                ["12.1M+", "Impressions"],
              ]}
            />
            <article className="hover-lift rounded-lg border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-bold text-ink">Campaign Types</h3>
              <PillList items={["Search", "Performance Max", "Display", "Demand Gen"]} className="mt-5" />
              <h3 className="mt-8 font-display text-xl font-bold text-ink">Capabilities</h3>
              <PillList items={googleCapabilities} className="mt-5" />
            </article>
          </div>
          <ScreenshotCard image={googleAdsImage} alt="Google Ads overview dashboard showing spend, clicks, conversions and impressions" caption="Google Ads account overview — 25 Jul – 23 Aug 2026" />
        </Reveal>

        <Reveal>
          <h3 className="font-display text-xl font-bold text-ink">Client Campaign Snapshots</h3>
          <p className="mt-2 text-sm font-semibold text-muted-foreground">
            Individual Google Ads accounts, each reported independently — swipe to browse.
          </p>
          <div className="relative mt-6">
            <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4">
              {clientCampaigns.map((campaign, index) => (
                <article
                  key={campaign.id}
                  className="hover-lift w-[85vw] shrink-0 snap-start overflow-hidden rounded-lg border border-border bg-card shadow-card sm:w-[380px]"
                >
                  <span
                    className="block h-1.5 w-full"
                    style={{ background: clientCampaignAccent[index % clientCampaignAccent.length] }}
                    aria-hidden="true"
                  />
                  <img src={campaign.image} alt={campaign.alt} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                  <div className="p-5">
                    <h4 className="font-display text-lg font-bold text-ink">{campaign.title}</h4>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">{campaign.period}</p>
                    {campaign.note ? <p className="mt-1 text-xs italic text-muted-foreground/80">{campaign.note}</p> : null}
                    <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
                      {campaign.metrics.map(([value, label]) => (
                        <div key={label}>
                          <p className="font-display text-lg font-bold text-ink">{value}</p>
                          <p className="text-xs font-semibold text-muted-foreground">{label}</p>
                        </div>
                      ))}
                    </div>
                    {campaign.searchTerms ? (
                      <div className="mt-4 border-t border-border pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">Top Search Terms</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {campaign.searchTerms.map((term) => (
                            <span key={term} className="rounded-full bg-secondary px-2 py-1 text-[10px] font-bold text-secondary-foreground">
                              {term}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" aria-hidden="true" />
          </div>
          <p className="mt-2 text-xs font-semibold text-muted-foreground">Scroll to see all client campaigns →</p>
        </Reveal>

        <Reveal>
          <SectionHeader eyebrow="05 / Platform" title="Meta Ads" description="Selected campaign period results and lead generation execution." />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <MiniMetricGrid metrics={[["$9.6K+", "Spend"], ["317", "Leads"], ["147K+", "Impressions"], ["84K+", "Reach"]]} />
            <article className="hover-lift rounded-lg border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-bold text-ink">Industries</h3>
              <PillList items={metaIndustries} className="mt-5" />
              <h3 className="mt-8 font-display text-xl font-bold text-ink">Execution</h3>
              <PillList items={metaCapabilities} className="mt-5" />
            </article>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeader
            eyebrow="06 / Platform"
            title="Microsoft Advertising"
            description="Two separate campaign snapshots, reported independently. Client work spans HVAC, marketing agency, septic supplies, bail bond and law industries."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <SnapshotCard
              title="HVAC Company"
              period="July 1–31, 2026"
              note="Client name withheld for privacy"
              metrics={[["$42,099.41", "Spend"], ["6,916", "Clicks"], ["393,592", "Impressions"], ["$6.09", "Average CPC"]]}
            />
            <SnapshotCard
              title="Marketing Agency"
              period="Reported campaign snapshot"
              note="Client name withheld for privacy"
              metrics={[["$6,833.13", "Spend"], ["7,369", "Clicks"], ["719", "Conversions"], ["≈ $9.50", "CPA"]]}
            />
          </div>
          <ScreenshotCard
            image={microsoftAdsImage}
            alt="Microsoft Advertising dashboard showing spend, clicks, conversions and impressions"
            caption="Microsoft Advertising overview — Marketing Agency snapshot (client name withheld)"
            className="mt-6"
          />
        </Reveal>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <Section id="method" eyebrow="07 / Method" title="How I Think About Campaign Performance" description="I use campaign data to identify inefficiencies, test opportunities and improve performance over time.">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {performanceMetrics.map(([metric, meaning]) => (
            <article key={metric} className="hover-lift rounded-lg border border-border bg-card p-5 shadow-card">
              <p className="font-display text-2xl font-bold text-ink">{metric}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{meaning}</p>
            </article>
          ))}
        </div>
        <article className="hover-lift rounded-lg border border-border bg-surface-elevated p-6 shadow-card">
          <h3 className="font-display text-2xl font-bold text-ink">Tracking & Measurement</h3>
          <p className="mt-3 leading-7 text-muted-foreground">I believe performance marketing starts with accurate data.</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-3">
            {measurementFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 shadow-card transition-colors hover:border-brand/40 hover:bg-brand-soft/40">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-foreground">{step}</span>
                </span>
                {index < measurementFlow.length - 1 ? (
                  <ArrowRight className="size-4 shrink-0 text-border" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
          <PillList items={["GA4", "GTM", "Google Ads Tracking", "Meta Pixel", "Conversion API", "Looker Studio", "Form Tracking", "Call Tracking"]} className="mt-8" />
        </article>
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-border/80 bg-surface">
      <div className="section-shell section-pad">
        <Reveal>
          <SectionHeader eyebrow="08 / CV" title="Professional Experience" />
        </Reveal>
        <div className="mt-12 space-y-12 border-l-2 border-border pl-8 sm:pl-10">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 100} className="relative">
              <article>
                <span className="animate-pulse-ring absolute -left-[41px] top-1.5 size-4 rounded-full border-4 border-background bg-brand shadow-soft sm:-left-[49px]" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink">{item.role}</h3>
                <p className="mt-1 font-semibold text-brand">{item.company}</p>
                <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">{item.description}</p>
                <PillList items={item.bullets} className="mt-5" />
              </article>
            </Reveal>
          ))}
        </div>
        <div className="hover-lift mt-8 rounded-lg border border-border bg-surface-elevated p-6 shadow-card">
          <p className="font-display text-xl font-bold text-ink">Reported snapshots</p>
          <p className="mt-3 leading-7 text-muted-foreground">
            Latest 30 Days — Google Ads: $638K+ spend · 6.38K+ conversions · 187K+ clicks · 12.1M+ impressions. Selected Campaign Period — Meta Ads: $9.6K+ spend · 317 leads.
          </p>
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    label: "Case Study · Healthcare",
    title: "Kids Dental Clinic (US)",
    note: "Client name withheld for privacy",
    tags: ["Website", "SEO", "Google Business Profile", "Digital Marketing", "Conversion-focused strategy"],
    rows: [
      ["Challenge", "A practice roughly 7 months old with limited local visibility and few inbound patient enquiries."],
      [
        "Approach",
        "Website and on-page improvements, local SEO, Google Business Profile optimization and a conversion-focused digital marketing setup.",
      ],
      ["Result", "30+ Google Business Profile calls; ranking improved from approximately 35–40 to 12."],
    ],
  },
  {
    label: "Case Study · Paid Media",
    title: "Multi-Industry Paid Media",
    tags: [
      "Healthcare",
      "HVAC",
      "Plumbing",
      "Roofing",
      "Landscaping",
      "Septic Services",
      "Septic Supplies",
      "Drain Field Services",
      "Cleaning",
      "Legal",
      "Bail Bond",
      "Marketing Agency",
      "Ecommerce",
      "Professional Services",
    ],
    rows: [
      ["Focus", "Google Ads, Meta Ads, Microsoft Ads, conversion tracking, campaign optimization and performance analysis."],
      ["Note", "Performance figures shown on this page relate to their stated reporting periods only."],
    ],
  },
];

const outcomes = [
  { title: "Data-Driven", description: "Comfortable analyzing campaign metrics and identifying optimization opportunities." },
  { title: "Hands-On", description: "Experience actually managing campaigns rather than only creating strategies." },
  { title: "Technical", description: "GA4, GTM, conversion tracking and marketing analytics." },
  { title: "Leadership", description: "Experience coordinating broader marketing activities." },
];

function WorkSection() {
  return (
    <Section id="work" eyebrow="09 / Evidence" title="Selected Work" description="Case studies included as evidence of hands-on experience.">
      <div className="relative">
        <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="hover-lift w-[85vw] shrink-0 snap-start rounded-lg border border-border bg-card p-6 shadow-card sm:w-[560px] sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{study.label}</p>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">{study.title}</h3>
              {"note" in study && study.note ? (
                <p className="mt-1 text-xs font-medium italic text-muted-foreground/80">{study.note}</p>
              ) : null}
              <PillList items={study.tags} className="mt-5" />
              <div className="mt-8 space-y-6">
                {study.rows.map(([label, text]) => (
                  <div key={label}>
                    <p className="flex items-center gap-2 font-bold text-foreground">
                      <MousePointerClick className="size-4 text-brand" aria-hidden="true" />
                      {label}
                    </p>
                    <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" aria-hidden="true" />
      </div>
      <p className="mt-2 text-xs font-semibold text-muted-foreground">Scroll to see all case studies →</p>
      <div className="mt-10 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-lg border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {outcomes.map((item) => (
          <div key={item.title} className="flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-brand-soft/30">
            <CheckCircle2 className="text-success" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SkillsSection() {
  const [activePlatform, setActivePlatform] = useState(0);

  return (
    <section id="skills" className="border-y border-border/80 bg-surface">
      <div className="section-shell section-pad">
        <Reveal>
          <SectionHeader eyebrow="10 / Matrix" title="Skills" />
        </Reveal>
        <Reveal delay={100} className="relative mt-10">
          <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4">
            {skillGroups.map((group) => (
              <article key={group.title} className="hover-lift w-[260px] shrink-0 snap-start rounded-lg border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-xl font-bold text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground"
                    >
                      <CircleDot className="size-3 text-brand" aria-hidden="true" />
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" aria-hidden="true" />
          <p className="mt-2 text-xs font-semibold text-muted-foreground">Scroll to see all skill groups →</p>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <SectionHeader eyebrow="11 / Reach" title="Multi-Platform Paid Media Experience" />
          <div className="mt-8 flex flex-wrap gap-2">
            {platforms.map((platform, index) => (
              <button
                key={platform}
                type="button"
                onClick={() => setActivePlatform(index)}
                className={
                  activePlatform === index
                    ? "rounded-full bg-brand px-4 py-2 text-sm font-bold text-brand-foreground shadow-glow transition-all"
                    : "rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:bg-surface-soft"
                }
              >
                {platform}
              </button>
            ))}
          </div>
          <article className="hover-lift mt-5 rounded-lg border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-xl font-bold text-ink">{platforms[activePlatform]}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {platformTasks.map((task) => (
                <div key={task} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <CircleDot className="size-3.5 shrink-0 text-brand" aria-hidden="true" />
                  {task}
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <Section id="process" eyebrow="12 / Process" title="My Performance Marketing Approach">
      <div className="relative">
        <span className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" aria-hidden="true" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {processSteps.map(([title, description], index) => (
            <div key={title} className="group relative flex flex-col items-start gap-3 lg:items-center lg:text-center">
              <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border-2 border-brand bg-background font-display text-sm font-bold text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-brand-foreground group-hover:shadow-glow">
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-6 text-muted-foreground lg:max-w-[10rem]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 text-primary-foreground">
      <div className="animate-float pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
      <div className="animate-float-delay pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-brand-2/25 blur-3xl" aria-hidden="true" />
      <Reveal className="section-shell relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-soft">13 / Contact</p>
          <h2 className="gradient-text mt-4 font-display text-4xl font-bold text-balance sm:text-5xl">Let's Connect</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/80">
            I'm open to opportunities in Performance Marketing, Paid Media and Digital Marketing.
          </p>
        </div>
        <Button asChild className="glow-brand bg-brand text-brand-foreground shadow-none hover:bg-brand/90">
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" />
            Connect on LinkedIn
          </a>
        </Button>
      </Reveal>
    </section>
  );
}

// Fade-and-rise reveal on scroll. Defaults to visible (no SSR flash, no-JS
// fallback, and never hides content that's already on-screen at mount) —
// only content starting below the fold gets hidden, then observed and
// faded in the first time it scrolls into view.
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion, and provide a hard timeout failsafe so content
    // can never end up permanently stuck invisible for any reason.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const failsafe = window.setTimeout(() => setVisible(true), 2000);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          window.clearTimeout(failsafe);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`js-reveal transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function Section({ id, eyebrow, title, description, children }: { id: string; eyebrow: string; title: string; description?: string | undefined; children: ReactNode }) {
  return (
    <section id={id} className="section-shell section-pad">
      <Reveal>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      </Reveal>
      <Reveal delay={100} className="mt-10">
        {children}
      </Reveal>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string | undefined }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4">
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}

function PillList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span key={item} className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground">
          {item}
        </span>
      ))}
    </div>
  );
}

function MiniMetricGrid({ metrics }: { metrics: string[][] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map(([value, label]) => (
        <article key={`${value}-${label}`} className="hover-lift rounded-lg border border-border bg-card p-5 shadow-card">
          <p className="font-display text-3xl font-bold text-ink">{value}</p>
          <p className="mt-2 text-sm font-semibold text-muted-foreground">{label}</p>
        </article>
      ))}
    </div>
  );
}

function ScreenshotCard({
  image,
  alt,
  caption,
  className = "",
}: {
  image: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`hover-lift overflow-hidden rounded-lg border border-border bg-card shadow-soft ${className}`}>
      <img src={image} alt={alt} className="aspect-[16/8] w-full object-cover" loading="lazy" />
      <figcaption className="flex items-center gap-2 border-t border-border bg-surface-elevated px-5 py-4 text-sm font-semibold text-muted-foreground">
        <LineChart className="size-4 text-brand" aria-hidden="true" />
        {caption}
      </figcaption>
    </figure>
  );
}

function SnapshotCard({
  title,
  period,
  note,
  metrics,
}: {
  title: string;
  period: string;
  note?: string;
  metrics: string[][];
}) {
  return (
    <article className="hover-lift rounded-lg border border-border bg-card p-5 shadow-card">
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm font-semibold text-muted-foreground">{period}</p>
      {note ? <p className="mt-1 text-xs font-medium italic text-muted-foreground/80">{note}</p> : null}
      <div className="mt-5 grid gap-3">
        {metrics.map(([value, label]) => (
          <div key={`${title}-${label}`} className="flex items-center justify-between gap-3 border-t border-border pt-3">
            <span className="font-display text-lg font-bold text-ink">{value}</span>
            <span className="text-right text-sm font-semibold text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
