"use client";

import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Monitor,
} from "lucide-react";

const experiences = [
  {
    year: "2026 — Present",
    title: "Founder & Software Engineer",
    company: "STACKRA TECHNOLOGIES",
    description:
      "Building a software and AI technology company focused on modern websites, business management systems, AI-powered applications and custom digital solutions.",
    icon: Building2,
    current: true,
  },
  {
    year: "Present",
    title: "Computer Instructor",
    company: "Education & Computer Training",
    description:
      "Teaching practical computer skills and helping students develop knowledge in software applications, programming and digital technology.",
    icon: GraduationCap,
    current: false,
  },
  {
    year: "Professional Experience",
    title: "Full-Stack Software Development",
    company: "Web & Application Development",
    description:
      "Developing modern web applications, business systems and digital products using contemporary frontend, backend and database technologies.",
    icon: BriefcaseBusiness,
    current: false,
  },
  {
    year: "Early Experience",
    title: "Computer & IT Support",
    company: "Technology & Systems",
    description:
      "Hands-on experience with computer systems, software installation, troubleshooting and practical IT support.",
    icon: Monitor,
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-6 py-24 dark:bg-black sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 dark:text-white md:text-5xl">
            From learning technology
            <span className="block text-gray-400 dark:text-gray-600">
              to building with it.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My journey combines software engineering, education, hands-on
            technology experience and entrepreneurship.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gray-200 dark:bg-white/10 md:block" />

          <div className="space-y-10">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <div
                  key={`${experience.year}-${experience.title}`}
                  className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-10"
                >

                  {/* Year */}
                  <div className="pt-2 md:text-right">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {experience.year}
                    </span>
                  </div>

                  {/* Experience Card */}
                  <div className="relative rounded-3xl border border-black/10 bg-gray-50 p-7 dark:border-white/10 dark:bg-white/[0.04] sm:p-8">

                    {/* Timeline Icon */}
                    <div className="absolute -left-[58px] top-8 hidden h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm dark:border-white/10 dark:bg-black dark:text-white md:flex">
                      <Icon size={19} />
                    </div>

                    {/* Mobile Icon */}
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black md:hidden">
                      <Icon size={19} />
                    </div>

                    {/* Current Badge */}
                    {experience.current && (
                      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Current
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-2xl">
                      {experience.title}
                    </h3>

                    {/* Company */}
                    <p className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {experience.company}
                    </p>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                      {experience.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Founder Statement */}
        <div className="mt-20 border-t border-black/10 pt-12 dark:border-white/10">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Today
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                Building the next chapter with STACKRA.
              </h3>
            </div>

            <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
              Today my focus is on turning technical knowledge and real-world
              experience into products and services that solve meaningful
              problems for businesses, organizations and individuals.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
