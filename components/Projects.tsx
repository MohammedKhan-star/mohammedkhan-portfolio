"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        bg-white px-6 py-24
        dark:bg-black
        sm:py-32
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 dark:text-white md:text-5xl">
            Products, platforms
            <span className="block text-gray-400 dark:text-gray-600">
              and digital experiences.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A selection of projects and digital products I've designed and
            developed using modern web technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group overflow-hidden rounded-3xl
                border border-black/10
                bg-gray-50
                dark:border-white/10
                dark:bg-white/[0.04]
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Project Number */}
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  Project
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-gray-950 dark:text-white">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-gray-400 transition-colors group-hover:text-black dark:group-hover:text-white"
                  />
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7 inline-flex items-center gap-2
                    text-sm font-semibold
                    text-gray-950
                    dark:text-white
                    hover:underline
                  "
                >
                  View Project
                  <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-black/10 pt-10 dark:border-white/10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Have a project in mind?
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
                Let's build something valuable.
              </h3>
            </div>

            <a
              href="#contact"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl
                bg-black
                px-6 py-3.5
                text-sm font-semibold text-white
                transition
                hover:-translate-y-0.5
                hover:shadow-xl
                dark:bg-white
                dark:text-black
              "
            >
              Start a Project
              <ArrowUpRight size={17} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
