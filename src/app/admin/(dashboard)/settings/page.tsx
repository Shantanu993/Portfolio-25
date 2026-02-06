/**
 * =============================================================================
 * ADMIN SETTINGS PAGE
 * =============================================================================
 * Site-wide settings and configuration.
 * =============================================================================
 */

import { Metadata } from "next";
import { Save, User, Globe, Mail, Palette, Shield, Bell } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Settings",
  description: "Admin panel settings and configuration.",
};

/**
 * -----------------------------------------------------------------------------
 * DUMMY SETTINGS DATA
 * -----------------------------------------------------------------------------
 * TODO: Replace with actual database values.
 * -----------------------------------------------------------------------------
 */
const SITE_SETTINGS = {
  // Personal Info
  name: "John Doe",
  title: "Senior Full Stack Developer",
  email: "hello@example.com",
  location: "San Francisco, CA",
  bio: "Passionate developer building modern web applications.",
  
  // Social Links
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  
  // Site Config
  siteName: "John Doe | Developer Portfolio",
  siteUrl: "https://johndoe.dev",
  analyticsId: "G-XXXXXXXXXX",
  
  // Features
  showNewsletter: true,
  showBooking: true,
  maintenanceMode: false,
};

export default function AdminSettingsPage() {
  return (
    <Section>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your site configuration and preferences
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
              <CardDescription>
                This information is displayed on your public portfolio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={SITE_SETTINGS.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" defaultValue={SITE_SETTINGS.title} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={SITE_SETTINGS.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue={SITE_SETTINGS.location} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  defaultValue={SITE_SETTINGS.bio}
                  rows={3}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Social Links
              </CardTitle>
              <CardDescription>
                Connect your social media profiles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input id="github" defaultValue={SITE_SETTINGS.github} placeholder="https://github.com/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input id="linkedin" defaultValue={SITE_SETTINGS.linkedin} placeholder="https://linkedin.com/in/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter / X</Label>
                <Input id="twitter" defaultValue={SITE_SETTINGS.twitter} placeholder="https://twitter.com/username" />
              </div>
            </CardContent>
          </Card>

          {/* SEO & Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                SEO & Analytics
              </CardTitle>
              <CardDescription>
                Search engine and analytics configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Title</Label>
                <Input id="siteName" defaultValue={SITE_SETTINGS.siteName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteUrl">Site URL</Label>
                <Input id="siteUrl" defaultValue={SITE_SETTINGS.siteUrl} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="analyticsId">Google Analytics ID</Label>
                <Input id="analyticsId" defaultValue={SITE_SETTINGS.analyticsId} placeholder="G-XXXXXXXXXX" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Feature Toggles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Features
              </CardTitle>
              <CardDescription>
                Enable or disable site features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Newsletter</p>
                  <p className="text-sm text-muted-foreground">Show newsletter signup</p>
                </div>
                <Badge variant={SITE_SETTINGS.showNewsletter ? "default" : "secondary"}>
                  {SITE_SETTINGS.showNewsletter ? "Enabled" : "Disabled"}
                </Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Booking Calendar</p>
                  <p className="text-sm text-muted-foreground">Allow appointment booking</p>
                </div>
                <Badge variant={SITE_SETTINGS.showBooking ? "default" : "secondary"}>
                  {SITE_SETTINGS.showBooking ? "Enabled" : "Disabled"}
                </Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Maintenance Mode</p>
                  <p className="text-sm text-muted-foreground">Take site offline temporarily</p>
                </div>
                <Badge variant={SITE_SETTINGS.maintenanceMode ? "destructive" : "secondary"}>
                  {SITE_SETTINGS.maintenanceMode ? "Active" : "Inactive"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security
              </CardTitle>
              <CardDescription>
                Account and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" className="w-full">
                Manage Sessions
              </Button>
              <Button variant="outline" className="w-full">
                Export Data
              </Button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Irreversible actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full text-destructive border-destructive/50 hover:bg-destructive/10">
                Clear All Data
              </Button>
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
