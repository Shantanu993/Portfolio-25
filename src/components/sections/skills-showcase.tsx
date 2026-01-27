/**
 * =============================================================================
 * SKILLS SHOWCASE SECTION
 * =============================================================================
 * Displays skills organized by category with visual proficiency indicators.
 * =============================================================================
 */

"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Palette,
  Wrench,
} from "lucide-react";

import { Section, SectionHeader } from "@/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import type { Skill } from "@/types";

interface SkillsShowcaseProps {
  skills?: Record<string, Skill[]>;
}

// DUMMY DATA: Replace with database fetch
const dummySkills: Record<string, Partial<Skill>[]> = {
  Frontend: [
    { name: "React", proficiency: 95, icon: "react" },
    { name: "Next.js", proficiency: 92, icon: "nextjs" },
    { name: "TypeScript", proficiency: 90, icon: "typescript" },
    { name: "Tailwind CSS", proficiency: 95, icon: "tailwind" },
    { name: "Vue.js", proficiency: 75, icon: "vue" },
  ],
  Backend: [
    { name: "Node.js", proficiency: 90, icon: "nodejs" },
    { name: "Python", proficiency: 85, icon: "python" },
    { name: "GraphQL", proficiency: 80, icon: "graphql" },
    { name: "REST APIs", proficiency: 95, icon: "api" },
    { name: "Express.js", proficiency: 88, icon: "express" },
  ],
  Database: [
    { name: "PostgreSQL", proficiency: 88, icon: "postgresql" },
    { name: "MongoDB", proficiency: 85, icon: "mongodb" },
    { name: "Redis", proficiency: 75, icon: "redis" },
    { name: "Prisma", proficiency: 90, icon: "prisma" },
  ],
  DevOps: [
    { name: "Docker", proficiency: 82, icon: "docker" },
    { name: "AWS", proficiency: 78, icon: "aws" },
    { name: "CI/CD", proficiency: 85, icon: "cicd" },
    { name: "Vercel", proficiency: 92, icon: "vercel" },
  ],
};

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  DevOps: <Cloud className="h-5 w-5" />,
  Design: <Palette className="h-5 w-5" />,
  Tools: <Wrench className="h-5 w-5" />,
};

export function SkillsShowcase({ skills = dummySkills as Record<string, Skill[]> }: SkillsShowcaseProps) {
  const categories = Object.keys(skills);

  return (
    <Section>
      <SectionHeader
        title="Skills & Technologies"
        description="The tools and technologies I use to bring ideas to life."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <StaggerItem key={category}>
            <SkillCategory
              name={category}
              icon={categoryIcons[category] || <Code2 className="h-5 w-5" />}
              skills={skills[category]}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

/**
 * Skill category card
 */
function SkillCategory({
  name,
  icon,
  skills,
}: {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

/**
 * Individual skill progress bar
 */
function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
