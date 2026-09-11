"use client";

import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  LayoutDashboard,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Business Websites",
    description:
      "Professional, responsive websites designed to build trust, strengthen your brand and turn visitors into customers.",
    features: [
      "Corporate Websites",
      "Business Websites",
      "Landing Pages",
    ],
  },
  {
    icon: Code2,
    number: "02",
    title: "Custom Web Applications",
    description:
      "Modern web applications built around your business requirements, workflow and users.",
    features: [
      "Web Applications",
      "E-Commerce",
      "Custom Platforms",
    ],
  },
  {
    icon: LayoutDashboard,
    number: "03",
    title: "CRM & ERP Systems",
    description:
      "Centralized business systems to manage customers, sales, finance, operations and organizational data.",
    features: [
      "CRM",
      "ERP",
      "Business Management",
    ],
  },
  {
    icon: Bot,
    number: "04",
    title: "AI Solutions",
    description:
      "AI-powered applications and intelligent assistants that help businesses automate work and improve productivity.",
    features: [
      "AI Assistants",
      "AI Automation",
      "AI Applications",
    ],
  },
  {
    icon: GraduationCap,
    number: "05",
    title: "Learning Management Systems",
    description:
      "Digital learning platforms for schools, colleges, academies, trainers and organizations.",
    features: [
      "Student Management",
      "Courses",
      "Assessments",
    ],
  },
  {
    icon: BriefcaseBusiness,
    number: "06",
    title: "Business Software",
    description:
      "Purpose-built software for specific business processes, from internal tools to complete operational platforms.",
    features: [
      "Finance",
      "Projects",
      "Inventory",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        bg-gray-50
        px-6 py-24
        dark:bg-[#080808]
        sm:py-32
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 dark:text-white md:text-5xl">
            Technology built around
            <span className="block text-gray-400 dark:text-gray-600">
              your business.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I help businesses, startups and organizations turn ideas,
            operational problems and opportunities into practical digital
            solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="
                  group relative overflow-hidden
                  rounded-3xl
                  border border-black/10
                  bg-white
                  p-7
                  transition-colors duration-200
                  hover:border-black/20
                  dark:border-white/10
                  dark:bg-black
                  dark:hover:border-white/20
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      bg-gray-100
                      text-gray-900
                      dark:bg-white/10
                      dark:text-white
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.2em] text-gray-400">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-950 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="
                        rounded-full
                        border border-black/10
                        px-3 py-1.5
                        text-xs font-medium
                        text-gray-600
                        dark:border-white/10
                        dark:text-gray-400
                      "
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Bottom Link */}
                <div className="mt-8 border-t border-black/10 pt-5 dark:border-white/10">
                  <a
                    href="#contact"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-semibold
                      text-gray-950
                      dark:text-white
                    "
                  >
                    Discuss your project
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-black/5 dark:bg-white/5" />
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="
            mt-16
            overflow-hidden
            rounded-3xl
            bg-black
            px-7 py-10
            text-white
            dark:bg-white
            dark:text-black
            sm:px-10
          "
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-white/50 dark:text-black/50">
                Have a business problem?
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Let's find the right technology solution.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60 dark:text-black/60">
                Tell me what you're trying to build, improve or automate.
                We'll start with the problem and work toward the right
                solution.
              </p>
            </div>

            <a
              href="#contact"
              className="
                inline-flex shrink-0
                items-center justify-center gap-2
                rounded-xl
                bg-white
                px-6 py-3.5
                text-sm font-semibold
                text-black
                transition
                hover:-translate-y-0.5
                dark:bg-black
                dark:text-white
              "
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
