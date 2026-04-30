"use client";

import {
  Brain,
  Telescope,
  Atom,
  Cpu,
  Satellite,
  Network,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";
import Link from "next/link";

const researchAreas = [
  {
    icon: Brain,
    title: "Neural Architecture Design",
    status: "Active",
    description:
      "Designing novel neural network architectures that are more efficient, interpretable, and capable of reasoning about complex multi-modal data.",
    tags: ["Deep Learning", "Transformers", "Architecture Search"],
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Telescope,
    title: "Computational Astrophysics",
    status: "Active",
    description:
      "Using advanced simulation and machine learning to model stellar evolution, galaxy formation, and cosmological phenomena at unprecedented resolution.",
    tags: ["Astrophysics", "Simulation", "ML"],
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: Satellite,
    title: "Autonomous Space Systems",
    status: "Active",
    description:
      "Developing AI-powered autonomous systems for satellite navigation, space debris tracking, and deep-space mission planning.",
    tags: ["Autonomy", "Navigation", "Robotics"],
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    icon: Atom,
    title: "Quantum-Classical Hybrid Computing",
    status: "Exploring",
    description:
      "Investigating the intersection of quantum computing and classical AI to solve problems that are intractable for either paradigm alone.",
    tags: ["Quantum", "Hybrid", "Optimization"],
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
  {
    icon: Cpu,
    title: "Edge AI for Space",
    status: "Active",
    description:
      "Building lightweight AI models that can run on resource-constrained hardware in space environments for real-time decision making.",
    tags: ["Edge Computing", "Optimization", "Embedded"],
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Network,
    title: "Multi-Agent Systems",
    status: "Exploring",
    description:
      "Researching collaborative AI agents that can coordinate and communicate to solve complex tasks in distributed environments.",
    tags: ["Multi-Agent", "Cooperation", "Communication"],
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
];

const publications = [
  {
    title: "Towards Efficient Neural Architectures for Space Applications",
    venue: "Research Preview",
    description:
      "A comprehensive study on designing neural networks optimized for the unique constraints of space-based computing environments.",
  },
  {
    title: "AI-Driven Approaches to Stellar Classification",
    venue: "Research Preview",
    description:
      "Leveraging deep learning models for automated classification and analysis of stellar spectra at scale.",
  },
  {
    title: "Autonomous Navigation in Deep Space Using Reinforcement Learning",
    venue: "Research Preview",
    description:
      "Developing RL-based navigation systems for autonomous spacecraft operating in uncharted regions of space.",
  },
];

export default function ResearchPage() {
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
              Research
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Pushing the{" "}
              <span className="text-gradient">Boundaries</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our research spans across AI, space science, and computational
              physics. We tackle hard problems that sit at the intersection of
              these transformative domains.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">
                Research <span className="text-gradient">Areas</span>
              </h2>
              <p className="text-muted-foreground">
                Active and exploratory research programs at Deepcomet.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.1}>
                <Card className="glass border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`${area.bgColor} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <area.icon className={`h-6 w-6 ${area.color}`} />
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          area.status === "Active"
                            ? "border-green-400/30 bg-green-400/5 text-green-400"
                            : "border-yellow-400/30 bg-yellow-400/5 text-yellow-400"
                        }
                      >
                        {area.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-border bg-secondary/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto bg-border" />

      {/* Publications */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">
                Research <span className="text-gradient">Previews</span>
              </h2>
              <p className="text-muted-foreground">
                Upcoming publications and research previews from our team.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <AnimatedSection key={pub.title} delay={i * 0.1}>
                <Card className="glass border-border hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge
                          variant="outline"
                          className="mb-2 border-primary/30 bg-primary/5 text-primary text-xs"
                        >
                          {pub.venue}
                        </Badge>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {pub.description}
                        </p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors mt-1" />
                    </div>
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
              Interested in{" "}
              <span className="text-gradient">Collaborating</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We&apos;re always looking for researchers, engineers, and
              visionaries to join our mission.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-primary/90 px-8"
              )}
            >
              Reach Out <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
