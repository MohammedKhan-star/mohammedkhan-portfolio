"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative py-24 px-6 overflow-hidden
        bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-800
      "
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            text-3xl md:text-4xl font-bold tracking-wide
            text-center mb-20 text-white
          "
        >
          Skills & Expertise
        </motion.h2>

        {/* Skill Categories */}
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-8 text-white/90">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 120,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.06,
                    y: -4,
                  }}
                  className="
                    p-6 rounded-2xl flex flex-col items-center text-center
                    bg-white/90 dark:bg-gray-800/80
                    backdrop-blur-md
                    shadow-lg hover:shadow-2xl
                    transition-all cursor-pointer
                  "
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={120}
                    height={60}
                    className="mb-4"
                  />

                  <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
