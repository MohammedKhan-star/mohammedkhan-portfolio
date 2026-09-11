
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT — Founder Introduction */}
          <div>
            {/* Founder Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              Founder of STACKRA TECHNOLOGIES
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl text-5xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-6xl lg:text-7xl"
            >
              I build software
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                that moves businesses forward.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl"
            >
              I'm Mohammed Khan, Founder and Software Engineer at
              STACKRA TECHNOLOGIES. I build modern websites, business
              management systems, AI-powered applications and custom digital
              solutions for businesses and organizations.
            </motion.p>

            {/* Client-focused CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/60 px-6 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                Explore My Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-9 flex items-center gap-5"
            >
              <a
                href="https://github.com/MohammedKhan-star"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-khan-7905a621a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 transition hover:text-blue-600 dark:text-gray-400"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:mohammedkhan20019@gmail.com"
                aria-label="Email"
                className="text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <Mail size={20} />
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-7 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400"
            >
              <span>Full-Stack Engineering</span>
              <span>AI Solutions</span>
              <span>Business Software</span>
            </motion.div>
          </div>

          {/* RIGHT — Founder / Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">

              {/* Profile */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
                <img
                  src="/profile/photo3.png"
                  alt="Mohammed Khan - Founder of STACKRA TECHNOLOGIES"
                  className="h-[430px] w-full object-cover object-center"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 pt-24">
                  <p className="text-sm font-medium text-white/70">
                    Founder & Software Engineer
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Mohammed Khan
                  </h2>

                  <p className="mt-1 text-sm text-white/70">
                    STACKRA TECHNOLOGIES
                  </p>
                </div>
              </div>

              {/* Company Card */}
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/5 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Building
                  </p>

                  <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                    STACKRA TECHNOLOGIES
                  </p>
                </div>

                <a
                  href="https://stackratechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit STACKRA TECHNOLOGIES"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:scale-105 dark:bg-white dark:text-black"
                >
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-black/10 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/90 sm:block"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Focus
              </p>

              <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                Software • AI • Business
              </p>
            </motion.div>

            {/* Floating Status */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-5 top-12 hidden rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/90 sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Building
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
