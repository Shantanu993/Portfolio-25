/**
 * =============================================================================
 * PRISMA CLIENT SINGLETON
 * =============================================================================
 * This file ensures a single Prisma client instance is used across the app.
 * In development, it's stored in global to prevent multiple instances.
 * =============================================================================
 */

import { PrismaClient } from "@prisma/client";

// Declare global type for Prisma client
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

/**
 * Prisma client instance
 * Uses singleton pattern to prevent multiple connections in development
 */
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

// In development, store client in global to prevent hot-reload issues
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
