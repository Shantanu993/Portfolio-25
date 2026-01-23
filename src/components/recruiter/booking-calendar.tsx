/**
 * =============================================================================
 * BOOKING CALENDAR COMPONENT
 * =============================================================================
 * Interactive calendar for booking 15-minute Google Meet appointments.
 * TODO: Integrate with actual calendar API (Google Calendar, Calendly, etc.)
 * =============================================================================
 */

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Video, Clock, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * -----------------------------------------------------------------------------
 * DUMMY AVAILABLE SLOTS
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual availability from your calendar API.
 * These slots should be fetched from Google Calendar or similar service.
 * -----------------------------------------------------------------------------
 */
const AVAILABLE_SLOTS = [
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

/**
 * -----------------------------------------------------------------------------
 * HELPER FUNCTIONS
 * -----------------------------------------------------------------------------
 */
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type BookingStep = "date" | "time" | "details" | "confirmation";

export function BookingCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
  const [currentYear, setCurrentYear] = React.useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [step, setStep] = React.useState<BookingStep>("date");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    role: "",
    notes: "",
  });

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", {
    month: "long",
  });

  // Generate days array
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Check if a date is available (weekday and not in the past)
  const isDateAvailable = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return dayOfWeek !== 0 && dayOfWeek !== 6 && !isPast;
  };

  // Navigation handlers
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Handle date selection
  const handleDateSelect = (day: number) => {
    if (!isDateAvailable(day)) return;
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setStep("time");
  };

  // Handle time selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call to create booking
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          ...formData,
        }),
      });

      // For demo purposes, always succeed
      setStep("confirmation");
    } catch (error) {
      console.error("Error creating booking:", error);
      // For demo, still show confirmation
      setStep("confirmation");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset booking
  const resetBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setStep("date");
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      notes: "",
    });
  };

  // Render confirmation step
  if (step === "confirmation") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
        <p className="text-muted-foreground mb-4">
          You&apos;ll receive a confirmation email with the Google Meet link shortly.
        </p>
        <div className="bg-secondary/50 rounded-lg p-4 mb-6 text-left">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{selectedDate && formatDate(selectedDate)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="font-medium">{selectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">15 minutes</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Platform:</span>
              <Badge variant="secondary" className="gap-1">
                <Video className="h-3 w-3" />
                Google Meet
              </Badge>
            </div>
          </div>
        </div>
        <Button onClick={resetBooking} variant="outline">
          Book Another Time
        </Button>
      </div>
    );
  }

  // Render details form step
  if (step === "details") {
    return (
      <div>
        <button
          onClick={() => setStep("time")}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to time selection
        </button>

        <div className="bg-secondary/50 rounded-lg p-3 mb-6">
          <div className="flex items-center gap-4 text-sm">
            <span>{selectedDate && formatDate(selectedDate)}</span>
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              {selectedTime}
            </Badge>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" required>Your Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Smith"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" required>Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Corp"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role Title</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="Senior Developer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Briefly describe what you'd like to discuss..."
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Scheduling..." : "Confirm Booking"}
          </Button>
        </form>
      </div>
    );
  }

  // Render time selection step
  if (step === "time") {
    return (
      <div>
        <button
          onClick={() => setStep("date")}
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to calendar
        </button>

        <div className="mb-6">
          <h4 className="font-medium mb-1">{selectedDate && formatDate(selectedDate)}</h4>
          <p className="text-sm text-muted-foreground">Select a time slot</p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {AVAILABLE_SLOTS.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              className="text-sm"
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </Button>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Video className="h-4 w-4" />
          <span>15 min · Google Meet</span>
        </div>
      </div>
    );
  }

  // Render calendar (date selection step)
  return (
    <div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h4 className="font-semibold">
          {monthName} {currentYear}
        </h4>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="aspect-square" />;
          }

          const isAvailable = isDateAvailable(day);
          const isSelected =
            selectedDate?.getDate() === day &&
            selectedDate?.getMonth() === currentMonth &&
            selectedDate?.getFullYear() === currentYear;
          const isToday =
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();

          return (
            <button
              key={index}
              onClick={() => handleDateSelect(day)}
              disabled={!isAvailable}
              className={cn(
                "aspect-square flex items-center justify-center rounded-lg text-sm transition-colors relative",
                isAvailable
                  ? "hover:bg-primary hover:text-primary-foreground cursor-pointer"
                  : "text-muted-foreground/50 cursor-not-allowed",
                isSelected && "bg-primary text-primary-foreground",
                isToday && !isSelected && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
            >
              {day}
              {isAvailable && !isSelected && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-muted rounded-full" />
          <span>Unavailable</span>
        </div>
      </div>

      {/* Timezone Note */}
      <p className="mt-4 text-xs text-muted-foreground text-center">
        Times shown in your local timezone
      </p>
    </div>
  );
}
