/**
 * =============================================================================
 * SECTION CONTAINER COMPONENT
 * =============================================================================
 * A reusable container for page sections with consistent spacing.
 * Use this to wrap major sections of pages.
 * =============================================================================
 */

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  container?: boolean;
  paddingY?: "none" | "sm" | "md" | "lg" | "xl";
}

const paddingYClasses = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

export function Section({
  as: Component = "section",
  container = true,
  paddingY = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(paddingYClasses[paddingY], className)}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
}

/**
 * Section header with title and optional description
 */
interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
