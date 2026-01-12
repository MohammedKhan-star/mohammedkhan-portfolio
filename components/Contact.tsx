"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("Message sent successfully! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
        setLoading(false);
      })
      .catch(() => {
        setStatus("Oops! Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="
        relative py-24 px-6 overflow-hidden
        bg-gradient-to-br from-slate-900 via-gray-900 to-black
        dark:from-gray-950 dark:via-gray-900 dark:to-black
      "
    >
      {/* 🔥 Decorative glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <p className="text-gray-300 mb-10">
          Reach me directly at{" "}
          <a
            href="mailto:mohammedkhan20019@gmail.com"
            className="text-blue-400 hover:underline"
          >
            mohammedkhan20019@gmail.com
          </a>{" "}
          or send a message below.
        </p>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {[
            {
              icon: <Github size={18} />,
              label: "GitHub",
              link: "https://github.com/MohammedKhan-star",
            },
            {
              icon: <Linkedin size={18} />,
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/mohammed-khan-7905a621a/",
            },
            {
              icon: <Mail size={18} />,
              label: "Mail",
              link: "https://mail.google.com/mail/?view=cm&fs=1&to=mohammedkhan20019@gmail.com",
            },
            {
              icon: <Download size={18} />,
              label: "Resume",
              link: "/resume.pdf",
              download: true,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              download={item.download}
              className="
                px-6 py-3 rounded-xl border border-white/20
                flex items-center gap-2
                text-white
                bg-white/5 backdrop-blur-md
                hover:bg-white/10 transition
              "
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            bg-white/90 dark:bg-gray-800/80
            backdrop-blur-lg
            rounded-2xl p-8
            shadow-xl
            flex flex-col gap-4 text-left
          "
        >
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />

          <input
            type="email"
            name="email"
            placeholder="hello@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Hello! What's up?"
            value={formData.message}
            onChange={handleChange}
            required
            className="input"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              bg-blue-600 text-white py-3 rounded-xl
              hover:bg-blue-700 transition
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-sm text-center ${
                status.includes("success")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
