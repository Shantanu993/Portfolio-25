/**
 * =============================================================================
 * NAVIGATION LINKS DATA
 * =============================================================================
 * Central configuration for all navigation links.
 * Edit this file to modify the site navigation.
 * =============================================================================
 */

import type { NavItem } from "@/types";

/**
 * Main navigation links displayed in the header
 * CUSTOMIZE: Add or remove navigation items as needed
 */
export const mainNavLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

/**
 * Special navigation links (CTAs)
 * These are displayed differently in the header
 */
export const ctaNavLinks: NavItem[] = [
  { label: "For Recruiters", href: "/recruiter" },
  { label: "Services", href: "/services" },
];

/**
 * Footer navigation links organized by category
 */
export const footerNavLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Articles", href: "/articles" },
  ],
  resources: [
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "For Recruiters", href: "/recruiter" },
    { label: "Services", href: "/services" },
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

/**
 * Admin dashboard navigation links
 */
export const adminNavLinks: NavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "LayoutDashboard" },
  { label: "Projects", href: "/admin/projects", icon: "FolderKanban" },
  { label: "Articles", href: "/admin/articles", icon: "FileText" },
  { label: "Skills", href: "/admin/skills", icon: "Sparkles" },
  { label: "Experience", href: "/admin/experience", icon: "Briefcase" },
  { label: "Services", href: "/admin/services", icon: "Wrench" },
  { label: "Testimonials", href: "/admin/testimonials", icon: "Quote" },
  { label: "Settings", href: "/admin/settings", icon: "Settings" },
];
