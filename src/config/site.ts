/**
 * =============================================================================
 * SITE CONFIGURATION
 * =============================================================================
 * Central configuration for site metadata and settings.
 * CUSTOMIZE: Update these values with your own information.
 * =============================================================================
 */

export const siteConfig = {
  // Basic site information
  name: "Developer Portfolio",
  description: "Full-Stack Developer specializing in modern web technologies. Building scalable, user-centric applications with React, Next.js, and Node.js.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  
  // Default owner info (overridden by database settings)
  author: {
    name: "John Doe",
    title: "Full-Stack Developer",
    email: "hello@example.com",
    shortBio: "Passionate developer crafting beautiful, performant web experiences.",
    location: "San Francisco, CA",
  },
  
  // Social links (will be overridden by database settings)
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:hello@example.com",
  },
  
  // Keywords for SEO
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
  ],
  
  // Open Graph defaults
  ogImage: "/og-image.png",
  
  // Theme configuration
  theme: {
    defaultTheme: "system" as const,
    enableSystem: true,
    disableTransitionOnChange: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
