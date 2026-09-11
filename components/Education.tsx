"use client";

import {
  Award,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Osmania University",
    period: "2024 — Present",
    icon: GraduationCap,
    status: "In Progress",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Osmania University",
    period: "2018 — 2021",
    icon: BookOpen,
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="
        relative overflow-hidden
        bg-gray-50
        px-6 py-24
        dark:bg-[#080808]
        sm:py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 dark:text-white md:text-5xl">
            Learning that supports
            <span className="block text-gray-400 dark:text-gray-600">
              what I build.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            A foundation in computer science combined with continuous
            learning, practical development and real-world technology
            experience.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={`${item.degree}-${item.institution}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-black/10
                  bg-white
                  p-8
                  transition-colors duration-200
                  hover:border-black/20
                  dark:border-white/10
                  dark:bg-black
                  dark:hover:border-white/20
                  sm:p-10
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-5">

                  <div
                    className="
                      flex h-12 w-12 shrink-0
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

                  <span
                    className="
                      rounded-full
                      border border-black/10
                      px-3 py-1
                      text-xs font-semibold
                      text-gray-500
                      dark:border-white/10
                      dark:text-gray-400
                    "
                  >
                    {item.status}
                  </span>
                </div>

                {/* Degree */}
                <h3
                  className="
                    mt-8
                    max-w-xl
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-950
                    dark:text-white
                  "
                >
                  {item.degree}
                </h3>

                {/* Institution */}
                <p className="mt-3 text-base font-semibold text-gray-600 dark:text-gray-300">
                  {item.institution}
                </p>

                {/* Period */}
                <div className="mt-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                  <Award size={16} />
                  {item.period}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-black/5 dark:bg-white/5" />
              </article>
            );
          })}
        </div>

        {/* Learning Philosophy */}
        <div
          className="
            mt-12
            rounded-3xl
            border border-black/10
            bg-white
            p-8
            dark:border-white/10
            dark:bg-black
            sm:p-10
          "
        >
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">

            <div
              className="
                flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-black
                text-white
                dark:bg-white
                dark:text-black
              "
            >
              <BookOpen size={24} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Continuous Learning
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-950 dark:text-white sm:text-2xl">
                Technology never stops evolving.
              </h3>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                Beyond formal education, I continuously learn new technologies,
                development practices and AI capabilities so I can build
                better and more useful products.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
