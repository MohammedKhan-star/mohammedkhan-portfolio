"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Code2,
  Lightbulb,
  Rocket,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Founder",
    description:
      "Building STACKRA TECHNOLOGIES with a focus on practical software and AI solutions.",
  },
  {
    icon: Code2,
    title: "Software Engineer",
    description:
      "Designing and developing modern web applications and scalable business systems.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Turning real business problems into simple, useful and reliable technology.",
  },
  {
    icon: Rocket,
    title: "Product Builder",
    description:
      "From an initial idea to development, deployment and continuous improvement.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            About the Founder
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
            I don't just write code.
            <span className="block text-gray-400 dark:text-gray-500">
              I build products.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I'm Mohammed Khan, Founder of STACKRA TECHNOLOGIES and a software
            engineer focused on building modern websites, business software,
            AI-powered applications and digital products.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-black/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-white/5 sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
              <Rocket size={22} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-gray-950 dark:text-white">
              Building with purpose
            </h3>

            <div className="mt-5 space-y-5 text-base leading-7 text-gray-600 dark:text-gray-300">
              <p>
                My approach to technology starts with understanding the
                problem. A successful product is not just about writing
                thousands of lines of code — it is about creating something
                that people and businesses can actually use.
              </p>

              <p>
                Through STACKRA TECHNOLOGIES, I'm working toward building
                reliable software products that help businesses operate,
                automate processes and grow in the digital world.
              </p>

              <p>
                I enjoy working across product strategy, user experience,
                software engineering and AI to turn ideas into working
                solutions.
              </p>
            </div>

            <a
              href="https://stackratechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-950 dark:text-white"
            >
              Explore STACKRA TECHNOLOGIES

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Highlights */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-black"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-900 transition-transform duration-300 group-hover:scale-110 dark:bg-white/10 dark:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-gray-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-black/10 pt-10 dark:border-white/10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                My mission
              </p>

              <p className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                Turn ideas and business problems into technology that creates
                real value.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black"
            >
              Let's Build Something
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
