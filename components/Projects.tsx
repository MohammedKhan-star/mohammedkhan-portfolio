"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Khan | Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack and Next.js. Building scalable, fast, and modern web applications.",
};
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
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
