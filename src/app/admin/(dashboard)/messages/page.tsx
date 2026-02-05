/**
 * =============================================================================
 * ADMIN MESSAGES PAGE
 * =============================================================================
 * View and manage contact form submissions and bookings.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { Mail, Calendar, Eye, Trash2, Check, Archive, Clock, CheckCircle, XCircle } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Messages & Bookings",
  description: "Admin panel for managing contact submissions and bookings.",
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY MESSAGES DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual database queries.
 * -----------------------------------------------------------------------------
 */
const DUMMY_MESSAGES = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@techstartup.com",
    subject: "Interested in Full-Stack Development Services",
    message: "Hi, I came across your portfolio and I'm impressed with your work. We're looking for a developer to help build our new SaaS platform...",
    status: "NEW" as const,
    type: "GENERAL" as const,
    createdAt: new Date("2024-02-25T10:30:00"),
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@enterprise.com",
    subject: "Job Opportunity - Senior Developer Role",
    message: "Hello, I'm a recruiter at Enterprise Corp and we have an exciting opportunity that matches your profile...",
    status: "READ" as const,
    type: "JOB" as const,
    createdAt: new Date("2024-02-24T15:45:00"),
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@designstudio.co",
    subject: "Collaboration Request",
    message: "Hi there! I'm a UI/UX designer and I love your development work. Would you be interested in collaborating on some projects?",
    status: "REPLIED" as const,
    type: "COLLABORATION" as const,
    createdAt: new Date("2024-02-23T09:15:00"),
  },
];

const DUMMY_BOOKINGS = [
  {
    id: "1",
    name: "Jennifer Lopez",
    email: "j.lopez@recruiter.com",
    company: "TechTalent Inc",
    scheduledAt: new Date("2024-02-28T14:00:00"),
    duration: 15,
    status: "CONFIRMED" as const,
    meetingLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: "2",
    name: "David Kim",
    email: "d.kim@startup.io",
    company: "InnovateTech",
    scheduledAt: new Date("2024-02-27T10:30:00"),
    duration: 15,
    status: "PENDING" as const,
    meetingLink: null,
  },
  {
    id: "3",
    name: "Amanda White",
    email: "a.white@bigcorp.com",
    company: "BigCorp Solutions",
    scheduledAt: new Date("2024-02-26T15:00:00"),
    duration: 15,
    status: "COMPLETED" as const,
    meetingLink: "https://meet.google.com/xyz-uvwx-yz",
  },
];

const messageStatusColors = {
  NEW: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  READ: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
  REPLIED: "bg-green-500/10 text-green-600 dark:text-green-400",
  ARCHIVED: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
};

const bookingStatusColors = {
  PENDING: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  CONFIRMED: "bg-green-500/10 text-green-600 dark:text-green-400",
  COMPLETED: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  CANCELLED: "bg-red-500/10 text-red-600 dark:text-red-400",
};

const bookingStatusIcons = {
  PENDING: Clock,
  CONFIRMED: CheckCircle,
  COMPLETED: Check,
  CANCELLED: XCircle,
};

export default function AdminMessagesPage() {
  const newMessages = DUMMY_MESSAGES.filter((m) => m.status === "NEW").length;
  const pendingBookings = DUMMY_BOOKINGS.filter((b) => b.status === "PENDING").length;
  const upcomingBookings = DUMMY_BOOKINGS.filter(
    (b) => b.status === "CONFIRMED" && b.scheduledAt > new Date()
  ).length;

  return (
    <Section>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Messages & Bookings</h1>
          <p className="text-muted-foreground mt-1">
            Manage contact submissions and scheduled calls
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{DUMMY_MESSAGES.length}</p>
            <p className="text-sm text-muted-foreground">Total Messages</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-blue-500">{newMessages}</p>
            <p className="text-sm text-muted-foreground">Unread</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{DUMMY_BOOKINGS.length}</p>
            <p className="text-sm text-muted-foreground">Total Bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-green-500">{upcomingBookings}</p>
            <p className="text-sm text-muted-foreground">Upcoming Calls</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Messages */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Recent Messages
                {newMessages > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {newMessages} new
                  </Badge>
                )}
              </CardTitle>
            </div>
            <CardDescription>Contact form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {DUMMY_MESSAGES.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 border rounded-lg hover:bg-secondary/50 transition-colors ${
                    message.status === "NEW" ? "border-l-4 border-l-blue-500" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {message.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{message.name}</span>
                        <Badge className={messageStatusColors[message.status]} variant="secondary">
                          {message.status.toLowerCase()}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium truncate">{message.subject}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                        {message.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {message.createdAt.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                    <Button variant="ghost" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="mr-2 h-4 w-4" />
                      Reply
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Archive className="mr-2 h-4 w-4" />
                      Archive
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive ml-auto">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bookings */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Scheduled Calls
                {pendingBookings > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {pendingBookings} pending
                  </Badge>
                )}
              </CardTitle>
            </div>
            <CardDescription>Booked appointments via recruiter page</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {DUMMY_BOOKINGS.map((booking) => {
                const StatusIcon = bookingStatusIcons[booking.status];
                const isPast = booking.scheduledAt < new Date();
                
                return (
                  <div
                    key={booking.id}
                    className={`p-4 border rounded-lg hover:bg-secondary/50 transition-colors ${
                      booking.status === "PENDING" ? "border-l-4 border-l-yellow-500" : ""
                    } ${isPast && booking.status !== "COMPLETED" ? "opacity-60" : ""}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {booking.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <span className="font-medium block">{booking.name}</span>
                          <span className="text-sm text-muted-foreground">{booking.company}</span>
                        </div>
                      </div>
                      <Badge className={bookingStatusColors[booking.status]} variant="secondary">
                        <StatusIcon className="mr-1 h-3 w-3" />
                        {booking.status.toLowerCase()}
                      </Badge>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {booking.scheduledAt.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {booking.scheduledAt.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </span>
                        <Badge variant="outline">{booking.duration} min</Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {booking.status === "PENDING" && (
                        <Button variant="default" size="sm">
                          <Check className="mr-2 h-4 w-4" />
                          Confirm
                        </Button>
                      )}
                      {booking.status === "CONFIRMED" && booking.meetingLink && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={booking.meetingLink} target="_blank">
                            Join Meet
                          </Link>
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`mailto:${booking.email}`}>
                          <Mail className="mr-2 h-4 w-4" />
                          Email
                        </Link>
                      </Button>
                      {booking.status === "PENDING" && (
                        <Button variant="ghost" size="sm" className="text-destructive ml-auto">
                          <XCircle className="mr-2 h-4 w-4" />
                          Decline
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
