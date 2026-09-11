
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-5 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
          
          {/* Brand */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-sm font-bold text-white transition-transform group-hover:scale-105 dark:bg-white dark:text-black">
              MK
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-tight text-gray-950 dark:text-white">
                MOHAMMED KHAN
              </p>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                Founder · Software Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-black/5 hover:text-black dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://stackratechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              STACKRA
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white dark:text-black"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-gray-800 transition hover:bg-black/5 md:hidden dark:text-white dark:hover:bg-white/10"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-3 shadow-xl backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-black/95">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/5 hover:text-black dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <div className="my-2 border-t border-black/10 dark:border-white/10" />

            <a
              href="https://stackratechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 dark:text-white"
            >
              STACKRA TECHNOLOGIES
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
