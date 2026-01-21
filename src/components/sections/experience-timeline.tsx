/**
 * =============================================================================
 * EXPERIENCE TIMELINE SECTION
 * =============================================================================
 * Displays work experience in a vertical timeline format.
 * =============================================================================
 */

"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { formatDate, formatDuration } from "@/lib/utils";
import type { Experience } from "@/types";

interface ExperienceTimelineProps {
  experiences?: Experience[];
  showAll?: boolean;
}

// DUMMY DATA: Replace with database fetch
const dummyExperiences: Partial<Experience>[] = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    companyUrl: "https://example.com",
    location: "San Francisco, CA",
    type: "WORK",
    employmentType: "FULL_TIME",
    description: "Leading development of core platform features and mentoring junior developers.",
    achievements: [
      "Led migration from monolithic to microservices architecture",
      "Reduced page load time by 40% through performance optimizations",
      "Mentored 5 junior developers, improving team velocity by 30%",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    startDate: new Date("2022-06-01"),
    endDate: null,
    isCurrent: true,
  },
  {
    id: "2",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    location: "Remote",
    type: "WORK",
    employmentType: "FULL_TIME",
    description: "Built and maintained multiple client-facing applications and internal tools.",
    achievements: [
      "Developed real-time collaboration features using WebSockets",
      "Integrated third-party APIs including Stripe, Twilio, and SendGrid",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Kubernetes"],
    startDate: new Date("2020-03-01"),
    endDate: new Date("2022-05-31"),
    isCurrent: false,
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    companyUrl: "https://example.com",
    location: "New York, NY",
    type: "WORK",
    employmentType: "FULL_TIME",
    description: "Created responsive web applications and landing pages for various clients.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Established component library reducing development time by 40%",
      "Achieved 98% client satisfaction rating",
    ],
    technologies: ["React", "Vue.js", "Sass", "Figma", "WordPress"],
    startDate: new Date("2018-07-01"),
    endDate: new Date("2020-02-28"),
    isCurrent: false,
  },
];

export function ExperienceTimeline({
  experiences = dummyExperiences as Experience[],
  showAll = false,
}: ExperienceTimelineProps) {
  const displayExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <Section className="bg-muted/30">
      <SectionHeader
        title="Work Experience"
        description="My professional journey and career highlights."
      />

      <div className="max-w-3xl mx-auto">
        <StaggerContainer className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {displayExperiences.map((experience, index) => (
            <StaggerItem key={experience.id}>
              <TimelineItem
                experience={experience}
                index={index}
                isLast={index === displayExperiences.length - 1}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

/**
 * Individual timeline item
 */
function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-start gap-6 pb-12 ${isLast ? "pb-0" : ""}`}>
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10"
      />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
          isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <Building2 className="h-4 w-4" />
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {experience.company}
                  </a>
                ) : (
                  <span>{experience.company}</span>
                )}
              </div>
            </div>
            {experience.isCurrent && (
              <Badge variant="success">Current</Badge>
            )}
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            {experience.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {experience.location}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(experience.startDate, { month: "short", year: "numeric" })} -{" "}
              {experience.isCurrent
                ? "Present"
                : formatDate(experience.endDate!, { month: "short", year: "numeric" })}
            </span>
            <span className="text-primary font-medium">
              {formatDuration(experience.startDate, experience.endDate)}
            </span>
          </div>

          {/* Description */}
          {experience.description && (
            <p className="text-muted-foreground text-sm mb-4">
              {experience.description}
            </p>
          )}

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <ul className="space-y-2 mb-4">
              {experience.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1.5">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
