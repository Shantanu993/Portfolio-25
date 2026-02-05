/**
 * =============================================================================
 * ADMIN DASHBOARD PAGE
 * =============================================================================
 * Main dashboard page showing overview statistics and recent activity.
 * =============================================================================
 */

import { Metadata } from "next";
import {
  FolderKanban,
  FileText,
  MessageSquare,
  Eye,
  TrendingUp,
  Calendar,
  Star,
  Users,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin dashboard overview",
};

// DUMMY DATA: Replace with actual database queries
const stats = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2",
    changeLabel: "from last month",
    icon: FolderKanban,
  },
  {
    title: "Published Articles",
    value: "28",
    change: "+5",
    changeLabel: "from last month",
    icon: FileText,
  },
  {
    title: "Messages",
    value: "47",
    change: "+12",
    changeLabel: "unread",
    icon: MessageSquare,
  },
  {
    title: "Page Views",
    value: "12.5K",
    change: "+18%",
    changeLabel: "from last month",
    icon: Eye,
  },
];

const recentActivity = [
  {
    type: "project",
    title: "Added new project: E-Commerce Platform",
    time: "2 hours ago",
  },
  {
    type: "article",
    title: "Published article: Getting Started with Next.js 15",
    time: "5 hours ago",
  },
  {
    type: "message",
    title: "New contact form submission from John Smith",
    time: "1 day ago",
  },
  {
    type: "booking",
    title: "New meeting booked for Dec 15, 2025",
    time: "2 days ago",
  },
];

export default async function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your portfolio admin panel. Here&apos;s an overview of your content.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    {stat.change}
                  </span>{" "}
                  {stat.changeLabel}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <QuickActionCard
                href="/admin/projects/new"
                icon={FolderKanban}
                title="New Project"
                description="Add a new portfolio project"
              />
              <QuickActionCard
                href="/admin/articles/new"
                icon={FileText}
                title="New Article"
                description="Write a new blog post"
              />
              <QuickActionCard
                href="/admin/messages"
                icon={MessageSquare}
                title="View Messages"
                description="Check contact submissions"
              />
              <QuickActionCard
                href="/admin/bookings"
                icon={Calendar}
                title="Bookings"
                description="Manage appointments"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* GitHub Stats (placeholder) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            GitHub Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center text-muted-foreground">
            <p>GitHub contribution graph will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function QuickActionCard({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-muted/50 hover:bg-muted transition-colors text-center"
    >
      <Icon className="h-8 w-8 mb-2 text-primary" />
      <h3 className="font-medium text-sm">{title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </a>
  );
}
