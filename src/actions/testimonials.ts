/**
 * =============================================================================
 * TESTIMONIAL SERVER ACTIONS
 * =============================================================================
 * Server actions for managing testimonials in the admin dashboard.
 * =============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// TODO: Add authentication check before allowing these actions
// TODO: Add proper error handling and logging

export async function createTestimonial(data: {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
  featured?: boolean;
  visible?: boolean;
}) {
  try {
    const testimonial = await prisma.testimonial.create({
      data: {
        ...data,
        featured: data.featured ?? false,
        visible: data.visible ?? true,
      },
    });

    revalidatePath("/admin/testimonials");
    revalidatePath("/services");

    return { success: true, testimonial };
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return { success: false, error: "Failed to create testimonial" };
  }
}

export async function updateTestimonial(
  id: string,
  data: {
    name?: string;
    role?: string;
    company?: string;
    content?: string;
    rating?: number;
    image?: string;
    featured?: boolean;
    visible?: boolean;
  }
) {
  try {
    const testimonial = await prisma.testimonial.update({
      where: { id },
      data,
    });

    revalidatePath("/admin/testimonials");
    revalidatePath("/services");

    return { success: true, testimonial };
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return { success: false, error: "Failed to update testimonial" };
  }
}

export async function deleteTestimonial(id: string) {
  try {
    await prisma.testimonial.delete({
      where: { id },
    });

    revalidatePath("/admin/testimonials");
    revalidatePath("/services");

    return { success: true };
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return { success: false, error: "Failed to delete testimonial" };
  }
}

export async function toggleTestimonialFeatured(id: string) {
  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { id },
      select: { featured: true },
    });

    if (!testimonial) {
      return { success: false, error: "Testimonial not found" };
    }

    const updated = await prisma.testimonial.update({
      where: { id },
      data: { featured: !testimonial.featured },
    });

    revalidatePath("/admin/testimonials");
    revalidatePath("/services");

    return { success: true, testimonial: updated };
  } catch (error) {
    console.error("Error toggling testimonial featured:", error);
    return { success: false, error: "Failed to toggle featured status" };
  }
}

export async function toggleTestimonialVisibility(id: string) {
  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { id },
      select: { visible: true },
    });

    if (!testimonial) {
      return { success: false, error: "Testimonial not found" };
    }

    const updated = await prisma.testimonial.update({
      where: { id },
      data: { visible: !testimonial.visible },
    });

    revalidatePath("/admin/testimonials");
    revalidatePath("/services");

    return { success: true, testimonial: updated };
  } catch (error) {
    console.error("Error toggling testimonial visibility:", error);
    return { success: false, error: "Failed to toggle visibility" };
  }
}
