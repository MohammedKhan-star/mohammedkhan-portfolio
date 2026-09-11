
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Mohammed Khan | Founder & Software Engineer | STACKRA TECHNOLOGIES",

  description:
    "Mohammed Khan is the Founder of STACKRA TECHNOLOGIES and a software engineer building modern websites, business software, AI-powered applications and digital solutions.",

  keywords: [
    "Mohammed Khan",
    "Mohammed Khan Founder",
    "STACKRA TECHNOLOGIES",
    "Software Engineer",
    "Founder",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "Web Development",
    "Business Software",
    "AI Solutions",
  ],

  authors: [
    {
      name: "Mohammed Khan",
      url: "https://www.mohammedkhan.dev",
    },
  ],

  creator: "Mohammed Khan",

  metadataBase: new URL("https://www.mohammedkhan.dev"),

  openGraph: {
    title:
      "Mohammed Khan | Founder & Software Engineer | STACKRA TECHNOLOGIES",

    description:
      "Founder of STACKRA TECHNOLOGIES building modern websites, business software and AI-powered digital solutions.",

    url: "https://www.mohammedkhan.dev",

    siteName: "Mohammed Khan",

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mohammed Khan | Founder & Software Engineer",

    description:
      "Founder of STACKRA TECHNOLOGIES building software products, business systems and AI-powered solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {/* Founder Hero */}
        <section id="home">
          <Hero />
        </section>

        {/* Founder Introduction */}
        <section id="about">
          <About />
        </section>

        {/* Technology & Expertise */}
        <section id="expertise">
          <Skills />
        </section>

        {/* Professional Journey */}
        <section id="experience">
          <Experience />
        </section>

        {/* Education */}
        <section id="education">
          <Education />
        </section>

        {/* Selected Work */}
        <section id="projects">
          <Projects />
        </section>

        {/* Client CTA */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Analytics />
    </>
  );
}

