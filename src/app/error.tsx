/**
 * =============================================================================
 * ERROR COMPONENT
 * =============================================================================
 * Error boundary for handling runtime errors gracefully.
 * =============================================================================
 */

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="max-w-lg w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-destructive">
            Something went wrong!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            An unexpected error occurred. This has been logged and we'll look into it.
          </p>
          
          {process.env.NODE_ENV === "development" && (
            <details className="text-sm bg-muted p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold mb-2">
                Error Details
              </summary>
              <pre className="whitespace-pre-wrap text-xs overflow-auto">
                {error.message}
              </pre>
              {error.digest && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Digest: {error.digest}
                </p>
              )}
            </details>
          )}

          <div className="flex gap-4">
            <Button onClick={() => reset()}>Try again</Button>
            <Button variant="outline" onClick={() => (window.location.href = "/")}>
              Go home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
