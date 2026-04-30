"use client";

import Link from "next/link";
import { ArrowRight, Brain, Telescope, Atom, Sparkles, Zap, Globe } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/animated-section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Building next-generation AI systems that push the boundaries of machine learning, deep learning, and neural architectures.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Telescope,
    title: "Space Exploration",
    description:
      "Developing technologies and research for humanity's journey beyond Earth, from satellite systems to deep space missions.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: Atom,
    title: "Scientific Research",
    description:
      "Advancing fundamental science through interdisciplinary research, computational modeling, and experimental innovation.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    icon: Zap,
    title: "High Performance Computing",
    description:
      "Leveraging cutting-edge computing infrastructure to solve complex problems at unprecedented scale and speed.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description:
      "Fostering international partnerships to accelerate scientific discovery and technological advancement worldwide.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Sparkles,
    title: "Open Innovation",
    description:
      "Committed to open-source development and sharing breakthroughs that benefit researchers and builders everywhere.",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
  },
];

const stats = [
  { value: "AI", label: "Powered Research" },
  { value: "Open", label: "Source First" },
  { value: "Global", label: "Collaboration" },
  { value: "Next Gen", label: "Technology" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedFadeIn>
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/5 text-primary px-4 py-1.5 text-sm"
            >
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Pioneering the Future
            </Badge>
          </AnimatedFadeIn>

          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Deepcomet</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-4 font-light">
              Next Generation{" "}
              <span className="text-foreground font-medium">AI</span>,{" "}
              <span className="text-foreground font-medium">Science</span> &{" "}
              <span className="text-foreground font-medium">Space</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We are building the technologies that will define humanity&apos;s
              future &mdash; from intelligent systems that think alongside us to
              spacecraft that carry our ambitions to the stars.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/research"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary hover:bg-primary/90 text-primary-foreground px-8 text-base"
                )}
              >
                Explore Research <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-primary/30 hover:bg-primary/10 px-8 text-base"
                )}
              >
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center glass rounded-xl p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 bg-primary/5 text-primary"
              >
                What We Do
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Our <span className="text-gradient">Focus Areas</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Deepcomet operates at the intersection of the most
                transformative fields shaping our future.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <Card className="glass border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div
                      className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center glass rounded-2xl p-12 sm:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Explore the <span className="text-gradient">Future</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join us on our mission to push the boundaries of AI, science, and
              space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary hover:bg-primary/90 px-8"
                )}
              >
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://github.com/DeepcometAI"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-primary/30 hover:bg-primary/10 px-8"
                )}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
