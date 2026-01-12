// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ThemeWrapper from "./theme-wrapper";

export const metadata: Metadata = {
  title: "Mohammad Khan | Full Stack Developer",
  description:
    "Mohammad Khan is a Full Stack Developer specializing in MERN stack and Next.js. I build fast, scalable, modern web applications.",

  keywords: [
    "Mohammad Khan",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Mohammad Khan" }],
  creator: "Mohammad Khan",

  openGraph: {
    title: "Mohammad Khan | Full Stack Developer",
    description:
      "Professional portfolio of Mohammad Khan – MERN & Next.js Developer.",
    url: "https://mohammedkhan.dev",
    siteName: "Mohammad Khan Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Khan Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammad Khan | Full Stack Developer",
    description:
      "Professional portfolio of Mohammad Khan – MERN & Next.js Developer.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
