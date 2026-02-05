/**
 * =============================================================================
 * ADMIN ARTICLES PAGE
 * =============================================================================
 * Lists all articles with CRUD operations and external source sync.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, RefreshCw, ExternalLink } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Manage Articles",
  description: "Admin panel for managing blog articles.",
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY ARTICLES DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual database query using Prisma.
 * -----------------------------------------------------------------------------
 */
const DUMMY_ARTICLES = [
  {
    id: "1",
    title: "Building Scalable APIs with Next.js 14 and Prisma",
    slug: "building-scalable-apis-nextjs-prisma",
    status: "PUBLISHED" as const,
    source: "MEDIUM" as const,
    sourceUrl: "https://medium.com/@username/article-1",
    views: 2450,
    likes: 156,
    publishedAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-20"),
  },
  {
    id: "2",
    title: "Mastering Framer Motion: Advanced Animation Patterns",
    slug: "mastering-framer-motion-advanced-patterns",
    status: "PUBLISHED" as const,
    source: "DEVTO" as const,
    sourceUrl: "https://dev.to/username/article-2",
    views: 3820,
    likes: 234,
    publishedAt: new Date("2024-01-28"),
    updatedAt: new Date("2024-02-15"),
  },
  {
    id: "3",
    title: "Type-Safe Full-Stack Development with tRPC",
    slug: "type-safe-fullstack-trpc",
    status: "DRAFT" as const,
    source: "OWN" as const,
    sourceUrl: null,
    views: 0,
    likes: 0,
    publishedAt: null,
    updatedAt: new Date("2024-02-22"),
  },
];

const statusColors = {
  PUBLISHED: "bg-green-500/10 text-green-600 dark:text-green-400",
  DRAFT: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  ARCHIVED: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
};

const sourceColors = {
  MEDIUM: "bg-green-500/10 text-green-600 dark:text-green-400",
  DEVTO: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  HASHNODE: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  OWN: "bg-primary/10 text-primary",
};

export default function AdminArticlesPage() {
  const publishedCount = DUMMY_ARTICLES.filter((a) => a.status === "PUBLISHED").length;
  const draftCount = DUMMY_ARTICLES.filter((a) => a.status === "DRAFT").length;
  const totalViews = DUMMY_ARTICLES.reduce((acc, a) => acc + a.views, 0);
  const totalLikes = DUMMY_ARTICLES.reduce((acc, a) => acc + a.likes, 0);

  return (
    <Section>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Articles</h1>
          <p className="text-muted-foreground mt-1">
            Manage your blog articles and sync from external platforms
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Sync External
          </Button>
          <Button asChild>
            <Link href="/admin/articles/new">
              <Plus className="mr-2 h-4 w-4" />
              New Article
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{DUMMY_ARTICLES.length}</p>
            <p className="text-sm text-muted-foreground">Total Articles</p>
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
            <p className="text-2xl font-bold text-blue-500">{totalViews.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Views</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-pink-500">{totalLikes}</p>
            <p className="text-sm text-muted-foreground">Total Likes</p>
          </CardContent>
        </Card>
      </div>

      {/* Platform Sync Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {["MEDIUM", "DEVTO", "HASHNODE"].map((platform) => (
          <Card key={platform} className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <Badge className={sourceColors[platform as keyof typeof sourceColors]}>
                  {platform === "DEVTO" ? "Dev.to" : platform.charAt(0) + platform.slice(1).toLowerCase()}
                </Badge>
                <p className="text-sm text-muted-foreground mt-1">
                  {DUMMY_ARTICLES.filter((a) => a.source === platform).length} articles synced
                </p>
              </div>
              <Button variant="ghost" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Articles List */}
      <Card>
        <CardHeader>
          <CardTitle>All Articles</CardTitle>
          <CardDescription>
            Click on an article to edit its details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {DUMMY_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold truncate">{article.title}</h3>
                    <Badge className={statusColors[article.status]} variant="secondary">
                      {article.status.toLowerCase()}
                    </Badge>
                    <Badge className={sourceColors[article.source]} variant="secondary">
                      {article.source === "DEVTO" ? "Dev.to" : article.source === "OWN" ? "Blog" : article.source.charAt(0) + article.source.slice(1).toLowerCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>{article.views.toLocaleString()} views</span>
                    <span>{article.likes} likes</span>
                    {article.publishedAt && (
                      <span>
                        Published {article.publishedAt.toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/articles/${article.slug}`} target="_blank">
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  {article.sourceUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={article.sourceUrl} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/articles/${article.id}/edit`}>
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
