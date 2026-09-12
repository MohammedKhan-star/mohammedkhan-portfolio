"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Lightbulb,
  GraduationCap,
  Target,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Developer",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneur",
  },
  {
    icon: GraduationCap,
    title: "Instructor",
  },
  {
    icon: Target,
    title: "Problem Solver",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020b14] pt-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

        {/* LEFT */}
        <div className="relative z-10">

          <div className="mb-5 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.3em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            FOUNDER | DEVELOPER | INNOVATOR
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Mohammed
            <span className="block text-cyan-400">
              Khan
            </span>
          </h1>

          <div className="mt-6 text-xl font-semibold text-white sm:text-2xl">
            Founder of{" "}
            <span className="text-cyan-400">
              STACKRA TECHNOLOGIES
            </span>
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Building software, web and AI solutions that help businesses,
            organizations and entrepreneurs turn ideas into real digital
            products.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-cyan-400/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm"
                >
                  <Icon
                    size={25}
                    className="mx-auto mb-2 text-cyan-400"
                  />

                  <span className="text-xs font-medium text-slate-300">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="/Mohammed-Khan-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Download CV
              <ArrowDown size={17} />
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400/10"
            >
              Contact Me
              <ArrowUpRight size={17} />
            </Link>

          </div>

          {/* Tagline */}
          <p className="mt-10 max-w-md text-lg italic text-slate-400">
            "Innovating Businesses.
            <span className="block text-cyan-400">
              Empowering the Future."
            </span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">

            {/* Image container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/60 shadow-2xl shadow-cyan-500/10">

              <Image
                src="/public/profile/photo3.png"
                alt="Mohammed Khan - Founder of STACKRA TECHNOLOGIES"
                width={600}
                height={700}
                priority
                className="h-[520px] w-[430px] object-cover object-top sm:h-[620px] sm:w-[500px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-transparent to-transparent" />

            </div>

            {/* Founder badge */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-cyan-400/20 bg-[#020b14]/80 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                Founder & Software Engineer
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                STACKRA TECHNOLOGIES
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
