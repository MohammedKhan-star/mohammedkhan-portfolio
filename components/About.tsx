"use client";

import {
  Rocket,
  BookOpen,
  Lightbulb,
  Code2,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  ExternalLink,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "100+",
    label: "Clients & Users",
  },
  {
    value: "3+",
    label: "Years Learning & Building",
  },
  {
    value: "1",
    label: "Technology Company",
  },
];

const strengths = [
  {
    icon: Rocket,
    title: "Passion for Technology",
    description:
      "Building practical digital products that solve real-world problems.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Constantly improving my knowledge across software, AI and business technology.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Turning ideas into modern, scalable and useful technology solutions.",
  },
];

const profile = [
  {
    icon: BriefcaseBusiness,
    label: "Role",
    value: "Founder & Full-Stack Developer",
  },
  {
    icon: Building2,
    label: "Company",
    value: "STACKRA TECHNOLOGIES",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "MCA (Pursuing)",
  },
  {
    icon: Code2,
    label: "Focus",
    value: "Software • Web • AI",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MohammedKhan-star",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "#",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "#",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#020b14] py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* ================= STATS ================= */}
        <div className="mb-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.025] md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-6 text-center ${
                index !== stats.length - 1
                  ? "border-b border-cyan-400/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="text-3xl font-black text-cyan-400 sm:text-4xl">
                {stat.value}
              </div>

              <div className="mt-2 text-xs uppercase tracking-wider text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-400">
            ABOUT ME
          </p>

          <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Turning Ideas Into{" "}
            <span className="text-cyan-400">
              Real Solutions
            </span>
          </h2>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-lg leading-8 text-slate-300">
              I am{" "}
              <span className="font-semibold text-white">
                Mohammed Khan
              </span>
              , Founder of{" "}
              <a
                href="https://stackratechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-400 hover:underline"
              >
                STACKRA TECHNOLOGIES
              </a>
              , an Indian software, web and AI technology company focused on
              building practical digital solutions.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              I enjoy building modern websites, business management systems,
              AI-powered applications and digital platforms that help
              businesses work smarter and grow faster.
            </p>

            <p className="mt-5 leading-7 text-slate-400">
              My goal is simple: understand a real-world problem, design the
              right technology solution and turn the idea into a useful,
              reliable product.
            </p>

            {/* Strengths */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-cyan-400/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <Icon
                      size={28}
                      className="mb-4 text-cyan-400"
                    />

                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}

            </div>

            {/* Button */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                More About Me
                <ExternalLink size={16} />
              </a>
            </div>

          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="relative">

            <div className="rounded-3xl border border-cyan-400/20 bg-white/[0.025] p-6 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">

              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  Founder Profile
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Mohammed Khan
                </h3>
              </div>

              <div className="space-y-1">

                {profile.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 border-t border-white/5 py-4"
                    >
                      <Icon
                        size={18}
                        className="shrink-0 text-cyan-400"
                      />

                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm text-slate-200">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Socials */}
              <div className="mt-5 flex gap-3 border-t border-white/5 pt-5">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-white/[0.03] text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}

              </div>

            </div>

            {/* Quote Card */}
            <div className="mt-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-7">

              <p className="text-lg font-medium leading-8 text-slate-200">
                "Technology is not just my skill,
                <span className="block text-cyan-400">
                  it is my purpose."
                </span>
              </p>

              <div className="mt-6 h-px w-10 bg-cyan-400" />

              <p className="mt-4 text-sm font-semibold text-white">
                Mohammed Khan
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                Founder • STACKRA TECHNOLOGIES
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
