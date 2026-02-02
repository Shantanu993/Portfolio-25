/**
 * =============================================================================
 * SKILLS PAGE
 * =============================================================================
 * Displays technical skills organized by category with proficiency levels.
 * TODO: Replace dummy data with your actual skills from the database.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Palette,
  GitBranch,
  Shield,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical skills and expertise of ${siteConfig.name}.`,
};

/**
 * -----------------------------------------------------------------------------
 * SKILL CATEGORIES WITH ICONS
 * -----------------------------------------------------------------------------
 */
const categoryConfig: Record<string, { icon: typeof Code2; color: string }> = {
  FRONTEND: { icon: Code2, color: "text-blue-500" },
  BACKEND: { icon: Server, color: "text-green-500" },
  DATABASE: { icon: Database, color: "text-purple-500" },
  CLOUD: { icon: Cloud, color: "text-orange-500" },
  TOOLS: { icon: Wrench, color: "text-yellow-500" },
  DESIGN: { icon: Palette, color: "text-pink-500" },
  VERSION_CONTROL: { icon: GitBranch, color: "text-red-500" },
  SECURITY: { icon: Shield, color: "text-teal-500" },
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY SKILLS DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with your actual skills from the database.
 * Proficiency is 0-100 representing percentage.
 * -----------------------------------------------------------------------------
 */
const DUMMY_SKILLS = [
  // Frontend
  { id: "1", name: "React", category: "FRONTEND", proficiency: 95, yearsOfExperience: 5, featured: true },
  { id: "2", name: "Next.js", category: "FRONTEND", proficiency: 92, yearsOfExperience: 4, featured: true },
  { id: "3", name: "TypeScript", category: "FRONTEND", proficiency: 90, yearsOfExperience: 4, featured: true },
  { id: "4", name: "Tailwind CSS", category: "FRONTEND", proficiency: 95, yearsOfExperience: 3, featured: true },
  { id: "5", name: "Vue.js", category: "FRONTEND", proficiency: 75, yearsOfExperience: 2, featured: false },
  { id: "6", name: "Framer Motion", category: "FRONTEND", proficiency: 85, yearsOfExperience: 2, featured: false },
  { id: "7", name: "Redux/Zustand", category: "FRONTEND", proficiency: 88, yearsOfExperience: 4, featured: false },
  { id: "8", name: "HTML/CSS", category: "FRONTEND", proficiency: 98, yearsOfExperience: 6, featured: false },

  // Backend
  { id: "9", name: "Node.js", category: "BACKEND", proficiency: 90, yearsOfExperience: 5, featured: true },
  { id: "10", name: "Express.js", category: "BACKEND", proficiency: 88, yearsOfExperience: 5, featured: false },
  { id: "11", name: "Python", category: "BACKEND", proficiency: 80, yearsOfExperience: 4, featured: true },
  { id: "12", name: "GraphQL", category: "BACKEND", proficiency: 82, yearsOfExperience: 3, featured: false },
  { id: "13", name: "REST APIs", category: "BACKEND", proficiency: 95, yearsOfExperience: 6, featured: true },
  { id: "14", name: "tRPC", category: "BACKEND", proficiency: 78, yearsOfExperience: 2, featured: false },

  // Database
  { id: "15", name: "PostgreSQL", category: "DATABASE", proficiency: 88, yearsOfExperience: 5, featured: true },
  { id: "16", name: "MongoDB", category: "DATABASE", proficiency: 85, yearsOfExperience: 4, featured: true },
  { id: "17", name: "Redis", category: "DATABASE", proficiency: 75, yearsOfExperience: 3, featured: false },
  { id: "18", name: "Prisma", category: "DATABASE", proficiency: 90, yearsOfExperience: 3, featured: true },
  { id: "19", name: "MySQL", category: "DATABASE", proficiency: 82, yearsOfExperience: 5, featured: false },

  // Cloud & DevOps
  { id: "20", name: "AWS", category: "CLOUD", proficiency: 82, yearsOfExperience: 4, featured: true },
  { id: "21", name: "Docker", category: "CLOUD", proficiency: 85, yearsOfExperience: 4, featured: true },
  { id: "22", name: "Vercel", category: "CLOUD", proficiency: 92, yearsOfExperience: 3, featured: false },
  { id: "23", name: "CI/CD", category: "CLOUD", proficiency: 80, yearsOfExperience: 4, featured: false },
  { id: "24", name: "Kubernetes", category: "CLOUD", proficiency: 65, yearsOfExperience: 2, featured: false },

  // Tools
  { id: "25", name: "Git", category: "TOOLS", proficiency: 95, yearsOfExperience: 6, featured: true },
  { id: "26", name: "VS Code", category: "TOOLS", proficiency: 98, yearsOfExperience: 5, featured: false },
  { id: "27", name: "Jest/Vitest", category: "TOOLS", proficiency: 85, yearsOfExperience: 4, featured: false },
  { id: "28", name: "Webpack/Vite", category: "TOOLS", proficiency: 82, yearsOfExperience: 4, featured: false },

  // Design
  { id: "29", name: "Figma", category: "DESIGN", proficiency: 75, yearsOfExperience: 3, featured: false },
  { id: "30", name: "UI/UX Design", category: "DESIGN", proficiency: 70, yearsOfExperience: 3, featured: false },
  { id: "31", name: "Responsive Design", category: "DESIGN", proficiency: 95, yearsOfExperience: 6, featured: false },
];

/**
 * -----------------------------------------------------------------------------
 * SKILL BAR COMPONENT
 * -----------------------------------------------------------------------------
 */
function SkillBar({ skill }: { skill: (typeof DUMMY_SKILLS)[0] }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">
          {skill.proficiency}%
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
      <div className="text-xs text-muted-foreground">
        {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? "year" : "years"} of experience
      </div>
    </div>
  );
}

