"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-lg
        border-b border-gray-200/50 dark:border-gray-800/50
      "
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
          Mohammed Khan
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="
                  text-gray-700 dark:text-gray-300
                  hover:text-blue-600 dark:hover:text-blue-400
                  transition-colors
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            aria-label="Toggle Theme"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
            className="
              p-2 rounded-lg border
              border-gray-300 dark:border-gray-700
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition
            "
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            className="
              md:hidden p-2 rounded-lg border
              border-gray-300 dark:border-gray-700
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition
            "
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              bg-white dark:bg-gray-900
              border-t border-gray-200 dark:border-gray-800
            "
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block text-gray-700 dark:text-gray-300
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-colors
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
