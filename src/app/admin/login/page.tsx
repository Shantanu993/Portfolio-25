/**
 * =============================================================================
 * ADMIN LOGIN PAGE
 * =============================================================================
 * Secure login page for accessing the admin dashboard.
 * =============================================================================
 */

import { Metadata } from "next";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { LoginForm } from "@/components/admin/login-form";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Login to access the admin dashboard",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  // Check if user is already logged in
  const session = await auth();
  
  if (session?.user) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">Portfolio Admin</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to manage your portfolio
          </p>
        </div>

        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  );
}
