/**
 * =============================================================================
 * NOT FOUND COMPONENT
 * =============================================================================
 * Custom 404 page for handling non-existent routes.
 * =============================================================================
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full text-center">
        <CardContent className="py-16 px-8">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Message */}
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Actions */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              You might be interested in:
            </p>
            <div className="flex gap-4 justify-center flex-wrap text-sm">
              <Link href="/about" className="text-primary hover:underline">
                About Me
              </Link>
              <Link href="/articles" className="text-primary hover:underline">
                Blog Articles
              </Link>
              <Link href="/experience" className="text-primary hover:underline">
                Experience
              </Link>
              <Link href="/skills" className="text-primary hover:underline">
                Skills
              </Link>
              <Link href="/services" className="text-primary hover:underline">
                Services
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
