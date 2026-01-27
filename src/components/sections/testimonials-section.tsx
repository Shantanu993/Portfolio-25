/**
 * =============================================================================
 * TESTIMONIALS SECTION COMPONENT
 * =============================================================================
 * Displays client testimonials in a visually appealing grid/carousel.
 * Used on the services page and potentially homepage.
 * =============================================================================
 */

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Section } from "@/components/ui/section";
import { Motion } from "@/components/ui/motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
}

export function TestimonialsSection({
  testimonials,
  title = "What Clients Say",
  description = "Hear from amazing people I've had the pleasure to work with",
}: TestimonialsSectionProps) {
  return (
    <Section className="py-20">
      <Motion
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Motion variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          </Motion>
          <Motion variants={fadeIn}>
            <p className="text-lg text-muted-foreground">{description}</p>
          </Motion>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Motion
              key={testimonial.id}
              variants={fadeIn}
              custom={index}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-muted-foreground mb-6 flex-grow italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="w-12 h-12">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Motion>
          ))}
        </div>
      </Motion>
    </Section>
  );
}
