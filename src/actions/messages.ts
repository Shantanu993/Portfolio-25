/**
 * =============================================================================
 * MESSAGE SERVER ACTIONS
 * =============================================================================
 * Server actions for managing contact submissions and bookings in the admin dashboard.
 * =============================================================================
 */

"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { ContactStatus, BookingStatus } from "@prisma/client";

// TODO: Add authentication check before allowing these actions
// TODO: Add proper error handling and logging

export async function updateContactStatus(id: string, status: ContactStatus) {
  try {
    const contact = await prisma.contactSubmission.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/admin/messages");

    return { success: true, contact };
  } catch (error) {
    console.error("Error updating contact status:", error);
    return { success: false, error: "Failed to update contact status" };
  }
}

export async function deleteContact(id: string) {
  try {
    await prisma.contactSubmission.delete({
      where: { id },
    });

    revalidatePath("/admin/messages");

    return { success: true };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return { success: false, error: "Failed to delete contact submission" };
  }
}

export async function updateBookingStatus(id: string, status: BookingStatus) {
  try {
    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/admin/messages");

    return { success: true, booking };
  } catch (error) {
    console.error("Error updating booking status:", error);
    return { success: false, error: "Failed to update booking status" };
  }
}

export async function deleteBooking(id: string) {
  try {
    await prisma.booking.delete({
      where: { id },
    });

    revalidatePath("/admin/messages");

    return { success: true };
  } catch (error) {
    console.error("Error deleting booking:", error);
    return { success: false, error: "Failed to delete booking" };
  }
}

export async function markContactAsRead(id: string) {
  try {
    const contact = await prisma.contactSubmission.update({
      where: { id },
      data: { status: "READ" },
    });

    revalidatePath("/admin/messages");

    return { success: true, contact };
  } catch (error) {
    console.error("Error marking contact as read:", error);
    return { success: false, error: "Failed to mark as read" };
  }
}
