/**
 * =============================================================================
 * ADMIN EXPERIENCE PAGE
 * =============================================================================
 * Manage work experience, education, and certifications.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { Plus, Pencil, Trash2, Briefcase, GraduationCap, Award, Building2 } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Manage Experience",
  description: "Admin panel for managing work experience and education.",
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual database queries.
 * -----------------------------------------------------------------------------
 */
const WORK_EXPERIENCE = [
  {
    id: "1",
    company: "TechCorp Innovation Labs",
    role: "Senior Full Stack Developer",
    type: "WORK" as const,
    current: true,
    startDate: new Date("2023-01-15"),
    endDate: null,
    order: 1,
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    type: "WORK" as const,
    current: false,
    startDate: new Date("2021-06-01"),
    endDate: new Date("2022-12-31"),
    order: 2,
  },
  {
    id: "3",
    company: "Digital Agency Pro",
    role: "Frontend Developer",
    type: "WORK" as const,
    current: false,
    startDate: new Date("2019-08-15"),
    endDate: new Date("2021-05-31"),
    order: 3,
  },
];

const EDUCATION = [
  {
    id: "4",
    institution: "University of Technology",
    degree: "Master of Science in Computer Science",
    type: "EDUCATION" as const,
    current: false,
    startDate: new Date("2017-09-01"),
    endDate: new Date("2019-05-31"),
    order: 1,
  },
  {
    id: "5",
    institution: "State University",
    degree: "Bachelor of Science in Software Engineering",
    type: "EDUCATION" as const,
    current: false,
    startDate: new Date("2013-09-01"),
    endDate: new Date("2017-05-31"),
    order: 2,
  },
];

const CERTIFICATIONS = [
  { id: "1", name: "AWS Solutions Architect - Professional", issuer: "AWS", year: 2023 },
  { id: "2", name: "Google Cloud Professional Developer", issuer: "Google", year: 2023 },
  { id: "3", name: "MongoDB Certified Developer", issuer: "MongoDB", year: 2022 },
  { id: "4", name: "Meta Front-End Developer Professional", issuer: "Meta", year: 2022 },
];

function formatDateRange(start: Date, end: Date | null, current: boolean) {
  const startStr = start.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  if (current) return `${startStr} - Present`;
  if (!end) return startStr;
  const endStr = end.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${startStr} - ${endStr}`;
}

export default function AdminExperiencePage() {
  return (
    <Section>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Experience</h1>
          <p className="text-muted-foreground mt-1">
            Manage your work experience, education, and certifications
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{WORK_EXPERIENCE.length}</p>
            <p className="text-sm text-muted-foreground">Work Positions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{EDUCATION.length}</p>
            <p className="text-sm text-muted-foreground">Education</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{CERTIFICATIONS.length}</p>
            <p className="text-sm text-muted-foreground">Certifications</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-green-500">6+</p>
            <p className="text-sm text-muted-foreground">Years Total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Work Experience */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Work Experience
              </CardTitle>
              <Button size="sm" asChild>
                <Link href="/admin/experience/new?type=work">
                  <Plus className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp) => (
                <div
                  key={exp.id}
                  className="flex items-start justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{exp.role}</h4>
                      {exp.current && (
                        <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/experience/${exp.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
              <Button size="sm" asChild>
                <Link href="/admin/experience/new?type=education">
                  <Plus className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="flex items-start justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/experience/${edu.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certifications */}
      <Card className="mt-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </CardTitle>
            <Button size="sm" asChild>
              <Link href="/admin/certifications/new">
                <Plus className="mr-2 h-4 w-4" />
                Add Certification
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <div>
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/admin/certifications/${cert.id}/edit`}>
                      <Pencil className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
