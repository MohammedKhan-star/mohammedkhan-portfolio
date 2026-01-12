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
    if (formData.honeypot) return; // spam protection

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
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("Oops! Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get In Touch
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300">
          Reach me directly at{" "}
          <a
            href="mailto:mohammedkhan20019@gmail.com"
            className="text-blue-600 hover:underline"
          >
            mohammedkhan20019@gmail.com
          </a>{" "}
          or through the form below.
        </p>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-4 mt-4">
          <a
            href="https://github.com/MohammedKhan-star"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-khan-7905a621a/"
            target="_blank"
            rel="noopener noreferrer"
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
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
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
            className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {status && (
            <p
              className={`mt-2 ${
                status.includes("successfully")
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
