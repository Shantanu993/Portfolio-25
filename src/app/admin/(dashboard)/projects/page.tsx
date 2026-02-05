/**
 * =============================================================================
 * ADMIN PROJECTS PAGE
 * =============================================================================
 * Lists all projects with CRUD operations.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, Github, ExternalLink, Star, GitFork } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Manage Projects",
  description: "Admin panel for managing portfolio projects.",
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY PROJECTS DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual database query using Prisma.
 * -----------------------------------------------------------------------------
 */
const DUMMY_PROJECTS = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    shortDescription: "A full-featured e-commerce platform with Next.js and Stripe integration.",
    status: "PUBLISHED" as const,
    featured: true,
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce.example.com",
    githubStars: 156,
    githubForks: 42,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    id: "2",
    title: "AI Chat Application",
    slug: "ai-chat-app",
    shortDescription: "Real-time chat with AI assistants powered by OpenAI.",
    status: "PUBLISHED" as const,
    featured: true,
    githubUrl: "https://github.com/username/ai-chat",
    liveUrl: "https://aichat.example.com",
    githubStars: 89,
    githubForks: 23,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-25"),
  },
  {
    id: "3",
    title: "Task Management System",
    slug: "task-manager",
    shortDescription: "Kanban-style task management with real-time collaboration.",
    status: "DRAFT" as const,
    featured: false,
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: null,
    githubStars: 45,
    githubForks: 12,
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-22"),
  },
];

const statusColors = {
  PUBLISHED: "bg-green-500/10 text-green-600 dark:text-green-400",
  DRAFT: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  ARCHIVED: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
};

export default function AdminProjectsPage() {
  const publishedCount = DUMMY_PROJECTS.filter((p) => p.status === "PUBLISHED").length;
  const draftCount = DUMMY_PROJECTS.filter((p) => p.status === "DRAFT").length;
  const featuredCount = DUMMY_PROJECTS.filter((p) => p.featured).length;

  return (
    <Section>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-1">
            Manage your portfolio projects
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link href="/api/github/projects" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Sync from GitHub
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/projects/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{DUMMY_PROJECTS.length}</p>
            <p className="text-sm text-muted-foreground">Total Projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-green-500">{publishedCount}</p>
            <p className="text-sm text-muted-foreground">Published</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-yellow-500">{draftCount}</p>
            <p className="text-sm text-muted-foreground">Drafts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-primary">{featuredCount}</p>
            <p className="text-sm text-muted-foreground">Featured</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <Card>
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
          <CardDescription>
            Click on a project to edit its details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {DUMMY_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold truncate">{project.title}</h3>
                    <Badge className={statusColors[project.status]} variant="secondary">
                      {project.status.toLowerCase()}
                    </Badge>
                    {project.featured && (
                      <Badge variant="outline" className="text-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {project.shortDescription}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {project.githubStars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {project.githubForks}
                    </span>
                    <span>
                      Updated {project.updatedAt.toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/projects/${project.slug}`} target="_blank">
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/projects/${project.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
