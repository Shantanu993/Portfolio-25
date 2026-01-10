# 🚀 Modern Developer Portfolio

A highly modern, dynamic, full-stack personal developer portfolio website built with Next.js 15, featuring a beautiful UI, dark/light mode, animations, and a complete admin CMS.

## ✨ Features

### Public Pages
- **Home** - Hero section with animated elements, featured projects, skills showcase, experience timeline, and CTA
- **About** - Personal story, achievements, and journey
- **Projects** - Portfolio with filtering, GitHub stats integration, and detailed project pages
- **Articles** - Technical blog with articles aggregated from Medium, Dev.to, and Hashnode
- **Experience** - Work history, education, and certifications in a timeline format
- **Skills** - Comprehensive skills display organized by category with proficiency levels
- **Contact** - Contact form with validation and email integration
- **Recruiter** - Special page for recruiters with calendar booking for Google Meet appointments
- **Services** - Freelance services with pricing, process, and testimonials

### Admin Dashboard
- Full CMS-like functionality for managing all content
- Projects, Articles, Skills, Experience management
- Contact form submissions viewer
- Booking/appointment management
- Site settings and configuration
- Protected routes with NextAuth authentication

### Technical Features
- ⚡ **Next.js 15** with App Router and Server Components
- 🎨 **Tailwind CSS v4** with custom pastel color palette
- 🌙 **Dark/Light Mode** with next-themes
- 🎬 **Framer Motion** animations and page transitions
- 🔐 **NextAuth.js v5** for authentication
- 🗃️ **Prisma ORM** with MongoDB
- 📝 **React Hook Form** + Zod validation
- 🎯 **TypeScript** throughout
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with metadata API

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | Custom (ShadCN-style) |
| Animations | Framer Motion |
| Authentication | NextAuth.js v5 |
| Database | MongoDB |
| ORM | Prisma |
| Form Handling | React Hook Form + Zod |
| State Management | Zustand |
| Icons | Lucide React |
| Theme | next-themes |

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm
- MongoDB database (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

   Required environment variables:
   ```env
   # Database
   DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/portfolio"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-super-secret-key-here"
   ADMIN_EMAIL="admin@example.com"
   ADMIN_PASSWORD="your-secure-password"
   ```

4. **Set up the database**
   ```bash
   # Push the schema to your database
   npm run db:push

   # Seed with dummy data (optional)
   npm run db:seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

### Admin Access

After seeding the database, you can access the admin panel at `/admin/login`:

- **Email:** admin@example.com
- **Password:** admin123

⚠️ **Important:** Change these credentials in production!

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── articles/          # Articles page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── recruiter/         # Recruiter page with booking
│   ├── services/          # Services page
│   ├── skills/            # Skills page
│   └── globals.css        # Global styles
├── components/
│   ├── admin/             # Admin-specific components
│   ├── forms/             # Form components
│   ├── layout/            # Layout components (navbar, footer)
│   ├── providers/         # Context providers
│   ├── sections/          # Page section components
│   ├── recruiter/         # Recruiter page components
│   └── ui/                # Reusable UI components
├── config/                # Site configuration
├── lib/                   # Utility functions and libraries
└── types/                 # TypeScript type definitions
prisma/
├── schema.prisma          # Database schema
└── seed.ts                # Database seed script
```

## 🎨 Customization

### Personal Information

Update your personal information in these key files:

1. **`src/config/site.ts`** - Site metadata and social links
2. **`prisma/seed.ts`** - Initial database seed data
3. **`.env.local`** - Environment variables

All pages contain clearly marked dummy data with TODO comments for easy customization.

### Styling

The color palette is defined in `src/app/globals.css`. The default uses a beautiful pastel theme.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables
4. Deploy!

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
