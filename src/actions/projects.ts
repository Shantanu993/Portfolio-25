/**
 * =============================================================================
 * PROJECT SERVER ACTIONS
 * =============================================================================
 * Server actions for managing projects in the admin dashboard.
 * =============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { ProjectStatus } from "@prisma/client";

// TODO: Add authentication check before allowing these actions
// TODO: Add proper error handling and logging

export async function createProject(data: {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  featured?: boolean;
  order?: number;
}) {
  try {
    const project = await prisma.project.create({
      data: {
        ...data,
        order: data.order ?? 0,
        featured: data.featured ?? false,
      },
    });

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");

    return { success: true, project };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, error: "Failed to create project" };
  }
}

export async function updateProject(
  id: string,
  data: {
    title?: string;
    description?: string;
    longDescription?: string;
    technologies?: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
    status?: ProjectStatus;
    featured?: boolean;
    order?: number;
  }
) {
  try {
    const project = await prisma.project.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");

    return { success: true, project };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error: "Failed to update project" };
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    });

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, error: "Failed to delete project" };
  }
}

export async function toggleProjectFeatured(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      select: { featured: true },
    });

    if (!project) {
      return { success: false, error: "Project not found" };
    }

    const updated = await prisma.project.update({
      where: { id },
      data: { featured: !project.featured },
    });

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    revalidatePath("/");

    return { success: true, project: updated };
  } catch (error) {
    console.error("Error toggling project featured:", error);
    return { success: false, error: "Failed to toggle featured status" };
  }
}