/**
 * -----------------------------------------------------------------------------
 * SKILL CARD COMPONENT
 * -----------------------------------------------------------------------------
 */
function SkillCard({ skill }: { skill: (typeof DUMMY_SKILLS)[0] }) {
  return (
    <div className="p-4 rounded-lg bg-card border hover:border-primary/50 hover:shadow-md transition-all group">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        {skill.featured && (
          <Badge variant="secondary" className="text-xs">
            Expert
          </Badge>
        )}
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  // Group skills by category
  const groupedSkills = DUMMY_SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof DUMMY_SKILLS>);

  const featuredSkills = DUMMY_SKILLS.filter((s) => s.featured);

  return (
    <>
      {/* Page Header */}
      <Section className="pt-24 lg:pt-32 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Technical Expertise
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my technical skills, tools, and technologies
            I work with to build modern web applications.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">{DUMMY_SKILLS.length}+</p>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">{Object.keys(groupedSkills).length}</p>
            <p className="text-sm text-muted-foreground">Categories</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">6+</p>
            <p className="text-sm text-muted-foreground">Years Coding</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">Always</p>
            <p className="text-sm text-muted-foreground">Learning</p>
          </div>
        </div>
      </Section>

      {/* Featured Skills */}
      <Section className="py-12">
        <h2 className="text-2xl font-bold mb-8">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSkills.map((skill) => (
            <Card key={skill.id} className="overflow-hidden">
              <CardContent className="p-6">
                <SkillBar skill={skill} />
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills by Category */}
      <Section className="py-12">
        <h2 className="text-2xl font-bold mb-8">Skills by Category</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, skills]) => {
            const config = categoryConfig[category] || { icon: Code2, color: "text-primary" };
            const Icon = config.icon;
            const categoryName = category.replace("_", " ");

            return (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${config.color}`} />
                    <span className="capitalize">{categoryName.toLowerCase()}</span>
                  </CardTitle>
                  <CardDescription>
                    {skills.length} {skills.length === 1 ? "skill" : "skills"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skills
                      .sort((a, b) => b.proficiency - a.proficiency)
                      .map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                      ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Skill Levels Legend */}
      <Section className="py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Proficiency Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-primary to-primary/70" />
                <span>Expert (90-100%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary/70" />
                <span>Advanced (75-89%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary/50" />
                <span>Intermediate (50-74%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary/30" />
                <span>Learning (&lt;50%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Currently Learning */}
      <Section className="py-12">
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-center">Currently Learning</CardTitle>
            <CardDescription className="text-center">
              Technologies I&apos;m actively exploring and improving
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {/* TODO: Replace with your currently learning technologies */}
              {["Rust", "WebAssembly", "AI/ML Integration", "Web3", "Svelte", "Deno"].map((tech) => (
                <Badge key={tech} variant="outline" className="px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let&apos;s discuss how my skills can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
