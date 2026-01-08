/**
 * =============================================================================
 * TYPESCRIPT TYPE DEFINITIONS
 * =============================================================================
 * Central location for all TypeScript types and interfaces.
 * Keep all types here for easy maintenance and type safety.
 * =============================================================================
 */

// =============================================================================
// DATABASE MODEL TYPES (Extended from Prisma)
// =============================================================================

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string | null;
  thumbnail?: string | null;
  images: string[];
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured: boolean;
  order: number;
  status: ContentStatus;
  githubId?: string | null;
  stars?: number | null;
  forks?: number | null;
  lastGithubSync?: Date | null;
  category?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  coverImage?: string | null;
  author?: string | null;
  source: ArticleSource;
  externalId?: string | null;
  externalUrl?: string | null;
  tags: string[];
  category?: string | null;
  featured: boolean;
  status: ContentStatus;
  views: number;
  likes?: number | null;
  readingTime?: number | null;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  slug: string;
  icon?: string | null;
  category: string;
  proficiency: number;
  yearsOfExp?: number | null;
  featured: boolean;
  order: number;
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo?: string | null;
  companyUrl?: string | null;
  location?: string | null;
  type: ExperienceType;
  employmentType?: EmploymentType | null;
  description?: string | null;
  achievements: string[];
  technologies: string[];
  startDate: Date;
  endDate?: Date | null;
  isCurrent: boolean;
  order: number;
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  icon?: string | null;
  image?: string | null;
  features: string[];
  startingPrice?: number | null;
  priceUnit?: string | null;
  featured: boolean;
  order: number;
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string | null;
  company?: string | null;
  avatar?: string | null;
  content: string;
  rating?: number | null;
  projectId?: string | null;
  featured: boolean;
  order: number;
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string | null;
  credentialId?: string | null;
  credentialUrl?: string | null;
  issueDate: Date;
  expiryDate?: Date | null;
  description?: string | null;
  featured: boolean;
  order: number;
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface SiteSettings {
  id: string;
  ownerName: string;
  ownerTitle: string;
  ownerEmail: string;
  ownerBio?: string | null;
  ownerShortBio?: string | null;
  ownerAvatar?: string | null;
  ownerResume?: string | null;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  twitterUrl?: string | null;
  youtubeUrl?: string | null;
  instagramUrl?: string | null;
  dribbbleUrl?: string | null;
  behanceUrl?: string | null;
  mediumUrl?: string | null;
  devtoUrl?: string | null;
  hashnodeUrl?: string | null;
  siteName: string;
  siteDescription?: string | null;
  siteKeywords: string[];
  siteUrl?: string | null;
  enableBlog: boolean;
  enableProjects: boolean;
  enableServices: boolean;
  enableRecruiter: boolean;
  enableContact: boolean;
  syncGithub: boolean;
  syncMedium: boolean;
  syncDevto: boolean;
  syncHashnode: boolean;
  enableBooking: boolean;
  meetingDuration: number;
  availableSlots?: AvailableSlots | null;
  googleAnalyticsId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  type: ContactType;
  status: ContactStatus;
  notes?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  date: Date;
  startTime: string;
  endTime: string;
  timezone: string;
  purpose?: string | null;
  meetingLink?: string | null;
  status: BookingStatus;
  notes?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// =============================================================================
// ENUM TYPES
// =============================================================================

export type ContentStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
export type ArticleSource = "LOCAL" | "MEDIUM" | "DEVTO" | "HASHNODE" | "RSS";
export type ExperienceType = "WORK" | "EDUCATION" | "FREELANCE" | "VOLUNTEER";
export type EmploymentType = "FULL_TIME" | "PART_TIME" | "CONTRACT" | "FREELANCE" | "INTERNSHIP";
export type ContactType = "GENERAL" | "JOB_INQUIRY" | "FREELANCE_PROJECT" | "COLLABORATION" | "OTHER";
export type ContactStatus = "UNREAD" | "READ" | "REPLIED" | "ARCHIVED";
export type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
export type Role = "ADMIN" | "SUPER_ADMIN";

// =============================================================================
// API RESPONSE TYPES
// =============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// =============================================================================
// GITHUB API TYPES
// =============================================================================

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  pushed_at: string;
  created_at: string;
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

// =============================================================================
// CALENDAR/BOOKING TYPES
// =============================================================================

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface AvailableSlots {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
  sunday: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  date: Date;
  time: string;
  purpose?: string;
  timezone: string;
}

// =============================================================================
// CONTACT FORM TYPES
// =============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  type?: ContactType;
}

// =============================================================================
// FORM STATE TYPES
// =============================================================================

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

// =============================================================================
// NAVIGATION TYPES
// =============================================================================

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// =============================================================================
// THEME TYPES
// =============================================================================

export type Theme = "light" | "dark" | "system";
export type ColorScheme = "default" | "pastel" | "vibrant";
