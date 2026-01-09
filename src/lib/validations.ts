/**
 * =============================================================================
 * VALIDATION SCHEMAS
 * =============================================================================
 * Zod validation schemas for forms and API endpoints.
 * =============================================================================
 */

import { z } from "zod";

/**
 * Contact Form Schema
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Booking Schema
 */
export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  date: z.date(),
  time: z.string(),
  message: z.string().optional(),
});

export type BookingData = z.infer<typeof bookingSchema>;

/**
 * Login Schema
 */
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginData = z.infer<typeof loginSchema>;

/**
 * Project Schema
 */
export const projectSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  longDescription: z.string().optional(),
  technologies: z.array(z.string()).min(1, "Add at least one technology"),
  image: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  githubUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  liveUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  featured: z.boolean().default(false),
  order: z.number().default(0),
});

export type ProjectFormData = z.infer<typeof projectSchema>;

/**
 * Article Schema
 */
export const articleSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().optional(),
  coverImage: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  tags: z.array(z.string()),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  source: z.enum(["OWN", "MEDIUM", "DEVTO", "HASHNODE"]),
  externalUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  readTime: z.number().default(5),
  publishedAt: z.date().optional(),
});

export type ArticleFormData = z.infer<typeof articleSchema>;

/**
 * Skill Schema
 */
export const skillSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  category: z.enum([
    "FRONTEND",
    "BACKEND",
    "DATABASE",
    "CLOUD",
    "TOOLS",
    "DESIGN",
    "OTHER",
  ]),
  proficiency: z.number().min(0).max(100),
  icon: z.string().optional(),
  order: z.number().default(0),
});

export type SkillFormData = z.infer<typeof skillSchema>;

/**
 * Experience Schema
 */
export const experienceSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  type: z.enum(["WORK", "EDUCATION", "FREELANCE"]),
  location: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  technologies: z.array(z.string()).optional(),
  startDate: z.date(),
  endDate: z.date().optional(),
  current: z.boolean().default(false),
});

export type ExperienceFormData = z.infer<typeof experienceSchema>;

/**
 * Service Schema
 */
export const serviceSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  features: z.array(z.string()).min(1, "Add at least one feature"),
  price: z.string().optional(),
  order: z.number().default(0),
  active: z.boolean().default(true),
});

export type ServiceFormData = z.infer<typeof serviceSchema>;

/**
 * Testimonial Schema
 */
export const testimonialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  company: z.string().optional(),
  content: z.string().min(10, "Content must be at least 10 characters"),
  rating: z.number().min(1).max(5),
  image: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  featured: z.boolean().default(false),
  visible: z.boolean().default(true),
});

export type TestimonialFormData = z.infer<typeof testimonialSchema>;

/**
 * Site Settings Schema
 */
export const siteSettingsSchema = z.object({
  siteName: z.string().min(2, "Site name must be at least 2 characters"),
  siteDescription: z.string().min(10, "Description must be at least 10 characters"),
  contactEmail: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  location: z.string().optional(),
  socialLinks: z.record(z.string()).optional(),
  seoSettings: z.record(z.string()).optional(),
  maintenanceMode: z.boolean().default(false),
});

export type SiteSettingsFormData = z.infer<typeof siteSettingsSchema>;
