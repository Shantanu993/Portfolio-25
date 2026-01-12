/**
 * =============================================================================
 * HOMEPAGE / LANDING PAGE
 * =============================================================================
 * The main entry point for the portfolio website.
 * Displays hero section, featured projects, skills, and experience.
 * Data is fetched from the database and passed to client components.
 * =============================================================================
 */

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsShowcase } from "@/components/sections/skills-showcase";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { CTASection } from "@/components/sections/cta-section";

/**
 * Homepage component
 * Server component that fetches data and renders the landing page sections
 */
export default async function HomePage() {
  // TODO: Fetch data from database
  // const settings = await getSiteSettings();
  // const featuredProjects = await getFeaturedProjects();
  // const skills = await getSkills();
  // const experiences = await getExperiences();

  return (
    <div className="flex flex-col">
      {/* Hero Section - Main introduction */}
      <HeroSection />

      {/* Featured Projects - Showcase best work */}
      <FeaturedProjects />

      {/* Skills Showcase - Technical expertise */}
      <SkillsShowcase />

      {/* Experience Timeline - Professional journey */}
      <ExperienceTimeline />

      {/* CTA Section - Call to action */}
      <CTASection />
    </div>
  );
}
