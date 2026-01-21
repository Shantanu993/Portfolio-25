/**
 * =============================================================================
 * CTA (CALL TO ACTION) SECTION
 * =============================================================================
 * A compelling section to encourage visitors to take action.
 * Displayed at the bottom of the homepage.
 * =============================================================================
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FadeInUp } from "@/components/ui/motion";

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl" />
      </div>

      <FadeInUp className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Let&apos;s Build Something{" "}
          <span className="gradient-text">Amazing</span> Together
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Whether you&apos;re looking to hire a developer, collaborate on a project, 
          or just want to connect — I&apos;d love to hear from you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" variant="outline" asChild>
              <Link href="/recruiter">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Meeting
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Quick links */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <Link href="/services" className="hover:text-primary transition-colors">
            View Services
          </Link>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <Link href="/projects" className="hover:text-primary transition-colors">
            See Projects
          </Link>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <Link href="/recruiter" className="hover:text-primary transition-colors">
            For Recruiters
          </Link>
        </div>
      </FadeInUp>
    </Section>
  );
}
