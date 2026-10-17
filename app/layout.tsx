import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import data from "@/data";

const firaCode = Fira_Code({ subsets: ["latin"] });

const siteTitle = "Mahdi Hosseini | Software Engineer | Full-Stack";
const siteDescription =
  "Software engineer with 5+ years of experience building full-stack web products with Next.js, React, Node.js, NestJS and PostgreSQL. From AI-assisted development with tools like Cursor and Claude to CI/CD, Docker deployments, monitoring and performance.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahdihosseini.site"),

  title: {
    default: siteTitle,
    template: "%s | Mahdi Hosseini",
  },

  description: siteDescription,

  keywords: [
    "Mahdi Hosseini",
    "Mahdi Hosseini Portfolio",
    "Software Engineer",
    "Full-Stack Engineer",
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "DevOps",
    "CI/CD",
    "Docker",
    "GitLab CI",
    "Observability",
    "Web Performance",
    "Scalable Web Applications",
    "AI-Assisted Development",
    "Cursor AI",
    "Claude AI",
    "React Query",
    "Material UI",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Mahdi Hosseini",
      url: "https://mahdihosseini.site",
    },
  ],

  creator: "Mahdi Hosseini",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteTitle,

    title: siteTitle,

    description: siteDescription,

    images: [
      {
        url: "/imgs/mahdi-hosseini.jpeg",
        width: 800,
        height: 800,
        alt: siteTitle,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteTitle,

    description: siteDescription,

    images: ["/imgs/mahdi-hosseini.jpeg"],

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
    canonical: "/",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahdi Hosseini",
  url: "https://www.mahdihosseini.site/",
  image: "https://www.mahdihosseini.site/imgs/mahdi-hosseini.jpeg",
  jobTitle: "Software Engineer",
  description: siteDescription,
  knowsAbout: data.technologies.skills.map((skill) => skill.name),
  sameAs: data.sidebar.links.map((link) => link.link).filter(Boolean),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
