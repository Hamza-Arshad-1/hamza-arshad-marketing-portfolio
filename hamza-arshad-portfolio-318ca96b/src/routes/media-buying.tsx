import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ComponentType } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  ChevronUp,
  Dumbbell,
  Heart,
  Home,
  Image as ImageIcon,
  Linkedin,
  MessageCircle,
  MoreHorizontal,
  Play,
  Scale,
  Share2,
  ShoppingBag,
  Sparkles,
  SprayCan,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/site";
import sprinklersLandscapingImage from "@/assets/sprinklers-landscaping-google-ads.webp";
import septicServicesImage from "@/assets/septic-services-google-ads.webp";

const linkedInUrl = "https://www.linkedin.com/in/hamza-arshad-profile/";

type Format = "search" | "display" | "feed" | "story" | "video";

type Campaign = {
  id: string;
  platform: "Google Ads" | "Meta Ads";
  format: Format;
  industry: string;
  headline?: string;
  description?: string;
  caption?: string;
  url?: string;
  duration?: string;
};

const gradients = [
  "linear-gradient(135deg, var(--chart-1), var(--chart-2))",
  "linear-gradient(135deg, var(--chart-3), var(--chart-4))",
  "linear-gradient(135deg, var(--brand), var(--chart-5))",
  "linear-gradient(135deg, var(--chart-2), var(--accent))",
  "linear-gradient(135deg, var(--chart-4), var(--chart-1))",
  "linear-gradient(135deg, var(--chart-5), var(--brand-soft))",
];

const campaigns: Campaign[] = [
  {
    id: "search-dental",
    platform: "Google Ads",
    format: "search",
    industry: "Dental Care",
    url: "yourdentalpractice.com",
    headline: "Same-Day Dental Appointments | Trusted Local Dentist",
    description: "Book online in minutes. New patients welcome. Most insurance accepted.",
  },
  {
    id: "display-fashion",
    platform: "Google Ads",
    format: "display",
    industry: "Ecommerce Fashion",
    headline: "New Season Arrivals — Up to 40% Off",
  },
  {
    id: "feed-cleaning",
    platform: "Meta Ads",
    format: "feed",
    industry: "Home Cleaning",
    caption: "Spotless homes, stress-free weekends. Book your first clean and save 20%.",
  },
  {
    id: "story-fashion",
    platform: "Meta Ads",
    format: "story",
    industry: "Ecommerce Fashion",
    headline: "Swipe Up For 40% Off",
  },
  {
    id: "search-hvac",
    platform: "Google Ads",
    format: "search",
    industry: "HVAC Services",
    url: "yourhvacco.com",
    headline: "24/7 Emergency AC Repair | Licensed & Insured Techs",
    description: "Same-day service across the metro area. Free diagnostic with any repair.",
  },
  {
    id: "video-hvac",
    platform: "Google Ads",
    format: "video",
    industry: "HVAC Services",
    headline: "Watch: Why Homeowners Trust Us",
    duration: "0:15",
  },
  {
    id: "feed-fitness",
    platform: "Meta Ads",
    format: "feed",
    industry: "Fitness Studio",
    caption: "6-week transformation challenge starts Monday. Limited spots — reserve yours.",
  },
  {
    id: "display-realestate",
    platform: "Google Ads",
    format: "display",
    industry: "Real Estate",
    headline: "Homes For Sale Near You — Book A Tour",
  },
  {
    id: "search-law",
    platform: "Google Ads",
    format: "search",
    industry: "Law Firm",
    url: "yourlawfirm.com",
    headline: "Free Case Review | Personal Injury Attorneys",
    description: "No fee unless we win. Available 24/7 for urgent consultations.",
  },
  {
    id: "story-medspa",
    platform: "Meta Ads",
    format: "story",
    industry: "Med Spa",
    headline: "Book Your Glow-Up",
  },
  {
    id: "feed-auto",
    platform: "Meta Ads",
    format: "feed",
    industry: "Auto Repair",
    caption: "Free brake inspection this week only. Same-day service, honest pricing.",
  },
  {
    id: "search-roofing",
    platform: "Google Ads",
    format: "search",
    industry: "Roofing",
    url: "yourroofingco.com",
    headline: "Roof Replacement Quotes | Licensed Local Roofers",
    description: "Free inspection and a written estimate within 24 hours.",
  },
  {
    id: "video-dental",
    platform: "Meta Ads",
    format: "video",
    industry: "Dental Care",
    headline: "Patient Stories: Real Smiles",
    duration: "0:30",
  },
  {
    id: "display-medspa",
    platform: "Google Ads",
    format: "display",
    industry: "Med Spa",
    headline: "Glow Up This Summer — Book Your Consult",
  },
  {
    id: "story-fitness",
    platform: "Meta Ads",
    format: "story",
    industry: "Fitness Studio",
    headline: "Join The Challenge",
  },
  {
    id: "feed-professional",
    platform: "Meta Ads",
    format: "feed",
    industry: "Professional Services",
    caption: "Tax season made simple. Book a free consultation with our CPA team.",
  },
  {
    id: "search-plumbing",
    platform: "Google Ads",
    format: "search",
    industry: "Plumbing",
    url: "yourplumbingco.com",
    headline: "Leak? We're There In 60 Minutes | 24/7 Plumbers",
    description: "Upfront pricing, no overtime fees, fully licensed and insured.",
  },
  {
    id: "display-law",
    platform: "Google Ads",
    format: "display",
    industry: "Law Firm",
    headline: "Know Your Rights — Free Guide",
  },
];

