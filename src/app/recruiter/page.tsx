/**
 * =============================================================================
 * RECRUITER PAGE
 * =============================================================================
 * Special page for recruiters with calendar booking for Google Meet appointments.
 * Features a modern booking calendar with available time slots.
 * TODO: Replace dummy data and integrate with actual calendar API.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Download,
  Mail,
  MapPin,
  CheckCircle,
  ExternalLink,
  Code,
  Users,
  Trophy,
  Clock,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookingCalendar } from "@/components/recruiter/booking-calendar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "For Recruiters",
  description: `Recruiting information and appointment booking for ${siteConfig.name}.`,
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY RECRUITER DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with your actual data
 * -----------------------------------------------------------------------------
 */
const CANDIDATE_INFO = {
  // TODO: Replace with your actual information
  name: "John Doe",
  title: "Senior Full Stack Developer",
  location: "San Francisco Bay Area",
  openToRelocation: true,
  workAuthorization: "US Citizen", // TODO: Update based on your status
  preferredRoles: [
    "Senior Full Stack Developer",
    "Staff Engineer",
    "Tech Lead",
    "Principal Engineer",
  ],
  preferredWorkTypes: ["Full-time", "Contract"],
  preferredLocations: ["Remote", "Hybrid (Bay Area)", "On-site (SF/NYC)"],
  salaryRange: "$180K - $250K", // TODO: Update with your range
  noticePeriod: "2 weeks",
  yearsOfExperience: 6,
  availability: "Immediately available",
};

/**
 * -----------------------------------------------------------------------------
 * KEY HIGHLIGHTS
 * -----------------------------------------------------------------------------
 */
const HIGHLIGHTS = [
  {
    icon: Code,
    title: "6+ Years Experience",
    description: "Full-stack development with React, Next.js, Node.js, and cloud technologies",
  },
  {
    icon: Users,
    title: "Leadership Experience",
    description: "Led teams of 5+ developers, mentoring junior engineers and driving technical decisions",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "Delivered 30+ projects for startups and Fortune 500 companies",
  },
  {
    icon: Briefcase,
    title: "Domain Expertise",
    description: "E-commerce, SaaS, FinTech, and B2B enterprise applications",
  },
];

/**
 * -----------------------------------------------------------------------------
 * TOP SKILLS
 * -----------------------------------------------------------------------------
 */
const TOP_SKILLS = [
  { name: "React/Next.js", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "Node.js", level: "Expert" },
  { name: "PostgreSQL/MongoDB", level: "Advanced" },
  { name: "AWS/Cloud", level: "Advanced" },
  { name: "System Design", level: "Advanced" },
];

/**
 * -----------------------------------------------------------------------------
 * WHY HIRE ME
 * -----------------------------------------------------------------------------
 */
const VALUE_PROPOSITIONS = [
  "Proven ability to take projects from concept to production",
  "Strong communication skills with stakeholders at all levels",
  "Experience with agile methodologies and best practices",
  "Passion for writing clean, maintainable, and tested code",
  "Quick learner who adapts to new technologies rapidly",
  "Track record of improving team productivity and code quality",
];

export default function RecruiterPage() {
  return (
    <>
      {/* Page Header */}
      <Section className="pt-24 lg:pt-32 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            For Recruiters
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let&apos;s Connect
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your interest! I&apos;m currently open to new opportunities.
            Book a 15-minute intro call below or reach out directly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Quick Info Cards */}
      <Section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{CANDIDATE_INFO.yearsOfExperience}+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-lg font-bold text-green-500">Available</p>
              <p className="text-sm text-muted-foreground">{CANDIDATE_INFO.noticePeriod} notice</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Info */}
        <Section className="py-6">
          {/* Candidate Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Candidate Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{CANDIDATE_INFO.title}</p>
                  <p className="text-sm text-muted-foreground">{CANDIDATE_INFO.yearsOfExperience}+ years of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{CANDIDATE_INFO.location}</p>
                  <p className="text-sm text-muted-foreground">
                    {CANDIDATE_INFO.openToRelocation ? "Open to relocation" : "Not open to relocation"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{CANDIDATE_INFO.workAuthorization}</p>
                  <p className="text-sm text-muted-foreground">No sponsorship required</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{CANDIDATE_INFO.availability}</p>
                  <p className="text-sm text-muted-foreground">{CANDIDATE_INFO.noticePeriod} notice period</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferred Roles */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Looking For</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Preferred Roles</p>
                  <div className="flex flex-wrap gap-2">
                    {CANDIDATE_INFO.preferredRoles.map((role) => (
                      <Badge key={role} variant="secondary">{role}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Work Types</p>
                  <div className="flex flex-wrap gap-2">
                    {CANDIDATE_INFO.preferredWorkTypes.map((type) => (
                      <Badge key={type} variant="outline">{type}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Locations</p>
                  <div className="flex flex-wrap gap-2">
                    {CANDIDATE_INFO.preferredLocations.map((loc) => (
                      <Badge key={loc} variant="outline">{loc}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Skills */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Top Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {TOP_SKILLS.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant={skill.level === "Expert" ? "default" : "secondary"} className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="link" asChild className="mt-4 p-0">
                <Link href="/skills">View all skills →</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Why Hire Me */}
          <Card>
            <CardHeader>
              <CardTitle>Why Hire Me</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {VALUE_PROPOSITIONS.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>

        {/* Right Column - Booking Calendar */}
        <Section className="py-6">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                Book a 15-Minute Call
              </CardTitle>
              <CardDescription>
                Schedule a quick intro call via Google Meet. I&apos;ll confirm your booking within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BookingCalendar />
            </CardContent>
          </Card>
        </Section>
      </div>

      {/* Highlights Section */}
      <Section className="py-16">
        <h2 className="text-2xl font-bold text-center mb-12">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((highlight, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <highlight.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Quick Links */}
      <Section className="py-12">
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <Link href="/experience" className="group">
                <div className="p-4 rounded-lg hover:bg-card transition-colors">
                  <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-medium group-hover:text-primary transition-colors">View Experience</p>
                  <p className="text-sm text-muted-foreground">Full work history</p>
                </div>
              </Link>
              <Link href="/projects" className="group">
                <div className="p-4 rounded-lg hover:bg-card transition-colors">
                  <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-medium group-hover:text-primary transition-colors">View Projects</p>
                  <p className="text-sm text-muted-foreground">Portfolio & case studies</p>
                </div>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" className="group">
                <div className="p-4 rounded-lg hover:bg-card transition-colors">
                  <ExternalLink className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-medium group-hover:text-primary transition-colors">LinkedIn Profile</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
