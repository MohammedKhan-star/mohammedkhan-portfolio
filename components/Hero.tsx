"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Github, Download, Mail, Linkedin } from "lucide-react";

const roles = [
  "Full Stack Web Developer helping businesses and startups build modern, scalable, and high-performing web applications",
  "Experience building AI-powered, scalable web applications",
  "End-to-end development: frontend, backend, APIs, and deployment",
  "Specialized in MERN stack, Next.js, and OpenAI API integrations",
  "Passionate about clean code, responsive design, and intuitive UX",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 55);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, roleIndex, isPaused]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Name */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
      >
        Mohammed Khan
      </motion.h1>

      {/* Static role */}
      <motion.p
        className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Full Stack Developer | MERN | Next.js | AI-Powered Apps
      </motion.p>

      {/* Typing effect */}
      <motion.div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="mt-6 h-14 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-lg md:text-2xl font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
          {text}
          <span className="ml-1 animate-blink">|</span>
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/MohammedKhan-star"
          target="_blank"
          className="px-6 py-3 rounded-xl border flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Github size={18} />
          GitHub
        </a>
         <a
          href="https://www.linkedin.com/in/mohammed-khan-7905a621a/"
          target="_blank"
          className="px-6 py-3 rounded-xl border flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
       <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedkhan20019@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Mohammed,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl border flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Mail size={18} />
          Mail
        </a>

        
      

        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-xl border flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Download size={18} />
          Resume
        </a>
      </motion.div>

      {/* Tech stack */}
      
    </section>
  );
}
