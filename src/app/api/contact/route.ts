/**
 * =============================================================================
 * CONTACT API ROUTE
 * =============================================================================
 * Handles contact form submissions.
 * TODO: Add email notification integration (SendGrid, Resend, etc.)
 * =============================================================================
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        type: "GENERAL",
        status: "NEW",
      },
    });

    // TODO: Send email notification to yourself
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: 'your@email.com',
    //   subject: `New contact: ${validatedData.subject}`,
    //   html: `<p>From: ${validatedData.name} (${validatedData.email})</p><p>${validatedData.message}</p>`,
    // });

    // TODO: Send auto-reply to the sender
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: validatedData.email,
    //   subject: 'Thanks for reaching out!',
    //   html: '<p>I received your message and will get back to you soon.</p>',
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        id: submission.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);

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
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint. Use POST to submit a message." },
    { status: 200 }
  );
}
