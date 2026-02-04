/**
 * =============================================================================
 * CONSTANTS
 * =============================================================================
 * Application-wide constants and configuration values.
 * =============================================================================
 */

/**
 * Skill Categories
 */
export const SKILL_CATEGORIES = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Database",
  CLOUD: "Cloud & DevOps",
  TOOLS: "Tools & Workflow",
  DESIGN: "Design",
  OTHER: "Other",
} as const;

/**
 * Project Statuses
 */
export const PROJECT_STATUS = {
  DRAFT: "Draft",
  PUBLISHED: "Published",
} as const;

/**
 * Article Sources
 */
export const ARTICLE_SOURCES = {
  OWN: "Own Blog",
  MEDIUM: "Medium",
  DEVTO: "Dev.to",
  HASHNODE: "Hashnode",
} as const;

/**
 * Experience Types
 */
export const EXPERIENCE_TYPES = {
  WORK: "Work Experience",
  EDUCATION: "Education",
  FREELANCE: "Freelance",
} as const;

/**
 * Contact Statuses
 */
export const CONTACT_STATUS = {
  NEW: "New",
  READ: "Read",
  REPLIED: "Replied",
  ARCHIVED: "Archived",
} as const;

/**
 * Booking Statuses
 */
export const BOOKING_STATUS = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
} as const;

/**
 * Social Media Platforms
 */
export const SOCIAL_PLATFORMS = [
  { name: "GitHub", key: "github", icon: "github" },
  { name: "LinkedIn", key: "linkedin", icon: "linkedin" },
  { name: "Twitter", key: "twitter", icon: "twitter" },
  { name: "Instagram", key: "instagram", icon: "instagram" },
  { name: "YouTube", key: "youtube", icon: "youtube" },
  { name: "Medium", key: "medium", icon: "medium" },
  { name: "Dev.to", key: "devto", icon: "devto" },
  { name: "Hashnode", key: "hashnode", icon: "hashnode" },
] as const;

/**
 * Booking Time Slots
 */
export const BOOKING_CONFIG = {
  DURATION: 15, // minutes
  START_HOUR: 9, // 9 AM
  END_HOUR: 17, // 5 PM
  DAYS_IN_ADVANCE: 30, // How many days ahead users can book
  BUFFER_TIME: 5, // minutes between bookings
} as const;

/**
 * Pagination
 */
export const PAGINATION = {
  PROJECTS_PER_PAGE: 9,
  ARTICLES_PER_PAGE: 12,
  ADMIN_ITEMS_PER_PAGE: 20,
} as const;

/**
 * Form Limits
 */
export const FORM_LIMITS = {
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 255,
  MAX_SUBJECT_LENGTH: 200,
  MAX_MESSAGE_LENGTH: 2000,
  MAX_DESCRIPTION_LENGTH: 500,
  MAX_LONG_DESCRIPTION_LENGTH: 5000,
} as const;

/**
 * File Upload Limits
 */
export const UPLOAD_LIMITS = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif"],
} as const;

/**
 * Animation Delays
 */
export const ANIMATION_DELAYS = {
  STAGGER: 0.1,
  PAGE_TRANSITION: 0.3,
  HOVER: 0.2,
} as const;

/**
 * Routes
 */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  ARTICLES: "/articles",
  EXPERIENCE: "/experience",
  SKILLS: "/skills",
  CONTACT: "/contact",
  RECRUITER: "/recruiter",
  SERVICES: "/services",
  ADMIN: {
    LOGIN: "/admin/login",
    DASHBOARD: "/admin/dashboard",
    PROJECTS: "/admin/projects",
    ARTICLES: "/admin/articles",
    SKILLS: "/admin/skills",
    EXPERIENCE: "/admin/experience",
    MESSAGES: "/admin/messages",
    SETTINGS: "/admin/settings",
    SERVICES: "/admin/services",
    TESTIMONIALS: "/admin/testimonials",
  },
} as const;

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  CONTACT: "/api/contact",
  BOOKINGS: "/api/bookings",
  GITHUB_PROJECTS: "/api/github/projects",
} as const;

/**
 * Feature Flags
 */
export const FEATURES = {
  ENABLE_ANALYTICS: true,
  ENABLE_NEWSLETTER: true,
  ENABLE_COMMENTS: false,
  ENABLE_DARK_MODE: true,
  ENABLE_PWA: false,
} as const;
