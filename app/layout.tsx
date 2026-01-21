// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import ThemeWrapper from "./theme-wrapper";


export const metadata: Metadata = {
  /* -------------------- BASIC SEO -------------------- */
  title: "Mohammad Khan | Full Stack Developer",
  description:
    "Mohammad Khan is a Full Stack Developer specializing in MERN stack and Next.js. I build fast, scalable, and modern web applications.",

  keywords: [
    "Mohammad Khan",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Software Engineer",
  ],

  authors: [{ name: "Mohammad Khan" }],
  creator: "Mohammad Khan",

  /* -------------------- CANONICAL BASE -------------------- */
  metadataBase: new URL("https://mohammedkhan.dev"),

  /* -------------------- OPEN GRAPH -------------------- */
  openGraph: {
    title: "Mohammad Khan | Full Stack Developer",
    description:
      "Professional portfolio of Mohammad Khan – MERN & Next.js Developer.",
    url: "https://mohammedkhan.dev",
    siteName: "Mohammad Khan Portfolio",
    images: [
      {
        url: "/profile/profile2.png", // MUST be inside /public
        width: 1200,
        height: 630,
        alt: "Mohammad Khan Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* -------------------- TWITTER (X) -------------------- */
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Khan | Full Stack Developer",
    description:
      "Professional portfolio of Mohammad Khan – MERN & Next.js Developer.",
    images: ["/profile/profile2.png"],
  },

  /* -------------------- ROBOTS -------------------- */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* -------- PERSON SCHEMA WITH SOCIAL LINKS -------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammad Khan",
              url: "https://mohammedkhan.dev",
              image: "https://mohammedkhan.dev/profile/profile2.png",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://wa.me/919542355897", // WhatsApp
                "https://www.linkedin.com/in/mohammed-khan-7905a621a/",
                "https://github.com/MohammedKhan-star",
                "https://www.youtube.com/@Engineermohammedkhan",
                "https://twitter.com/mohammedkhan_dev",
                "https://www.instagram.com/mohammedkhan.dev/",
              ],
            }),
          }}
        />
      </head>

      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      
      </body>
    </html>
  );
}
