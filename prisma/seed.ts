/**
 * =============================================================================
 * DATABASE SEED SCRIPT
 * =============================================================================
 * Populates the database with initial dummy data.
 * Run with: npx prisma db seed
 * 
 * TODO: Customize this data with your actual information.
 * =============================================================================
 */

import { PrismaClient, ContentStatus, ArticleSource, ExperienceType, EmploymentType, ContactType, ContactStatus, BookingStatus, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // =========================================================================
  // SEED ADMIN USER
  // =========================================================================
  console.log("Creating admin user...");
  
  const hashedPassword = await bcrypt.hash("admin123", 12);
  
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "Admin User",
      password: hashedPassword,
      role: Role.ADMIN,
      image: null,
    },
  });

  console.log(`✓ Admin user created: ${adminUser.email}`);

  // =========================================================================
  // SEED PROJECTS
  // =========================================================================
  console.log("Creating projects...");

  const projects = [
    {
      title: "E-Commerce Platform",
      slug: "ecommerce-platform",
      shortDescription: "A full-featured e-commerce platform with Next.js and Stripe integration.",
      fullDescription: `
        A comprehensive e-commerce solution built with modern technologies.
        
        ## Features
        - Product catalog with categories and search
        - Shopping cart and wishlist
        - Secure checkout with Stripe
        - User authentication and profiles
        - Order management and tracking
        - Admin dashboard for inventory management
        
        ## Tech Stack
        Next.js 14, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Stripe, NextAuth.js
      `,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
      category: "WEB_APP",
      featured: true,
      status: ContentStatus.PUBLISHED,
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce.example.com",
      githubStars: 156,
      githubForks: 42,
    },
    {
      title: "AI Chat Application",
      slug: "ai-chat-app",
      shortDescription: "Real-time chat with AI assistants powered by OpenAI.",
      fullDescription: `
        An intelligent chat application leveraging OpenAI's GPT models.
        
        ## Features
        - Real-time messaging
        - Multiple AI personality modes
        - Conversation history
        - Code syntax highlighting
        - Markdown support
      `,
      technologies: ["React", "Node.js", "OpenAI API", "Socket.io", "MongoDB"],
      category: "WEB_APP",
      featured: true,
      status: ContentStatus.PUBLISHED,
      githubUrl: "https://github.com/yourusername/ai-chat",
      liveUrl: "https://aichat.example.com",
      githubStars: 89,
      githubForks: 23,
    },
    {
      title: "Task Management System",
      slug: "task-manager",
      shortDescription: "Kanban-style task management with real-time collaboration.",
      fullDescription: "A Trello-like task management application with drag-and-drop functionality.",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL", "WebSocket"],
      category: "WEB_APP",
      featured: false,
      status: ContentStatus.PUBLISHED,
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: null,
      githubStars: 45,
      githubForks: 12,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  console.log(`✓ Created ${projects.length} projects`);

  // =========================================================================
  // SEED SKILLS
  // =========================================================================
  console.log("Creating skills...");

  const skills = [
    { name: "React", category: "FRONTEND", proficiency: 95, yearsOfExperience: 5, featured: true, order: 1 },
    { name: "Next.js", category: "FRONTEND", proficiency: 92, yearsOfExperience: 4, featured: true, order: 2 },
    { name: "TypeScript", category: "FRONTEND", proficiency: 90, yearsOfExperience: 4, featured: true, order: 3 },
    { name: "Tailwind CSS", category: "FRONTEND", proficiency: 95, yearsOfExperience: 3, featured: true, order: 4 },
    { name: "Node.js", category: "BACKEND", proficiency: 90, yearsOfExperience: 5, featured: true, order: 5 },
    { name: "Python", category: "BACKEND", proficiency: 80, yearsOfExperience: 4, featured: true, order: 6 },
    { name: "PostgreSQL", category: "DATABASE", proficiency: 88, yearsOfExperience: 5, featured: true, order: 7 },
    { name: "MongoDB", category: "DATABASE", proficiency: 85, yearsOfExperience: 4, featured: true, order: 8 },
    { name: "AWS", category: "CLOUD", proficiency: 82, yearsOfExperience: 4, featured: true, order: 9 },
    { name: "Docker", category: "CLOUD", proficiency: 85, yearsOfExperience: 4, featured: true, order: 10 },
    { name: "Git", category: "TOOLS", proficiency: 95, yearsOfExperience: 6, featured: false, order: 11 },
    { name: "Figma", category: "DESIGN", proficiency: 75, yearsOfExperience: 3, featured: false, order: 12 },
  ];

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: skill,
      create: skill,
    });
  }

  console.log(`✓ Created ${skills.length} skills`);

  // =========================================================================
  // SEED EXPERIENCE
  // =========================================================================
  console.log("Creating experience entries...");

  const experiences = [
    {
      company: "TechCorp Innovation Labs",
      role: "Senior Full Stack Developer",
      type: ExperienceType.WORK,
      employmentType: EmploymentType.FULL_TIME,
      location: "San Francisco, CA",
      locationType: "HYBRID",
      startDate: new Date("2023-01-15"),
      endDate: null,
      current: true,
      description: "Leading development of enterprise-scale applications using Next.js, TypeScript, and cloud-native technologies.",
      achievements: [
        "Reduced page load times by 60% through strategic performance optimizations",
        "Led migration from legacy PHP system to modern Next.js architecture",
        "Implemented CI/CD pipelines reducing deployment time by 75%",
      ],
      technologies: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Redis", "Docker"],
      companyUrl: "https://techcorp.example.com",
      order: 1,
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      type: ExperienceType.WORK,
      employmentType: EmploymentType.FULL_TIME,
      location: "Austin, TX",
      locationType: "REMOTE",
      startDate: new Date("2021-06-01"),
      endDate: new Date("2022-12-31"),
      current: false,
      description: "Built and maintained core product features for a B2B SaaS platform.",
      achievements: [
        "Developed real-time collaboration features used by 10,000+ users",
        "Built comprehensive API documentation reducing onboarding time by 50%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
      companyUrl: "https://startupxyz.example.com",
      order: 2,
    },
    {
      company: "University of Technology",
      role: "Master of Science in Computer Science",
      type: ExperienceType.EDUCATION,
      employmentType: null,
      location: "Boston, MA",
      locationType: null,
      startDate: new Date("2017-09-01"),
      endDate: new Date("2019-05-31"),
      current: false,
      description: "Focus on distributed systems and machine learning.",
      achievements: [
        "Thesis: Machine Learning Applications in Web Performance Optimization",
        "Dean's List - All semesters",
      ],
      technologies: [],
      companyUrl: null,
      order: 3,
    },
  ];

  for (const exp of experiences) {
    await prisma.experience.create({
      data: exp,
    });
  }

  console.log(`✓ Created ${experiences.length} experience entries`);

  // =========================================================================
  // SEED SERVICES
  // =========================================================================
  console.log("Creating services...");

  const services = [
    {
      name: "Full Stack Web Development",
      description: "End-to-end web application development using modern technologies.",
      icon: "code",
      features: [
        "Custom web applications",
        "API development & integration",
        "Database design & optimization",
        "Authentication & authorization",
      ],
      startingPrice: 5000,
      priceUnit: "project",
      popular: true,
      order: 1,
    },
    {
      name: "MVP Development",
      description: "Rapidly build and launch your minimum viable product.",
      icon: "rocket",
      features: [
        "Rapid prototyping",
        "Core feature development",
        "User authentication",
        "Deployment & hosting",
      ],
      startingPrice: 8000,
      priceUnit: "project",
      popular: false,
      order: 2,
    },
    {
      name: "Technical Consulting",
      description: "Expert advice on architecture and technology choices.",
      icon: "zap",
      features: [
        "Architecture review",
        "Code audit & review",
        "Tech stack recommendations",
        "Performance analysis",
      ],
      startingPrice: 200,
      priceUnit: "hour",
      popular: false,
      order: 3,
    },
  ];

  for (const service of services) {
    await prisma.service.create({
      data: service,
    });
  }

  console.log(`✓ Created ${services.length} services`);

  // =========================================================================
  // SEED CERTIFICATIONS
  // =========================================================================
  console.log("Creating certifications...");

  const certifications = [
    {
      name: "AWS Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      issueDate: new Date("2023-06-15"),
      expiryDate: new Date("2026-06-15"),
      credentialId: "AWS-SAP-12345",
      credentialUrl: "https://aws.amazon.com/verification",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      issueDate: new Date("2023-03-20"),
      expiryDate: new Date("2025-03-20"),
      credentialId: "GCP-PD-67890",
      credentialUrl: "https://cloud.google.com/certification",
    },
  ];

  for (const cert of certifications) {
    await prisma.certification.create({
      data: cert,
    });
  }

  console.log(`✓ Created ${certifications.length} certifications`);

  // =========================================================================
  // SEED SITE SETTINGS
  // =========================================================================
  console.log("Creating site settings...");

  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      siteName: "John Doe | Developer Portfolio",
      siteDescription: "Senior Full Stack Developer specializing in Next.js, React, and Node.js",
      ownerName: "John Doe",
      ownerTitle: "Senior Full Stack Developer",
      ownerEmail: "hello@example.com",
      ownerBio: "Passionate developer building modern web applications.",
      ownerAvatar: null,
      socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
      },
      seoKeywords: ["developer", "portfolio", "next.js", "react", "full stack"],
      googleAnalyticsId: null,
      showNewsletter: true,
      showBooking: true,
      maintenanceMode: false,
    },
  });

  console.log("✓ Site settings created");

  console.log("\n🎉 Database seed completed successfully!");
  console.log("\n📋 Summary:");
  console.log(`   - 1 Admin user (email: admin@example.com, password: admin123)`);
  console.log(`   - ${projects.length} Projects`);
  console.log(`   - ${skills.length} Skills`);
  console.log(`   - ${experiences.length} Experience entries`);
  console.log(`   - ${services.length} Services`);
  console.log(`   - ${certifications.length} Certifications`);
  console.log(`   - Site settings configured`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
