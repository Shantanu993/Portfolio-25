/**
 * =============================================================================
 * SERVICE SERVER ACTIONS
 * =============================================================================
 * Server actions for managing services in the admin dashboard.
 * =============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// TODO: Add authentication check before allowing these actions
// TODO: Add proper error handling and logging

export async function createService(data: {
  name: string;
  description: string;
  features: string[];
  price?: string;
  order?: number;
  active?: boolean;
}) {
  try {
    const service = await prisma.service.create({
      data: {
        ...data,
        order: data.order ?? 0,
        active: data.active ?? true,
      },
    });

    revalidatePath("/admin/services");
    revalidatePath("/services");

    return { success: true, service };
  } catch (error) {
    console.error("Error creating service:", error);
    return { success: false, error: "Failed to create service" };
  }
}

export async function updateService(
  id: string,
  data: {
    name?: string;
    description?: string;
    features?: string[];
    price?: string;
    order?: number;
    active?: boolean;
  }
) {
  try {
    const service = await prisma.service.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/services");
    revalidatePath("/services");

    return { success: true, service };
  } catch (error) {
    console.error("Error updating service:", error);
    return { success: false, error: "Failed to update service" };
  }
}

export async function deleteService(id: string) {
  try {
    await prisma.service.delete({
      where: { id },
    });

    revalidatePath("/admin/services");
    revalidatePath("/services");

    return { success: true };
  } catch (error) {
    console.error("Error deleting service:", error);
    return { success: false, error: "Failed to delete service" };
  }
}

export async function toggleServiceActive(id: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { id },
      select: { active: true },
    });

    if (!service) {
      return { success: false, error: "Service not found" };
    }

    const updated = await prisma.service.update({
      where: { id },
      data: { active: !service.active },
    });

    revalidatePath("/admin/services");
    revalidatePath("/services");

    return { success: true, service: updated };
  } catch (error) {
    console.error("Error toggling service active:", error);
    return { success: false, error: "Failed to toggle active status" };
  }
}
