import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default:
      "Mahdi Hosseini | Fullstack Developer | AI Integration Specialist",
    template: "%s | Mahdi Hosseini",
  },
  description:
    "Senior Full Stack Developer specializing in Next.js, React, and AI Integration. Expert in building high-performance web applications with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "AI Integration",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Software Engineer",
    "Web Applications",
    "Performance Optimization",
    "Mahdi Hosseini",
  ],
  authors: [{ name: "Mahdi Hosseini" }],
  creator: "Mahdi Hosseini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahdihosseini.site",
    siteName: "Mahdi Hosseini | Fullstack Developer",
    title: "Mahdi Hosseini | Fullstack Developer",
    description:
      "Senior Full Stack Developer specializing in Next.js, React, and AI Integration. Building high-performance web applications.",
    images: [
      {
        url: "/imgs/profile.jpeg",
        width: 630,
        height: 630,
        alt: "Mahdi Hosseini - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahdi Hosseini | Fullstack Developer",
    description:
      "Senior Full Stack Developer specializing in Next.js, React, and AI Integration",
    images: ["/imgs/profile.jpeg"],
    creator: "@mahdihosseini",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mahdihosseini.site",
  },
  icons: {
    icon: "/imgs/profile.jpeg",
    apple: "/imgs/profile.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
