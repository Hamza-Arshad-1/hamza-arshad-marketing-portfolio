// Single source of truth for site-wide SEO values (absolute URLs, shared OG image).
// Update SITE_URL if the site moves to a custom domain.
export const SITE_URL = "https://hamza-arshad-portfolio.lovable.app";
export const SITE_NAME = "Hamza Arshad Portfolio";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
