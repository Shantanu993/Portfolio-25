/**
 * =============================================================================
 * ADMIN SERVICES PAGE
 * =============================================================================
 * Manage freelance services and pricing.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { Plus, Pencil, Trash2, GripVertical, DollarSign, Star } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Manage Services",
  description: "Admin panel for managing freelance services.",
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY SERVICES DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual database query using Prisma.
 * -----------------------------------------------------------------------------
 */
const DUMMY_SERVICES = [
  {
    id: "1",
    name: "Full Stack Web Development",
    description: "End-to-end web application development using modern technologies.",
    icon: "code",
    startingPrice: 5000,
    priceUnit: "project",
    popular: true,
    active: true,
    order: 1,
  },
  {
    id: "2",
    name: "UI/UX Design Implementation",
    description: "Transform your designs into pixel-perfect web experiences.",
    icon: "palette",
    startingPrice: 2500,
    priceUnit: "project",
    popular: false,
    active: true,
    order: 2,
  },
  {
    id: "3",
    name: "MVP Development",
    description: "Rapidly build and launch your minimum viable product.",
    icon: "rocket",
    startingPrice: 8000,
    priceUnit: "project",
    popular: false,
    active: true,
    order: 3,
  },
  {
    id: "4",
    name: "Technical Consulting",
    description: "Expert advice on architecture and technology choices.",
    icon: "zap",
    startingPrice: 200,
    priceUnit: "hour",
    popular: false,
    active: true,
    order: 4,
  },
];

export default function AdminServicesPage() {
  const activeCount = DUMMY_SERVICES.filter((s) => s.active).length;
  const totalRevenue = 45000; // TODO: Calculate from actual bookings

  return (
    <Section>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-muted-foreground mt-1">
            Manage your freelance services and pricing
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/services/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Service
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{DUMMY_SERVICES.length}</p>
            <p className="text-sm text-muted-foreground">Total Services</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-green-500">{activeCount}</p>
            <p className="text-sm text-muted-foreground">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{DUMMY_SERVICES.filter((s) => s.popular).length}</p>
            <p className="text-sm text-muted-foreground">Featured</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-primary">${(totalRevenue / 1000).toFixed(0)}K</p>
            <p className="text-sm text-muted-foreground">Revenue (YTD)</p>
          </CardContent>
        </Card>
      </div>

      {/* Services List */}
      <Card>
        <CardHeader>
          <CardTitle>All Services</CardTitle>
          <CardDescription>
            Drag to reorder. Click on a service to edit its details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {DUMMY_SERVICES.sort((a, b) => a.order - b.order).map((service) => (
              <div
                key={service.id}
                className="flex items-center gap-4 p-4 border rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab flex-shrink-0" />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{service.name}</h3>
                    {service.popular && (
                      <Badge variant="secondary" className="gap-1">
                        <Star className="h-3 w-3" />
                        Popular
                      </Badge>
                    )}
                    <Badge variant={service.active ? "default" : "secondary"}>
                      {service.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {service.description}
                  </p>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 font-semibold">
                    <DollarSign className="h-4 w-4" />
                    {service.startingPrice.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">per {service.priceUnit}</p>
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/services/${service.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Tips */}
      <Card className="mt-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardHeader>
          <CardTitle>💡 Pricing Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Consider your experience level and market rates when setting prices</li>
            <li>• Project-based pricing works better for well-defined scopes</li>
            <li>• Hourly rates are ideal for consulting and ongoing work</li>
            <li>• Mark your most popular service to highlight it on the services page</li>
          </ul>
        </CardContent>
      </Card>
    </Section>
  );
}
