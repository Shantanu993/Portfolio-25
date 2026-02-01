/**
 * =============================================================================
 * PROJECTS PAGE
 * =============================================================================
 * Displays all portfolio projects with filtering capabilities.
 * Projects are fetched from database and GitHub.
 * =============================================================================
 */

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Star, GitFork, Filter } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web applications, open-source projects, and experiments.",
};

// DUMMY DATA: Replace with database fetch
const projects: Partial<Project>[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description: "A full-stack e-commerce solution with real-time inventory management, Stripe payments, and comprehensive admin dashboard.",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Web App",
    stars: 128,
    forks: 32,
    featured: true,
  },
  {
    id: "2",
    title: "AI Content Generator",
    slug: "ai-content-generator",
    description: "An AI-powered content generation tool using GPT-4 for creating blog posts, social media content, and marketing copy.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    technologies: ["React", "OpenAI API", "Node.js", "MongoDB", "Redis", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "AI/ML",
    stars: 256,
    forks: 48,
    featured: true,
  },
  {
    id: "3",
    title: "Real-Time Collaboration Tool",
    slug: "collaboration-tool",
    description: "A Notion-like workspace with real-time collaboration, rich text editing, and team management features.",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tiptap", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Web App",
    stars: 512,
    forks: 89,
    featured: true,
  },
  {
    id: "4",
    title: "DevOps Dashboard",
    slug: "devops-dashboard",
    description: "A comprehensive DevOps monitoring dashboard with real-time metrics, alerts, and deployment management.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["React", "D3.js", "Node.js", "Kubernetes", "Prometheus"],
    githubUrl: "https://github.com",
    category: "DevOps",
    stars: 89,
    forks: 23,
    featured: false,
  },
  {
    id: "5",
    title: "Mobile Fitness App",
    slug: "fitness-app",
    description: "A React Native fitness tracking app with workout plans, progress tracking, and social features.",
    thumbnail: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Mobile",
    stars: 156,
    forks: 34,
    featured: false,
  },
  {
    id: "6",
    title: "Open Source CLI Tool",
    slug: "cli-tool",
    description: "A powerful command-line tool for automating development workflows and project scaffolding.",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    technologies: ["Node.js", "TypeScript", "Commander.js", "Chalk"],
    githubUrl: "https://github.com",
    category: "CLI",
    stars: 423,
    forks: 67,
    featured: false,
  },
];

const categories = ["All", "Web App", "AI/ML", "Mobile", "DevOps", "CLI"];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <Section>
        <SectionHeader
          title="My Projects"
          description="A collection of projects I've worked on, from full-stack web applications to open-source tools."
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project as Project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more? Check out my GitHub profile for all my projects.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </Section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
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

        {/* Category Badge */}
        {project.category && (
          <Badge className="absolute top-3 left-3">{project.category}</Badge>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            Featured
          </Badge>
        )}

        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="View live site"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
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
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {project.stars !== undefined && (
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {project.stars}
            </span>
          )}
          {project.forks !== undefined && (
            <span className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {project.forks}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
