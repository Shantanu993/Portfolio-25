/**
 * =============================================================================
 * EXPERIENCE PAGE
 * =============================================================================
 * Displays professional experience, education, and certifications.
 * TODO: Replace dummy data with your actual experience.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  ExternalLink,
  Building2,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience and career journey of ${siteConfig.name}.`,
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY EXPERIENCE DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with your actual work experience from the database.
 * -----------------------------------------------------------------------------
 */
const WORK_EXPERIENCE = [
  {
    id: "1",
    company: "TechCorp Innovation Labs",
    role: "Senior Full Stack Developer",
    type: "FULL_TIME" as const,
    location: "San Francisco, CA",
    locationType: "HYBRID" as const,
    startDate: new Date("2023-01-15"),
    endDate: null,
    current: true,
    description:
      "Leading development of enterprise-scale applications using Next.js, TypeScript, and cloud-native technologies. Architecting microservices infrastructure and mentoring junior developers.",
    achievements: [
      "Reduced page load times by 60% through strategic performance optimizations",
      "Led migration from legacy PHP system to modern Next.js architecture",
      "Implemented CI/CD pipelines reducing deployment time by 75%",
      "Mentored team of 5 junior developers",
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Redis", "Docker"],
    companyUrl: "https://techcorp.example.com",
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    type: "FULL_TIME" as const,
    location: "Austin, TX",
    locationType: "REMOTE" as const,
    startDate: new Date("2021-06-01"),
    endDate: new Date("2022-12-31"),
    current: false,
    description:
      "Built and maintained core product features for a B2B SaaS platform. Collaborated closely with product and design teams to deliver user-centric solutions.",
    achievements: [
      "Developed real-time collaboration features used by 10,000+ users",
      "Built comprehensive API documentation reducing onboarding time by 50%",
      "Implemented automated testing suite achieving 90% code coverage",
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
    companyUrl: "https://startupxyz.example.com",
  },
  {
    id: "3",
    company: "Digital Agency Pro",
    role: "Frontend Developer",
    type: "FULL_TIME" as const,
    location: "New York, NY",
    locationType: "ON_SITE" as const,
    startDate: new Date("2019-08-15"),
    endDate: new Date("2021-05-31"),
    current: false,
    description:
      "Developed responsive web applications and e-commerce solutions for diverse clients ranging from startups to Fortune 500 companies.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Introduced component-based architecture reducing development time by 40%",
      "Won 'Developer of the Year' award in 2020",
    ],
    technologies: ["React", "Vue.js", "SCSS", "JavaScript", "WordPress"],
    companyUrl: "https://digitalagency.example.com",
  },
];

/**
 * -----------------------------------------------------------------------------
 * DUMMY EDUCATION DATA
 * -----------------------------------------------------------------------------
 */
const EDUCATION = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Master of Science",
    field: "Computer Science",
    location: "Boston, MA",
    startDate: new Date("2017-09-01"),
    endDate: new Date("2019-05-31"),
    gpa: "3.9/4.0",
    achievements: [
      "Thesis: Machine Learning Applications in Web Performance Optimization",
      "Teaching Assistant for Advanced Algorithms course",
      "Dean's List - All semesters",
    ],
  },
  {
    id: "2",
    institution: "State University",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    location: "Los Angeles, CA",
    startDate: new Date("2013-09-01"),
    endDate: new Date("2017-05-31"),
    gpa: "3.7/4.0",
    achievements: [
      "Minor in Mathematics",
      "President of Computer Science Club",
      "Hackathon Winner - 2016 Regional Championship",
    ],
  },
];

/**
 * -----------------------------------------------------------------------------
 * DUMMY CERTIFICATIONS DATA
 * -----------------------------------------------------------------------------
 */
