/**
 * =============================================================================
 * BOOKINGS API ROUTE
 * =============================================================================
 * Handles booking/appointment creation for the recruiter page.
 * TODO: Integrate with Google Calendar API for automatic event creation.
 * =============================================================================
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

// Validation schema
const bookingSchema = z.object({
  date: z.string().or(z.date()),
  time: z.string(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  role: z.string().optional(),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = bookingSchema.parse(body);

    // Parse the date and time into a proper Date object
    const dateStr = typeof validatedData.date === "string" 
      ? validatedData.date 
      : validatedData.date.toISOString().split("T")[0];
    
    // Convert time string (e.g., "09:00 AM") to 24-hour format
    const timeParts = validatedData.time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    let hours = parseInt(timeParts?.[1] || "0");
    const minutes = parseInt(timeParts?.[2] || "0");
    const period = timeParts?.[3]?.toUpperCase();
    
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    
    const scheduledTime = new Date(`${dateStr}T${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`);

    // Save booking to database
    const booking = await prisma.booking.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || null,
        role: validatedData.role || null,
        notes: validatedData.notes || null,
        scheduledAt: scheduledTime,
        duration: 15, // 15-minute call
        status: "PENDING",
        meetingType: "GOOGLE_MEET",
        // meetingLink will be set when confirmed
      },
    });

    // TODO: Create Google Calendar event
    // Example with Google Calendar API:
    // const event = await calendar.events.insert({
    //   calendarId: 'primary',
    //   conferenceDataVersion: 1,
    //   requestBody: {
    //     summary: `Intro Call: ${validatedData.name}`,
    //     description: `Company: ${validatedData.company}\nRole: ${validatedData.role}\nNotes: ${validatedData.notes}`,
    //     start: { dateTime: scheduledTime.toISOString() },
    //     end: { dateTime: new Date(scheduledTime.getTime() + 15 * 60000).toISOString() },
    //     attendees: [{ email: validatedData.email }],
    //     conferenceData: {
    //       createRequest: { requestId: booking.id }
    //     }
    //   },
    // });
    
    // Update booking with meeting link
    // await prisma.booking.update({
    //   where: { id: booking.id },
    //   data: { meetingLink: event.conferenceData.entryPoints[0].uri }
    // });

    // TODO: Send confirmation email
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: validatedData.email,
    //   subject: 'Booking Confirmed',
    //   html: `<p>Your call is scheduled for ${scheduledTime.toLocaleString()}</p>`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully",
        id: booking.id,
        scheduledAt: scheduledTime,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create booking. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/bookings - Fetch available time slots
 * TODO: Integrate with Google Calendar to get real availability
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
      return NextResponse.json(
        { message: "Date parameter required" },
        { status: 400 }
      );
    }

    // TODO: Fetch busy times from Google Calendar
    // const busyTimes = await calendar.freebusy.query({...});

    // For now, return dummy available slots
    // In production, these would be calculated based on your calendar availability
    const availableSlots = [
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
    ];

    return NextResponse.json({
      date,
      slots: availableSlots,
    });
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json(
      { message: "Failed to fetch availability" },
      { status: 500 }
    );
  }
}
