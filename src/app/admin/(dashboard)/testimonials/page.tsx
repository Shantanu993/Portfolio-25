/**
 * =============================================================================
 * ADMIN TESTIMONIALS PAGE
 * =============================================================================
 * Manage client testimonials and reviews.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { Plus, Pencil, Trash2, Quote, Star, Eye, EyeOff } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Manage Testimonials",
  description: "Admin panel for managing client testimonials.",
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY TESTIMONIALS DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual database query using Prisma.
 * -----------------------------------------------------------------------------
 */
const DUMMY_TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    content: "Working with John was an absolute pleasure. He delivered our MVP ahead of schedule and the quality exceeded our expectations. Highly recommended for any startup looking to move fast!",
    rating: 5,
    featured: true,
    visible: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "FinanceApp",
    content: "Exceptional technical skills combined with great communication. John took our complex requirements and turned them into a beautiful, performant application.",
    rating: 5,
    featured: true,
    visible: true,
    createdAt: new Date("2024-02-10"),
  },
  {
    id: "3",
    name: "Emily Davis",
    role: "Founder",
    company: "DesignStudio",
    content: "John implemented our designs flawlessly. His attention to detail and understanding of modern UI/UX practices made the collaboration seamless.",
    rating: 5,
    featured: false,
    visible: true,
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "4",
    name: "Alex Thompson",
    role: "CTO",
    company: "DataCorp",
    content: "Great developer with solid understanding of best practices. Would definitely work with again.",
    rating: 4,
    featured: false,
    visible: false,
    createdAt: new Date("2024-01-05"),
  },
];

export default function AdminTestimonialsPage() {
  const visibleCount = DUMMY_TESTIMONIALS.filter((t) => t.visible).length;
  const featuredCount = DUMMY_TESTIMONIALS.filter((t) => t.featured).length;
  const avgRating = DUMMY_TESTIMONIALS.reduce((a, t) => a + t.rating, 0) / DUMMY_TESTIMONIALS.length;

  return (
    <Section>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-muted-foreground mt-1">
            Manage client testimonials and reviews
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/testimonials/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Testimonial
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{DUMMY_TESTIMONIALS.length}</p>
            <p className="text-sm text-muted-foreground">Total Testimonials</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-green-500">{visibleCount}</p>
            <p className="text-sm text-muted-foreground">Visible</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-primary">{featuredCount}</p>
            <p className="text-sm text-muted-foreground">Featured</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-1">
              <p className="text-2xl font-bold">{avgRating.toFixed(1)}</p>
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-sm text-muted-foreground">Avg Rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DUMMY_TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.id} className={!testimonial.visible ? "opacity-60" : ""}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {testimonial.featured && (
                    <Badge variant="secondary">Featured</Badge>
                  )}
                  {!testimonial.visible && (
                    <Badge variant="outline" className="gap-1">
                      <EyeOff className="h-3 w-3" />
                      Hidden
                    </Badge>
                  )}
                </div>
              </div>

              <Quote className="h-6 w-6 text-primary/20 mb-2" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-muted" />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm">
                    {testimonial.visible ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add testimonial tip */}
      <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-2">💡 Tips for Great Testimonials</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Request testimonials after successfully completing a project</li>
            <li>• Ask specific questions about what they liked most about working with you</li>
            <li>• Include the client&apos;s role and company for credibility</li>
            <li>• Feature your best 3-5 testimonials on the homepage</li>
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
}
