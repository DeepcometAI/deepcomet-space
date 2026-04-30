"use client";

import { Mail, GitBranch, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Reach out to us for inquiries, collaborations, or feedback.",
    value: "contact@deepcomet.space",
    href: "mailto:contact@deepcomet.space",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: GitBranch,
    title: "GitHub",
    description:
      "Explore our open-source projects, contribute, or report issues.",
    value: "github.com/DeepcometAI",
    href: "https://github.com/DeepcometAI",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "We are a globally distributed team working across timezones.",
    value: "Worldwide",
    href: null,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
];

const opportunities = [
  {
    title: "Research Collaboration",
    description:
      "Partner with us on cutting-edge research in AI, space science, or computational physics. We welcome academic and industry collaborations.",
  },
  {
    title: "Open Source Contributions",
    description:
      "Contribute to our open-source projects and help shape tools used by researchers and engineers worldwide.",
  },
  {
    title: "Join the Team",
    description:
      "We are always looking for exceptional talent passionate about AI, science, and space. Reach out to explore opportunities.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/5 text-primary"
            >
              Contact
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s{" "}
              <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you want to collaborate on research, contribute to our
              projects, or just say hello &mdash; we&apos;d love to hear from
              you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <AnimatedSection key={method.title} delay={i * 0.1}>
                <Card className="glass border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${method.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <method.icon className={`h-7 w-7 ${method.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {method.value}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-sm text-primary">
                        {method.value}
                      </span>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">
                Ways to{" "}
                <span className="text-gradient">Get Involved</span>
              </h2>
              <p className="text-muted-foreground">
                There are many ways to be part of the Deepcomet mission.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {opportunities.map((opp, i) => (
              <AnimatedSection key={opp.title} delay={i * 0.1}>
                <Card className="glass border-border hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{opp.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {opp.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start a{" "}
              <span className="text-gradient">Conversation</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Send us an email and we&apos;ll get back to you as soon as
              possible.
            </p>
            <a
              href="mailto:contact@deepcomet.space"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-primary/90 px-8"
              )}
            >
              <Mail className="mr-2 h-4 w-4" /> Send Email
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
