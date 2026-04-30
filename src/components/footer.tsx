import Link from "next/link";
import { Rocket, GitBranch, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  explore: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/contact", label: "Contact" },
  ],
  connect: [
    { href: "https://github.com/DeepcometAI", label: "GitHub", external: true },
    { href: "mailto:contact@deepcomet.space", label: "Email", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border glass">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-gradient">Deepcomet</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Pioneering the next generation of AI, science, and space
              exploration. Pushing the boundaries of what&apos;s possible.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    {link.label === "GitHub" && <GitBranch className="h-4 w-4" />}
                    {link.label === "Email" && <Mail className="h-4 w-4" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Deepcomet. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for the future of humanity
          </p>
        </div>
      </div>
    </footer>
  );
}
