"use client";

import { Target, Eye, Lightbulb, Users, Rocket, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/animated-section";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We challenge conventional thinking and embrace bold ideas that can reshape our understanding of the universe.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Users,
    title: "Open Collaboration",
    description:
      "We believe in the power of community-driven science and open-source technology to accelerate progress.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of scientific rigor, engineering quality, and ethical responsibility.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: Rocket,
    title: "Ambition",
    description:
      "We set audacious goals and work tirelessly to achieve them, believing that the impossible is simply the not-yet-done.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
];

const milestones = [
  {
    year: "Foundation",
    title: "Deepcomet Established",
    description:
      "Founded with a mission to bridge the gap between AI research, scientific discovery, and space exploration.",
  },
  {
    year: "Research",
    title: "Core Research Initiatives",
    description:
      "Launched key research programs in neural architectures, computational astrophysics, and autonomous systems.",
  },
  {
    year: "Open Source",
    title: "Community Growth",
    description:
      "Released foundational tools and frameworks to the open-source community, fostering global collaboration.",
  },
  {
    year: "Future",
    title: "Expanding Horizons",
    description:
      "Scaling our efforts to tackle the most pressing challenges at the intersection of AI, science, and space.",
  },
];

export default function AboutPage() {
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
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Building the{" "}
              <span className="text-gradient">Future Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Deepcomet is a forward-thinking organization dedicated to
              advancing the frontiers of artificial intelligence, scientific
              research, and space exploration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <Card className="glass border-border h-full">
              <CardContent className="p-8">
                <div className="bg-blue-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To accelerate humanity&apos;s progress by developing
                  breakthrough technologies in AI and space science. We strive to
                  make these advancements accessible, open, and beneficial for
                  all of humanity.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="glass border-border h-full">
              <CardContent className="p-8">
                <div className="bg-purple-400/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where intelligent systems and space technologies work
                  in harmony to solve Earth&apos;s greatest challenges and unlock
                  the mysteries of the cosmos. We envision a future where
                  humanity thrives as a multi-planetary species.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto bg-border" />

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 bg-primary/5 text-primary"
              >
                Our Values
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What <span className="text-gradient">Drives Us</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our core values guide every decision we make and every project we
                undertake.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <Card className="glass border-border hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-6 flex gap-4">
                    <div
                      className={`${value.bgColor} w-12 h-12 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <value.icon className={`h-6 w-6 ${value.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto bg-border" />

      {/* Journey */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 bg-primary/5 text-primary"
              >
                Our Journey
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                The <span className="text-gradient">Path Forward</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.year} delay={i * 0.15}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-2" />
                    {i < milestones.length - 1 && (
                      <div className="w-px h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <Badge
                      variant="outline"
                      className="mb-2 border-primary/30 bg-primary/5 text-primary text-xs"
                    >
                      {milestone.year}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