const filters: { key: "all" | Format; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "search", label: "Search Ads" },
  { key: "display", label: "Display & PMax" },
  { key: "feed", label: "Feed Ads" },
  { key: "story", label: "Stories & Reels" },
  { key: "video", label: "Video Ads" },
];

const formatLabel: Record<Format, string> = {
  search: "Search",
  display: "Display",
  feed: "Feed",
  story: "Story",
  video: "Video",
};

// Icon shown inside a concept card's visual area, matched to the campaign's industry
// so the placeholder reads as relevant art direction rather than a missing image.
const industryIcon: Record<string, ComponentType<{ className?: string }>> = {
  "Ecommerce Fashion": ShoppingBag,
  "Real Estate": Home,
  "Med Spa": Sparkles,
  "Law Firm": Scale,
  "Home Cleaning": SprayCan,
  "Fitness Studio": Dumbbell,
  "Auto Repair": Wrench,
  "Professional Services": Briefcase,
};

const realResults = [
  {
    image: sprinklersLandscapingImage,
    title: "Sprinklers & Landscaping (US)",
    period: "30 Mar – 24 Aug 2026",
    metrics: [
      ["1.03K", "Clicks"],
      ["4.70%", "Actual ROAS"],
      ["199.99", "Conversions"],
      ["$2.81K", "Cost"],
    ],
  },
  {
    image: septicServicesImage,
    title: "Septic Services (US)",
    period: "27 Apr – 24 Aug 2026",
    metrics: [
      ["1.43K", "Clicks"],
      ["567.85", "Conversions"],
      ["$14.19", "Cost / Conv."],
      ["$8.06K", "Cost"],
    ],
  },
];

export const Route = createFileRoute("/media-buying")({
  component: MediaBuying,
  head: () => ({
    meta: [
      { title: "Media Buying Portfolio — Hamza Arshad" },
      {
        name: "description",
        content:
          "A media buying portfolio showcasing Google Ads and Meta Ads campaign concepts across search, display, feed, story and video formats.",
      },
      { property: "og:title", content: "Media Buying Portfolio — Hamza Arshad" },
      {
        property: "og:description",
        content: "Google Ads and Meta Ads campaign concepts across search, display, social and video formats.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/media-buying") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Media Buying Portfolio — Hamza Arshad" },
      {
        name: "twitter:description",
        content: "Google Ads and Meta Ads campaign concepts across search, display, social and video formats.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/media-buying") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Media Buying", item: absoluteUrl("/media-buying") },
          ],
        }),
      },
    ],
  }),
});

