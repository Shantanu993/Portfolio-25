/**
 * =============================================================================
 * FEATURED PROJECTS SECTION
 * =============================================================================
 * Displays featured projects on the homepage.
 * Projects are fetched from the database or API.
 * =============================================================================
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, ExternalLink, Star, GitFork } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";
import type { Project } from "@/types";

interface FeaturedProjectsProps {
  projects?: Project[];
}

// DUMMY DATA: Replace with database fetch
const dummyProjects: Partial<Project>[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description: "A full-stack e-commerce solution with real-time inventory, Stripe payments, and admin dashboard.",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stars: 128,
    forks: 32,
    featured: true,
  },
  {
    id: "2",
    title: "AI Content Generator",
    slug: "ai-content-generator",
    description: "An AI-powered content generation tool using GPT-4 for blogs, social media, and marketing copy.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    technologies: ["React", "OpenAI API", "Node.js", "MongoDB", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stars: 256,
    forks: 48,
    featured: true,
  },
  {
    id: "3",
    title: "Real-Time Collaboration Tool",
    slug: "collaboration-tool",
    description: "A Notion-like workspace with real-time collaboration, rich text editing, and team management.",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tiptap", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    stars: 512,
    forks: 89,
    featured: true,
  },
];

export function FeaturedProjects({ projects = dummyProjects as Project[] }: FeaturedProjectsProps) {
  return (
    <Section className="bg-muted/30">
      <SectionHeader
        title="Featured Projects"
        description="A selection of my recent work. Each project represents a unique challenge and solution."
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.slice(0, 3).map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link href="/projects" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}

/**
 * Individual project card component
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full group">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/50">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View live site"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>

        <CardContent className="p-6">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies && project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Stats */}
          {(project.stars || project.forks) && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {project.stars && (
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {project.stars}
                </span>
              )}
              {project.forks && (
                <span className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  {project.forks}
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
