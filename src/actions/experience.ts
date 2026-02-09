/**
 * =============================================================================
 * EXPERIENCE SERVER ACTIONS
 * =============================================================================
 * Server actions for managing experience and certifications in the admin dashboard.
 * =============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { ExperienceType } from "@prisma/client";

// TODO: Add authentication check before allowing these actions
// TODO: Add proper error handling and logging

export async function createExperience(data: {
  title: string;
  company: string;
  type: ExperienceType;
  location?: string;
  description: string;
  technologies?: string[];
  startDate: Date;
  endDate?: Date;
  current?: boolean;
}) {
  try {
    const experience = await prisma.experience.create({
      data: {
        ...data,
        current: data.current ?? false,
      },
    });

    revalidatePath("/admin/experience");
    revalidatePath("/experience");

    return { success: true, experience };
  } catch (error) {
    console.error("Error creating experience:", error);
    return { success: false, error: "Failed to create experience" };
  }
}

export async function updateExperience(
  id: string,
  data: {
    title?: string;
    company?: string;
    type?: ExperienceType;
    location?: string;
    description?: string;
    technologies?: string[];
    startDate?: Date;
    endDate?: Date;
    current?: boolean;
  }
) {
  try {
    const experience = await prisma.experience.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/experience");
    revalidatePath("/experience");

    return { success: true, experience };
  } catch (error) {
    console.error("Error updating experience:", error);
    return { success: false, error: "Failed to update experience" };
  }
}

export async function deleteExperience(id: string) {
  try {
    await prisma.experience.delete({
      where: { id },
    });

    revalidatePath("/admin/experience");
    revalidatePath("/experience");

    return { success: true };
  } catch (error) {
    console.error("Error deleting experience:", error);
    return { success: false, error: "Failed to delete experience" };
  }
}

export async function createCertification(data: {
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
  credentialUrl?: string;
}) {
  try {
    const certification = await prisma.certification.create({
      data,
    });

    revalidatePath("/admin/experience");
    revalidatePath("/experience");

    return { success: true, certification };
  } catch (error) {
    console.error("Error creating certification:", error);
    return { success: false, error: "Failed to create certification" };
  }
}

export async function updateCertification(
  id: string,
  data: {
    name?: string;
    issuer?: string;
    issueDate?: Date;
    expiryDate?: Date;
    credentialId?: string;
    credentialUrl?: string;
  }
) {
  try {
    const certification = await prisma.certification.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/experience");
    revalidatePath("/experience");

    return { success: true, certification };
  } catch (error) {
    console.error("Error updating certification:", error);
    return { success: false, error: "Failed to update certification" };
  }
}

export async function deleteCertification(id: string) {
  try {
    await prisma.certification.delete({
      where: { id },
    });

    revalidatePath("/admin/experience");
    revalidatePath("/experience");

    return { success: true };
  } catch (error) {
    console.error("Error deleting certification:", error);
    return { success: false, error: "Failed to delete certification" };
  }
}