const CERTIFICATIONS = [
  {
    id: "1",
    name: "AWS Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    issueDate: new Date("2023-06-15"),
    expiryDate: new Date("2026-06-15"),
    credentialId: "AWS-SAP-12345",
    credentialUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "2",
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    issueDate: new Date("2023-03-20"),
    expiryDate: new Date("2025-03-20"),
    credentialId: "GCP-PD-67890",
    credentialUrl: "https://cloud.google.com/certification",
  },
  {
    id: "3",
    name: "MongoDB Certified Developer",
    issuer: "MongoDB",
    issueDate: new Date("2022-11-10"),
    expiryDate: new Date("2025-11-10"),
    credentialId: "MDB-DEV-11111",
    credentialUrl: "https://university.mongodb.com/certification",
  },
  {
    id: "4",
    name: "Meta Front-End Developer Professional",
    issuer: "Meta (Coursera)",
    issueDate: new Date("2022-08-05"),
    expiryDate: null,
    credentialId: "META-FE-22222",
    credentialUrl: "https://coursera.org/verify",
  },
];

/**
 * -----------------------------------------------------------------------------
 * HELPER FUNCTIONS
 * -----------------------------------------------------------------------------
 */
function formatDateRange(start: Date, end: Date | null, current: boolean) {
  const startStr = start.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  if (current) return `${startStr} - Present`;
  if (!end) return startStr;
  const endStr = end.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${startStr} - ${endStr}`;
}

function calculateDuration(start: Date, end: Date | null) {
  const endDate = end || new Date();
  const months = (endDate.getFullYear() - start.getFullYear()) * 12 + (endDate.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years === 0) return `${remainingMonths} months`;
  if (remainingMonths === 0) return `${years} year${years > 1 ? "s" : ""}`;
  return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
}

export default function ExperiencePage() {
  // Calculate total experience
  const totalYears = WORK_EXPERIENCE.reduce((acc, exp) => {
    const endDate = exp.endDate || new Date();
    const months = (endDate.getFullYear() - exp.startDate.getFullYear()) * 12 +
      (endDate.getMonth() - exp.startDate.getMonth());
    return acc + months;
  }, 0);
  const yearsOfExperience = Math.floor(totalYears / 12);

  return (
    <>
      {/* Page Header */}
      <Section className="pt-24 lg:pt-32 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Career Journey
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h1>
          <p className="text-lg text-muted-foreground">
            {yearsOfExperience}+ years of experience building digital products and leading
            development teams. Here&apos;s my professional journey so far.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">{yearsOfExperience}+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">{WORK_EXPERIENCE.length}</p>
            <p className="text-sm text-muted-foreground">Companies</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">{CERTIFICATIONS.length}</p>
            <p className="text-sm text-muted-foreground">Certifications</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">30+</p>
            <p className="text-sm text-muted-foreground">Projects</p>
          </div>
        </div>
      </Section>

      {/* Work Experience */}
      <Section className="py-12">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, index) => (
            <Card key={exp.id} className="relative overflow-hidden">
              {exp.current && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded-bl-lg">
                  Current
                </div>
              )}
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building2 className="h-4 w-4" />
                      <Link
                        href={exp.companyUrl}
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        {exp.company}
                      </Link>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                    <Badge variant="outline" className="mt-1">
                      {exp.locationType.replace("_", "-").toLowerCase()}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section className="py-12">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu) => (
            <Card key={edu.id}>
              <CardHeader>
                <CardTitle className="text-lg">{edu.degree} in {edu.field}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDateRange(edu.startDate, edu.endDate, false)}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </span>
                </div>
                <Badge variant="outline" className="mb-4">GPA: {edu.gpa}</Badge>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section className="py-12">
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <Card key={cert.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span>
                        Issued: {cert.issueDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                      {cert.expiryDate && (
                        <span>
                          • Expires: {cert.expiryDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      )}
                    </div>
                  </div>
                  <Link href={cert.credentialUrl} target="_blank">
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-muted-foreground mb-6">
            Download my full resume or get in touch to discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/resume.pdf" target="_blank">Download Resume</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
