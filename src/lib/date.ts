/**
 * =============================================================================
 * DATE UTILITIES
 * =============================================================================
 * Helper functions for date formatting and manipulation.
 * =============================================================================
 */

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format date to relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(date: Date | string): string {
  const d = new Date(date);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}

/**
 * Format date range (e.g., "Jan 2020 - Mar 2021" or "Jan 2020 - Present")
 */
export function formatDateRange(
  startDate: Date | string,
  endDate?: Date | string | null,
  current?: boolean
): string {
  const start = new Date(startDate);
  const startStr = start.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  if (current) return `${startStr} - Present`;

  if (!endDate) return startStr;

  const end = new Date(endDate);
  const endStr = end.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return `${startStr} - ${endStr}`;
}

/**
 * Calculate duration between two dates
 */
export function calculateDuration(
  startDate: Date | string,
  endDate?: Date | string | null
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (diffInMonths < 1) return "Less than a month";
  if (diffInMonths === 1) return "1 month";
  if (diffInMonths < 12) return `${diffInMonths} months`;

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (months === 0) return `${years} ${years === 1 ? "year" : "years"}`;

  return `${years} ${years === 1 ? "year" : "years"} ${months} ${
    months === 1 ? "month" : "months"
  }`;
}

/**
 * Check if a date is in the past
 */
export function isPast(date: Date | string): boolean {
  return new Date(date) < new Date();
}

/**
 * Check if a date is in the future
 */
export function isFuture(date: Date | string): boolean {
  return new Date(date) > new Date();
}

/**
 * Check if a date is today
 */
export function isToday(date: Date | string): boolean {
  const d = new Date(date);
  const today = new Date();
  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
}

/**
 * Get available time slots for booking
 */
export function getAvailableTimeSlots(
  date: Date,
  duration: number = 15, // in minutes
  startHour: number = 9,
  endHour: number = 17
): string[] {
  const slots: string[] = [];
  const selected = new Date(date);

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += duration) {
      const time = new Date(selected);
      time.setHours(hour, minute, 0, 0);

      // Only show future slots if it's today
      if (isToday(selected) && time < new Date()) {
        continue;
      }

      const timeStr = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      slots.push(timeStr);
    }
  }

  return slots;
}
