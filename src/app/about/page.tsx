/**
 * =============================================================================
 * ABOUT PAGE
 * =============================================================================
 * Personal information and background.
 * CUSTOMIZE: Update the content with your own bio and information.
 * =============================================================================
 */

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, Calendar, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background, experience, and what drives me as a developer.",
};

// DUMMY DATA: Replace with database fetch or update directly
const aboutData = {
  name: "John Doe",
  title: "Full-Stack Developer",
  location: "San Francisco, CA",
  email: "hello@example.com",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  bio: `I'm a passionate Full-Stack Developer with over 5 years of experience building 
    modern web applications. I specialize in React, Next.js, and Node.js, with a strong 
    focus on creating performant, accessible, and user-friendly experiences.

    My journey in tech started when I built my first website at 15. Since then, I've worked 
    with startups and established companies alike, helping them bring their digital products 
    to life. I believe in writing clean, maintainable code and staying up-to-date with the 
    latest industry trends.

    When I'm not coding, you can find me contributing to open-source projects, writing 
    technical articles, or exploring new technologies. I'm always excited to take on new 
    challenges and collaborate on interesting projects.`,
  resumeUrl: "/resume.pdf",
  yearsOfExperience: 5,
  projectsCompleted: 50,
  happyClients: 30,
};

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    date: "2023",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section paddingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src={aboutData.avatar}
                  alt={aboutData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge className="mb-4">About Me</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{aboutData.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {aboutData.title}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {aboutData.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {aboutData.email}
              </span>
            </div>

            {/* Bio */}
            <div className="prose prose-neutral dark:prose-invert mb-8">
              {aboutData.bio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={aboutData.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section paddingY="md" className="bg-muted/30">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold gradient-text">
              {aboutData.yearsOfExperience}+
            </p>
            <p className="text-muted-foreground mt-2">Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold gradient-text">
              {aboutData.projectsCompleted}+
            </p>
            <p className="text-muted-foreground mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold gradient-text">
              {aboutData.happyClients}+
            </p>
            <p className="text-muted-foreground mt-2">Happy Clients</p>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section>
        <SectionHeader
          title="Certifications"
          description="Professional certifications that validate my expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <Card key={cert.title} hover>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {cert.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
