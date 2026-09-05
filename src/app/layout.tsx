import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteConfig } from "@/lib/site";
import { preloadScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const description =
  "Full Stack Developer and B.Tech student at NIT Jalandhar. Experienced in production web platforms serving 68,000+ users — Next.js 14, TypeScript, PostgreSQL, Prisma, Node.js, and automated payments.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description,
  keywords: [
    "Aryan Srivastava",
    "Full Stack Developer",
    "NIT Jalandhar",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Prisma",
    "Node.js",
    "Web Developer Intern",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description,
    creator: siteConfig.xHandle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloadScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
