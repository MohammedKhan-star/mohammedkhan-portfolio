import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education"; // NEW
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Khan | Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack and Next.js. Building scalable, fast, and modern web applications.",
};
export default function Home() {
  return (
    <>
      <Navbar />
       <main className="pt-24 space-y-24">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education /> {/* Add here */}
      <Projects />
      <Contact />
      </main>
    </>
  );
}
