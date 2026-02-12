/**
 * =============================================================================
 * SETTINGS SERVER ACTIONS
 * =============================================================================
 * Server actions for managing site settings in the admin dashboard.
 * =============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// TODO: Add authentication check before allowing these actions
// TODO: Add proper error handling and logging

export async function getSiteSettings() {
  try {
    const settings = await prisma.siteSettings.findFirst();

    if (!settings) {
      // Create default settings if none exist
      const defaultSettings = await prisma.siteSettings.create({
        data: {
          siteName: "My Portfolio",
          siteDescription: "Full-stack developer portfolio",
          contactEmail: "contact@example.com",
          socialLinks: {},
          seoSettings: {},
          maintenanceMode: false,
        },
      });
      return { success: true, settings: defaultSettings };
    }

    return { success: true, settings };
  } catch (error) {
    console.error("Error getting site settings:", error);
    return { success: false, error: "Failed to get site settings" };
  }
}

export async function updateSiteSettings(data: {
  siteName?: string;
  siteDescription?: string;
  contactEmail?: string;
  phoneNumber?: string;
  location?: string;
  socialLinks?: Record<string, string>;
  seoSettings?: Record<string, string>;
  maintenanceMode?: boolean;
}) {
  try {
    const existing = await prisma.siteSettings.findFirst();

    if (!existing) {
      // Create if doesn't exist
      const settings = await prisma.siteSettings.create({
        data: {
          siteName: data.siteName || "My Portfolio",
          siteDescription: data.siteDescription || "",
          contactEmail: data.contactEmail || "",
          phoneNumber: data.phoneNumber,
          location: data.location,
          socialLinks: data.socialLinks || {},
          seoSettings: data.seoSettings || {},
          maintenanceMode: data.maintenanceMode ?? false,
        },
      });

      revalidatePath("/admin/settings");

      return { success: true, settings };
    }

    const settings = await prisma.siteSettings.update({
      where: { id: existing.id },
      data,
    });

    revalidatePath("/admin/settings");

    return { success: true, settings };
  } catch (error) {
    console.error("Error updating site settings:", error);
    return { success: false, error: "Failed to update site settings" };
  }
}

export async function toggleMaintenanceMode() {
  try {
    const settings = await prisma.siteSettings.findFirst();

    if (!settings) {
      return { success: false, error: "Settings not found" };
    }

    const updated = await prisma.siteSettings.update({
      where: { id: settings.id },
      data: { maintenanceMode: !settings.maintenanceMode },
    });

    revalidatePath("/admin/settings");

    return { success: true, settings: updated };
  } catch (error) {
    console.error("Error toggling maintenance mode:", error);
    return { success: false, error: "Failed to toggle maintenance mode" };
  }
}
