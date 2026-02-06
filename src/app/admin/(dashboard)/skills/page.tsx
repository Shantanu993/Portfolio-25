/**
 * =============================================================================
 * ADMIN SKILLS PAGE
 * =============================================================================
 * Manage skills and technologies displayed on the portfolio.
 * =============================================================================
 */

import { Metadata } from "next";
import Link from "next/link";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Manage Skills",
  description: "Admin panel for managing skills and technologies.",
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY SKILLS DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual database query using Prisma.
 * -----------------------------------------------------------------------------
 */
const DUMMY_SKILLS = [
  { id: "1", name: "React", category: "FRONTEND", proficiency: 95, featured: true, order: 1 },
  { id: "2", name: "Next.js", category: "FRONTEND", proficiency: 92, featured: true, order: 2 },
  { id: "3", name: "TypeScript", category: "FRONTEND", proficiency: 90, featured: true, order: 3 },
  { id: "4", name: "Node.js", category: "BACKEND", proficiency: 90, featured: true, order: 4 },
  { id: "5", name: "PostgreSQL", category: "DATABASE", proficiency: 88, featured: true, order: 5 },
  { id: "6", name: "MongoDB", category: "DATABASE", proficiency: 85, featured: true, order: 6 },
  { id: "7", name: "AWS", category: "CLOUD", proficiency: 82, featured: true, order: 7 },
  { id: "8", name: "Docker", category: "CLOUD", proficiency: 85, featured: true, order: 8 },
  { id: "9", name: "Tailwind CSS", category: "FRONTEND", proficiency: 95, featured: false, order: 9 },
  { id: "10", name: "Vue.js", category: "FRONTEND", proficiency: 75, featured: false, order: 10 },
];

const categoryColors: Record<string, string> = {
  FRONTEND: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  BACKEND: "bg-green-500/10 text-green-600 dark:text-green-400",
  DATABASE: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  CLOUD: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  TOOLS: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  DESIGN: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
};

export default function AdminSkillsPage() {
  // Group skills by category
  const groupedSkills = DUMMY_SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof DUMMY_SKILLS>);

  const featuredCount = DUMMY_SKILLS.filter((s) => s.featured).length;

  return (
    <Section>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Skills</h1>
          <p className="text-muted-foreground mt-1">
            Manage your skills and technologies
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/skills/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Skill
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{DUMMY_SKILLS.length}</p>
            <p className="text-sm text-muted-foreground">Total Skills</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-primary">{featuredCount}</p>
            <p className="text-sm text-muted-foreground">Featured</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">{Object.keys(groupedSkills).length}</p>
            <p className="text-sm text-muted-foreground">Categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-2xl font-bold">
              {Math.round(DUMMY_SKILLS.reduce((a, s) => a + s.proficiency, 0) / DUMMY_SKILLS.length)}%
            </p>
            <p className="text-sm text-muted-foreground">Avg Proficiency</p>
          </CardContent>
        </Card>
      </div>

      {/* Skills by Category */}
      <div className="space-y-6">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <Card key={category}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className={categoryColors[category] || "bg-gray-500/10"}>
                      {category.replace("_", " ")}
                    </Badge>
                    <span className="text-sm font-normal text-muted-foreground">
                      ({skills.length} skills)
                    </span>
                  </CardTitle>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/skills/new?category=${category}`}>
                    <Plus className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {skills
                  .sort((a, b) => a.order - b.order)
                  .map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-4 p-3 border rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          {skill.featured && (
                            <Badge variant="outline" className="text-xs">Featured</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-24">
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/admin/skills/${skill.id}/edit`}>
                              <Pencil className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
