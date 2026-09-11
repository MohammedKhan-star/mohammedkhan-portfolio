"use client";

import Image from "next/image";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950
        px-6 py-24
        dark:from-black dark:via-gray-950 dark:to-slate-900
      "
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Technology Stack
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Skills & Expertise
          </h2>

          <p className="mt-6 text-base leading-7 text-white/60 md:text-lg">
            Technologies and tools I use to design, develop and deliver
            modern digital products, business applications and scalable
            software solutions.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>

              {/* Category Header */}
              <div className="mb-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                  {category.title}
                </h3>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Skills Grid */}
              <div
                className="
                  grid grid-cols-2 gap-4
                  sm:grid-cols-3
                  md:grid-cols-4
                  lg:grid-cols-5
                  xl:grid-cols-6
                "
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      group
                      flex min-h-[150px]
                      flex-col items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.06]
                      px-4 py-6
                      text-center
                      backdrop-blur-sm
                      transition-colors duration-200
                      hover:border-white/20
                      hover:bg-white/[0.10]
                    "
                  >
                    {/* Logo */}
                    <div
                      className="
                        flex h-16 w-16
                        items-center justify-center
                        rounded-2xl
                        bg-white
                        p-3
                        shadow-lg
                      "
                    >
                      <Image
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        width={42}
                        height={42}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    {/* Skill Name */}
                    <p
                      className="
                        mt-5
                        text-sm font-semibold
                        text-white
                        group-hover:text-blue-200
                      "
                    >
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          className="
            mt-20
            rounded-3xl
            border border-white/10
            bg-white/[0.05]
            px-6 py-8
            text-center
            backdrop-blur-sm
            md:px-10
          "
        >
          <p className="text-lg font-semibold text-white md:text-xl">
            Technology is a tool.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
            The real goal is to use the right technology to solve the right
            problem and create meaningful value for the client.
          </p>
        </div>
      </div>
    </section>
  );
}
