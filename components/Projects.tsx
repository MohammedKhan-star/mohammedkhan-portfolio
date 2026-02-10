"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative py-24 px-6 overflow-hidden
        bg-gradient-to-br from-slate-900 via-gray-900 to-black
        dark:from-gray-950 dark:via-gray-900 dark:to-black
      "
    >
      {/* 🔥 Decorative background glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-white"
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{scale:0.98}}
              className="
                bg-white/90 dark:bg-gray-800/80
                backdrop-blur-lg
                rounded-2xl overflow-hidden
                shadow-lg hover:shadow-2xl
                transition-all text-left
              "
            >
              {/* Project Image */}
              <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="
                    inline-block mt-5
                    text-blue-600 dark:text-blue-400
                    font-semibold hover:underline
                  "
                >
                  Live Demo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
