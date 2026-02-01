/**
 * =============================================================================
 * ARTICLES PAGE
 * =============================================================================
 * Displays technical articles aggregated from various sources.
 * TODO: Implement real API integration with Medium, Dev.to, Hashnode.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Calendar, Clock, Eye, Heart, BookOpen } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Articles",
  description: `Technical articles and tutorials written by ${siteConfig.name}.`,
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY ARTICLES DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with real data from your database or external APIs.
 * This includes articles from Medium, Dev.to, Hashnode, and your own blog.
 * -----------------------------------------------------------------------------
 */
const DUMMY_ARTICLES = [
  {
    id: "1",
    title: "Building Scalable APIs with Next.js 14 and Prisma",
    description:
      "Learn how to build robust, type-safe APIs using Next.js 14's App Router and Prisma ORM with MongoDB.",
    slug: "building-scalable-apis-nextjs-prisma",
    source: "MEDIUM" as const,
    sourceUrl: "https://medium.com/@yourusername/article-1",
    coverImage: "/images/articles/api-design.jpg",
    publishedAt: new Date("2024-02-15"),
    readTime: 8,
    views: 2450,
    likes: 156,
    tags: ["Next.js", "Prisma", "API Design", "TypeScript"],
    featured: true,
  },
  {
    id: "2",
    title: "Mastering Framer Motion: Advanced Animation Patterns",
    description:
      "Deep dive into Framer Motion's advanced features including shared layout animations, gestures, and performance optimization.",
    slug: "mastering-framer-motion-advanced-patterns",
    source: "DEVTO" as const,
    sourceUrl: "https://dev.to/yourusername/article-2",
    coverImage: "/images/articles/framer-motion.jpg",
    publishedAt: new Date("2024-01-28"),
    readTime: 12,
    views: 3820,
    likes: 234,
    tags: ["Framer Motion", "React", "Animations", "Performance"],
    featured: true,
  },
  {
    id: "3",
    title: "Type-Safe Full-Stack Development with tRPC",
    description:
      "Explore how tRPC enables end-to-end type safety in your full-stack TypeScript applications.",
    slug: "type-safe-fullstack-trpc",
    source: "HASHNODE" as const,
    sourceUrl: "https://hashnode.com/@yourusername/article-3",
    coverImage: "/images/articles/trpc.jpg",
    publishedAt: new Date("2024-01-10"),
    readTime: 10,
    views: 1890,
    likes: 98,
    tags: ["tRPC", "TypeScript", "Full-Stack", "Type Safety"],
    featured: false,
  },
  {
    id: "4",
    title: "Modern Authentication Patterns in Next.js",
    description:
      "Compare different authentication strategies including NextAuth.js, Clerk, and custom JWT implementations.",
    slug: "modern-authentication-nextjs",
    source: "OWN" as const,
    sourceUrl: null,
    coverImage: "/images/articles/auth.jpg",
    publishedAt: new Date("2023-12-20"),
    readTime: 15,
    views: 4200,
    likes: 312,
    tags: ["Authentication", "NextAuth", "Security", "JWT"],
    featured: true,
  },
  {
    id: "5",
    title: "CSS-in-JS vs Tailwind CSS: A Practical Comparison",
    description:
      "An in-depth comparison of styling approaches in modern React applications with real-world examples.",
    slug: "css-in-js-vs-tailwind",
    source: "DEVTO" as const,
    sourceUrl: "https://dev.to/yourusername/article-5",
    coverImage: "/images/articles/styling.jpg",
    publishedAt: new Date("2023-12-05"),
    readTime: 7,
    views: 5670,
    likes: 428,
    tags: ["CSS", "Tailwind", "Styled Components", "Design Systems"],
    featured: false,
  },
  {
    id: "6",
    title: "Optimizing React Performance: Beyond the Basics",
    description:
      "Advanced techniques for optimizing React applications including code splitting, memoization, and virtual scrolling.",
    slug: "optimizing-react-performance",
    source: "MEDIUM" as const,
    sourceUrl: "https://medium.com/@yourusername/article-6",
    coverImage: "/images/articles/performance.jpg",
    publishedAt: new Date("2023-11-18"),
    readTime: 14,
    views: 3100,
    likes: 189,
    tags: ["React", "Performance", "Optimization", "Web Vitals"],
    featured: false,
  },
];

/**
 * -----------------------------------------------------------------------------
 * SOURCE CONFIGURATION
 * -----------------------------------------------------------------------------
 */
const sourceConfig = {
  MEDIUM: { name: "Medium", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
  DEVTO: { name: "Dev.to", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
  HASHNODE: { name: "Hashnode", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  OWN: { name: "Blog", color: "bg-primary/10 text-primary" },
};

/**
 * -----------------------------------------------------------------------------
 * ARTICLE CARD COMPONENT
 * -----------------------------------------------------------------------------
 */
function ArticleCard({ article }: { article: (typeof DUMMY_ARTICLES)[0] }) {
  const sourceInfo = sourceConfig[article.source];

  return (
    <Card className="group h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Cover Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="h-12 w-12 text-primary/40" />
        </div>
        {/* Featured Badge */}
        {article.featured && (
          <Badge className="absolute top-4 left-4" variant="secondary">
            Featured
          </Badge>
        )}
        {/* Source Badge */}
        <Badge className={`absolute top-4 right-4 ${sourceInfo.color}`}>
          {sourceInfo.name}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {article.publishedAt.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {article.readTime} min read
          </span>
        </div>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {article.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {article.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{article.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {article.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              {article.likes.toLocaleString()}
            </span>
          </div>
          {article.sourceUrl ? (
            <Link href={article.sourceUrl} target="_blank">
              <Button variant="ghost" size="sm" className="gap-2">
                Read <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href={`/articles/${article.slug}`}>
              <Button variant="ghost" size="sm" className="gap-2">
                Read More
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ArticlesPage() {
  const featuredArticles = DUMMY_ARTICLES.filter((a) => a.featured);
  const otherArticles = DUMMY_ARTICLES.filter((a) => !a.featured);

  return (
    <>
      {/* Page Header */}
      <Section className="pt-24 lg:pt-32 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Technical Writing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Articles & Tutorials
          </h1>
          <p className="text-lg text-muted-foreground">
            Sharing knowledge through in-depth technical articles, tutorials, and insights
            from my development journey. Published across various platforms including
            Medium, Dev.to, and Hashnode.
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">25+</p>
            <p className="text-sm text-muted-foreground">Articles Published</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">50K+</p>
            <p className="text-sm text-muted-foreground">Total Views</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">1.5K+</p>
            <p className="text-sm text-muted-foreground">Total Reactions</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">4</p>
            <p className="text-sm text-muted-foreground">Platforms</p>
          </div>
        </div>
      </Section>

      {/* Featured Articles */}
      <Section className="py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Section>

      {/* All Articles */}
      <Section className="py-12">
        <h2 className="text-2xl font-bold mb-8">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="py-20">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="text-muted-foreground mb-6">
            Get notified when I publish new articles. No spam, unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </Section>
    </>
  );
}
