/**
 * =============================================================================
 * SERVICES PAGE
 * =============================================================================
 * Displays freelance services with pricing, process, and testimonials.
 * Designed for potential clients looking to hire for projects.
 * TODO: Replace dummy data with your actual services and pricing.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Palette,
  Rocket,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Clock,
  Shield,
  HeartHandshake,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Freelance development services offered by ${siteConfig.name}.`,
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY SERVICES DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with your actual services and pricing.
 * -----------------------------------------------------------------------------
 */
const SERVICES = [
  {
    id: "1",
    name: "Full Stack Web Development",
    description: "End-to-end web application development using modern technologies like Next.js, React, and Node.js.",
    icon: Code,
    features: [
      "Custom web applications",
      "API development & integration",
      "Database design & optimization",
      "Authentication & authorization",
      "Performance optimization",
      "Responsive design",
    ],
    startingPrice: 5000,
    priceUnit: "project",
    popular: true,
  },
  {
    id: "2",
    name: "UI/UX Design Implementation",
    description: "Transform your Figma or design files into pixel-perfect, interactive web experiences.",
    icon: Palette,
    features: [
      "Design to code conversion",
      "Interactive animations",
      "Responsive implementation",
      "Component library creation",
      "Dark/light mode support",
      "Accessibility compliance",
    ],
    startingPrice: 2500,
    priceUnit: "project",
    popular: false,
  },
  {
    id: "3",
    name: "MVP Development",
    description: "Rapidly build and launch your minimum viable product to validate your startup idea.",
    icon: Rocket,
    features: [
      "Rapid prototyping",
      "Core feature development",
      "User authentication",
      "Database setup",
      "Deployment & hosting",
      "Post-launch support",
    ],
    startingPrice: 8000,
    priceUnit: "project",
    popular: false,
  },
  {
    id: "4",
    name: "Technical Consulting",
    description: "Expert advice on architecture, technology choices, and development best practices.",
    icon: Zap,
    features: [
      "Architecture review",
      "Code audit & review",
      "Tech stack recommendations",
      "Performance analysis",
      "Security assessment",
      "Team mentoring",
    ],
    startingPrice: 200,
    priceUnit: "hour",
    popular: false,
  },
];

/**
 * -----------------------------------------------------------------------------
 * PROCESS STEPS
 * -----------------------------------------------------------------------------
 */
const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We discuss your project requirements, goals, timeline, and budget to ensure we're a good fit.",
    duration: "30-60 min",
  },
  {
    step: 2,
    title: "Proposal & Quote",
    description: "I provide a detailed proposal outlining scope, timeline, deliverables, and pricing.",
    duration: "2-3 days",
  },
  {
    step: 3,
    title: "Development",
    description: "Regular updates, milestone reviews, and iterative development with your feedback.",
    duration: "Varies",
  },
  {
    step: 4,
    title: "Launch & Support",
    description: "Deployment, testing, documentation, and post-launch support to ensure smooth operation.",
    duration: "1-2 weeks",
  },
];

/**
 * -----------------------------------------------------------------------------
 * DUMMY TESTIMONIALS
 * -----------------------------------------------------------------------------
 * TODO: Replace with real client testimonials
 * -----------------------------------------------------------------------------
 */
const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Working with John was an absolute pleasure. He delivered our MVP ahead of schedule and the quality exceeded our expectations. Highly recommended for any startup looking to move fast!",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager, FinanceApp",
    content: "Exceptional technical skills combined with great communication. John took our complex requirements and turned them into a beautiful, performant application.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: "3",
    name: "Emily Davis",
    role: "Founder, DesignStudio",
    content: "John implemented our designs flawlessly. His attention to detail and understanding of modern UI/UX practices made the collaboration seamless.",
    rating: 5,
    avatar: "ED",
  },
];

/**
 * -----------------------------------------------------------------------------
 * WHY WORK WITH ME
 * -----------------------------------------------------------------------------
 */
const VALUE_PROPS = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "I respect deadlines and deliver on time, every time.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Clean, tested, and documented code that stands the test of time.",
  },
  {
    icon: HeartHandshake,
    title: "Clear Communication",
    description: "Regular updates and transparent communication throughout the project.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <Section className="pt-24 lg:pt-32 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Freelance Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            I help startups, businesses, and entrepreneurs bring their digital ideas to life
            with modern, scalable, and performant web applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">30+</p>
            <p className="text-sm text-muted-foreground">Projects Delivered</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">6+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card border">
            <p className="text-3xl font-bold text-primary">48h</p>
            <p className="text-sm text-muted-foreground">Response Time</p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-16">
        <h2 className="text-2xl font-bold text-center mb-4">Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From full-stack development to technical consulting, I offer a range of services
          to help bring your vision to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.id} className={`relative overflow-hidden ${service.popular ? "border-primary" : ""}`}>
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-1">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t pt-6">
                <div>
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p className="text-2xl font-bold">
                    ${service.startingPrice.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground">
                      /{service.priceUnit}
                    </span>
                  </p>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="py-16 bg-secondary/30">
        <h2 className="text-2xl font-bold text-center mb-4">How I Work</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A streamlined process designed to deliver exceptional results on time and within budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="relative">
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
              )}
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-16">
        <h2 className="text-2xl font-bold text-center mb-4">What Clients Say</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don&apos;t just take my word for it - hear from some of my satisfied clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Work With Me */}
      <Section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <prop.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{prop.title}</h3>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your project and see how I can help bring your vision to life.
            Free initial consultation included!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
