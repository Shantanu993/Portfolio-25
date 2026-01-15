/**
 * =============================================================================
 * THEME PROVIDER
 * =============================================================================
 * Wraps the application with next-themes ThemeProvider for dark/light mode.
 * Supports system preference and manual theme switching.
 * =============================================================================
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
