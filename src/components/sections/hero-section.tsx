/**
 * =============================================================================
 * HERO SECTION COMPONENT
 * =============================================================================
 * The main hero section displayed on the landing page.
 * Features animated text, CTA buttons, and a professional introduction.
 * CUSTOMIZE: Update the text content to match your personal brand.
 * =============================================================================
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

/**
 * Hero section props - data can be passed from database
 */
interface HeroSectionProps {
  name?: string;
  title?: string;
  shortBio?: string;
  resumeUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export function HeroSection({
  // DUMMY DATA: Replace with your own or fetch from database
  name = "John Doe",
  title = "Full-Stack Developer",
  shortBio = "I craft beautiful, performant web applications that users love. Specializing in React, Next.js, and Node.js with a passion for clean code and great user experiences.",
  resumeUrl = "/resume.pdf",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  twitterUrl = "https://twitter.com",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer>
            {/* Greeting Badge */}
            <StaggerItem>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for new opportunities
              </motion.div>
            </StaggerItem>

            {/* Main Heading */}
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Hi, I&apos;m{" "}
                <span className="gradient-text">{name}</span>
              </h1>
            </StaggerItem>

            {/* Title */}
            <StaggerItem>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
                {title}
              </p>
            </StaggerItem>

            {/* Bio */}
            <StaggerItem>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                {shortBio}
              </p>
            </StaggerItem>

            {/* CTA Buttons */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button size="lg" className="group" asChild>
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={resumeUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </StaggerItem>

            {/* Social Links */}
            <StaggerItem>
              <div className="flex items-center justify-center gap-4">
                <SocialLink href={githubUrl} label="GitHub">
                  <Github className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={linkedinUrl} label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={twitterUrl} label="Twitter">
                  <Twitter className="h-5 w-5" />
                </SocialLink>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Scroll Indicator */}
        <FadeInUp className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
              />
            </div>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
}

/**
 * Social link component with hover effect
 */
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
