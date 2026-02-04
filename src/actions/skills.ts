/**
 * =============================================================================
 * SKILL SERVER ACTIONS
 * =============================================================================
 * Server actions for managing skills in the admin dashboard.
 * =============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { SkillCategory } from "@prisma/client";

// TODO: Add authentication check before allowing these actions
// TODO: Add proper error handling and logging

export async function createSkill(data: {
  name: string;
  category: SkillCategory;
  proficiency: number;
  icon?: string;
  order?: number;
}) {
  try {
    const skill = await prisma.skill.create({
      data: {
        ...data,
        order: data.order ?? 0,
      },
    });

    revalidatePath("/admin/skills");
    revalidatePath("/skills");

    return { success: true, skill };
  } catch (error) {
    console.error("Error creating skill:", error);
    return { success: false, error: "Failed to create skill" };
  }
}

export async function updateSkill(
  id: string,
  data: {
    name?: string;
    category?: SkillCategory;
    proficiency?: number;
    icon?: string;
    order?: number;
  }
) {
  try {
    const skill = await prisma.skill.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/skills");
    revalidatePath("/skills");

    return { success: true, skill };
  } catch (error) {
    console.error("Error updating skill:", error);
    return { success: false, error: "Failed to update skill" };
  }
}

export async function deleteSkill(id: string) {
  try {
    await prisma.skill.delete({
      where: { id },
    });

    revalidatePath("/admin/skills");
    revalidatePath("/skills");

    return { success: true };
  } catch (error) {
    console.error("Error deleting skill:", error);
    return { success: false, error: "Failed to delete skill" };
  }
}

export async function reorderSkills(skills: { id: string; order: number }[]) {
  try {
    await Promise.all(
      skills.map((skill) =>
        prisma.skill.update({
          where: { id: skill.id },
          data: { order: skill.order },
        })
      )
    );

    revalidatePath("/admin/skills");
    revalidatePath("/skills");

    return { success: true };
  } catch (error) {
    console.error("Error reordering skills:", error);
    return { success: false, error: "Failed to reorder skills" };
  }
}
