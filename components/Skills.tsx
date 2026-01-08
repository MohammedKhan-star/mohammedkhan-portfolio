"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-blue-300 dark:bg-gray-900 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-white"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
              }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl flex flex-col items-center cursor-pointer"
            >
              {/* Floating Logo */}
              <motion.div
                animate={{ y: [0, 0, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="mb-4"
                />
              </motion.div>

              <p className="text-gray-800 dark:text-gray-100 font-semibold">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