function MediaBuying() {
  const [active, setActive] = useState<"all" | Format>("all");
  const filtered = useMemo(
    () => (active === "all" ? campaigns : campaigns.filter((c) => c.format === active)),
    [active],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <RealResultsSection />
      <FilterBar active={active} onChange={setActive} />
      <GallerySection campaigns={filtered} />
      <ApproachSection />
      <ContactSection />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-5" aria-label="Main navigation">
        <Link to="/" className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-normal text-ink">
          <span className="size-2.5 rounded-full bg-brand" aria-hidden="true" />
          Media Buying
        </div>
        <Button asChild size="sm" className="bg-brand text-brand-foreground shadow-none hover:bg-brand/90">
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
    <section className="soft-highlight subtle-grid border-b border-border/80">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">Selected Work · Media Buying</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[0.98] text-ink text-balance sm:text-6xl">
          Media Buying Portfolio
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          A collection of Google Ads and Meta Ads campaign concepts — spanning search, display, social feed, story
          and video formats, built for multi-industry direct-response goals.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          <span>Google Ads</span>
          <span aria-hidden="true">•</span>
          <span>Meta Ads</span>
          <span aria-hidden="true">•</span>
          <span>Facebook</span>
          <span aria-hidden="true">•</span>
          <span>Instagram</span>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:max-w-xl">
          {[
            [String(campaigns.length), "Campaign Concepts"],
            ["2", "Platforms"],
            ["5", "Ad Formats"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg border border-border bg-card/80 p-4 shadow-card backdrop-blur">
              <p className="font-display text-2xl font-bold text-ink">{value}</p>
              <p className="mt-1 text-xs font-semibold text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RealResultsSection() {
  return (
    <section className="border-b border-border/80 bg-surface">
      <div className="section-shell section-pad">
        <div className="flex items-center gap-4">
          <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-brand">Verified Results</p>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>
        <h2 className="mt-5 font-display text-3xl font-bold text-ink text-balance sm:text-4xl">Real Campaign Screenshots</h2>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">
          Actual Google Ads account performance from live client campaigns — not mockups.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {realResults.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
              <img
                src={item.image}
                alt={`Google Ads performance chart for ${item.title}`}
                className="w-full object-cover"
                loading="lazy"
              />
              <figcaption className="border-t border-border p-5">
                <p className="font-display text-lg font-bold text-ink">{item.title}</p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">{item.period}</p>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {item.metrics.map(([value, label]) => (
                    <div key={label}>
                      <p className="font-display text-sm font-bold text-ink">{value}</p>
                      <p className="text-[10px] font-semibold text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterBar({ active, onChange }: { active: "all" | Format; onChange: (value: "all" | Format) => void }) {
  return (
    <div className="sticky top-16 z-20 border-b border-border/80 bg-background/95 backdrop-blur-xl">
      <div className="section-shell flex flex-wrap items-center gap-2 py-4">
        {filters.map((filter) => {
          const isActive = active === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => onChange(filter.key)}
              className={
                isActive
                  ? "rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-brand-foreground shadow-none transition-colors"
                  : "rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground transition-colors hover:bg-surface-soft"
              }
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GallerySection({ campaigns: items }: { campaigns: Campaign[] }) {
  return (
    <section className="section-shell section-pad">
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
        {items.map((campaign, index) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            gradient={gradients[index % gradients.length] ?? gradients[0]!}
          />
        ))}
      </div>
      {items.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">No concepts in this format yet.</p>
      ) : null}
    </section>
  );
}

function CampaignCard({ campaign, gradient }: { campaign: Campaign; gradient: string }) {
  switch (campaign.format) {
    case "search":
      return <SearchCard campaign={campaign} />;
    case "display":
      return <DisplayCard campaign={campaign} gradient={gradient} />;
    case "feed":
      return <FeedCard campaign={campaign} gradient={gradient} />;
    case "story":
      return <StoryCard campaign={campaign} gradient={gradient} />;
    case "video":
      return <VideoCard campaign={campaign} gradient={gradient} />;
    default:
      return null;
  }
}

function CardFooter({ platform, format, industry }: { platform: string; format: Format; industry: string }) {
  return (
    <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {platform} · {formatLabel[format]}
      </span>
      <span className="text-[11px] font-bold text-muted-foreground">{industry}</span>
    </div>
  );
}

function SearchCard({ campaign }: { campaign: Campaign }) {
  return (
    <article className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[var(--chart-4)]" />
          <span className="size-2.5 rounded-full bg-[var(--chart-3)]" />
          <span className="size-2.5 rounded-full bg-[var(--chart-2)]" />
        </span>
        <span className="ml-1 truncate text-xs font-semibold text-muted-foreground">{campaign.url}</span>
      </div>
      <div className="p-5">
        <span className="inline-flex items-center rounded border border-border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
          Ad
        </span>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand">{campaign.headline}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{campaign.description}</p>
      </div>
      <CardFooter platform={campaign.platform} format={campaign.format} industry={campaign.industry} />
    </article>
  );
}

function DisplayCard({ campaign, gradient }: { campaign: Campaign; gradient: string }) {
  const Icon = industryIcon[campaign.industry] ?? ImageIcon;
  return (
    <article className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="relative aspect-[16/10]" style={{ background: gradient }}>
        <Icon className="absolute inset-0 m-auto size-10 text-white/40" aria-hidden="true" />
        <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
          Display
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="font-display text-base font-bold text-white text-balance">{campaign.headline}</p>
          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-ink">
            Learn More
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </span>
        </div>
      </div>
      <CardFooter platform={campaign.platform} format={campaign.format} industry={campaign.industry} />
    </article>
  );
}

function FeedCard({ campaign, gradient }: { campaign: Campaign; gradient: string }) {
  const initials = campaign.industry
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
  const Icon = industryIcon[campaign.industry] ?? ImageIcon;

  return (
    <article className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="flex items-center gap-3 px-4 py-3">
        <span
          className="grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
          style={{ background: gradient }}
          aria-hidden="true"
        >
          {initials}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-foreground">{campaign.industry}</p>
          <p className="text-[11px] font-semibold text-muted-foreground">Sponsored</p>
        </div>
        <MoreHorizontal className="ml-auto size-4 text-muted-foreground" aria-hidden="true" />
      </div>
      <p className="px-4 pb-3 text-sm leading-6 text-foreground">{campaign.caption}</p>
      <div className="relative aspect-square" style={{ background: gradient }}>
        <Icon className="absolute inset-0 m-auto size-10 text-white/40" aria-hidden="true" />
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4 text-muted-foreground" aria-hidden="true">
          <Heart className="size-4" />
          <MessageCircle className="size-4" />
          <Share2 className="size-4" />
        </div>
        <span className="rounded-full bg-brand px-3 py-1.5 text-[11px] font-bold text-brand-foreground">Learn More</span>
      </div>
      <CardFooter platform={campaign.platform} format={campaign.format} industry={campaign.industry} />
    </article>
  );
}

function StoryCard({ campaign, gradient }: { campaign: Campaign; gradient: string }) {
  return (
    <article className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="relative aspect-[9/16]" style={{ background: gradient }}>
        <div className="absolute inset-x-3 top-3 flex gap-1" aria-hidden="true">
          <span className="h-1 flex-1 rounded-full bg-white" />
          <span className="h-1 flex-1 rounded-full bg-white/40" />
          <span className="h-1 flex-1 rounded-full bg-white/40" />
        </div>
        <div className="absolute left-3 top-7 flex items-center gap-2">
          <span className="size-6 rounded-full border-2 border-white/80 bg-white/20" aria-hidden="true" />
          <span className="text-xs font-bold text-white">{campaign.industry}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 text-center">
          <p className="font-display text-lg font-bold text-white text-balance">{campaign.headline}</p>
          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-ink">
            <ChevronUp className="size-3" aria-hidden="true" />
            Swipe Up
          </span>
        </div>
      </div>
      <CardFooter platform={campaign.platform} format={campaign.format} industry={campaign.industry} />
    </article>
  );
}

function VideoCard({ campaign, gradient }: { campaign: Campaign; gradient: string }) {
  return (
    <article className="mb-5 break-inside-avoid overflow-hidden rounded-lg border border-border bg-card shadow-card">
      <div className="relative aspect-video" style={{ background: gradient }}>
        <span className="absolute inset-0 m-auto grid size-12 place-items-center rounded-full bg-white/90 text-ink" aria-hidden="true">
          <Play className="size-5 fill-current" />
        </span>
        {campaign.duration ? (
          <span className="absolute bottom-3 right-3 rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-bold text-white">
            {campaign.duration}
          </span>
        ) : null}
        <p className="absolute inset-x-0 top-3 px-4 text-center font-display text-sm font-bold text-white text-balance">
          {campaign.headline}
        </p>
      </div>
      <CardFooter platform={campaign.platform} format={campaign.format} industry={campaign.industry} />
    </article>
  );
}

function ApproachSection() {
  const steps = [
    ["Research", "Study the offer, audience and competitors before writing a single headline."],
    ["Concept", "Build format-specific creative — search copy, static, story and video variants."],
    ["Test", "Run structured A/B tests across creative, audience and placement."],
    ["Scale", "Double down on what performs and retire what doesn't."],
  ];

  return (
    <section className="border-y border-border/80 bg-surface">
      <div className="section-shell section-pad">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-brand">Approach</p>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl">
            How I Approach Ad Creative
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Every concept above is built to match its platform and format — direct-response copy for search, scroll-stopping
            visuals for social, and clear calls to action across every unit.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <article key={title} className="rounded-lg border border-border bg-card p-6 shadow-card">
              <p className="font-display text-sm font-bold text-brand">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 rounded-lg border border-border bg-card/80 p-5 text-sm leading-6 text-muted-foreground shadow-card">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
          <p>
            The concepts on this page are original creative mockups illustrating campaign structure and format range.
            For real, reported campaign performance — spend, conversions, CTR and ROAS — see{" "}
            <Link to="/" hash="results" className="font-bold text-brand underline underline-offset-2">
              Selected Performance Results
            </Link>{" "}
            on the homepage.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-ink py-20 text-primary-foreground">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-soft">Let's Talk</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-balance sm:text-5xl">Have A Campaign In Mind?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/80">
            I'm open to opportunities in Performance Marketing, Paid Media and Digital Marketing.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground shadow-none hover:bg-primary-foreground/10">
            <Link to="/">
              <ArrowLeft aria-hidden="true" />
              Back to Portfolio
            </Link>
          </Button>
          <Button asChild className="bg-brand text-brand-foreground shadow-none hover:bg-brand/90">
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
