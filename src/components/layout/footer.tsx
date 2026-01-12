/**
 * =============================================================================
 * FOOTER COMPONENT
 * =============================================================================
 * The site footer with navigation links, social links, and copyright.
 * =============================================================================
 */

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

import { footerNavLinks } from "@/config/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">Portfolio</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Full-Stack Developer passionate about building beautiful, 
              performant web applications that solve real problems.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <SocialLink href="https://github.com" label="GitHub">
                <Github className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://twitter.com" label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="mailto:hello@example.com" label="Email">
                <Mail className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerNavLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerNavLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Portfolio. Made with
              <Heart className="h-4 w-4 text-destructive fill-destructive" />
              using Next.js
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Social media link component
 */
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 rounded-lg hover:bg-muted"
      aria-label={label}
    >
      {children}
    </a>
  );
}
