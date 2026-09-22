import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mahdihosseini.site"),

  title: {
    default: "Mahdi Hosseini | Software Engineer | Frontend Engineer",
    template: "%s | Mahdi Hosseini",
  },

  description:
    "Mahdi Hosseini is a Software Engineer and Frontend Engineer specializing in React, Next.js, TypeScript, and modern web application development. Focused on building scalable, high-performance, accessible, and production-ready digital products.",

  keywords: [
    "Mahdi Hosseini",
    "Mahdi Hosseini Portfolio",
    "Software Engineer",
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Product Engineer",
    "Full Stack Engineer",
    "Web Performance",
    "Accessible Web Applications",
    "Scalable Web Applications",
    "AI-assisted Software Engineering",
    "AI Integration",
    "Software Engineer",
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
    siteName: "Mahdi Hosseini | Software Engineer | Frontend Engineer",

    title: "Mahdi Hosseini | Software Engineer | Frontend Engineer",

    description:
      " Software Engineer | Frontend Engineer specializing in React, Next.js, TypeScript, performance, accessibility, and scalable web applications.",

    images: [
      {
        url: "/imgs/mahdi-hosseini.jpeg",
        width: 800,
        height: 800,
        alt: "Mahdi Hosseini | Software Engineer | Frontend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mahdi Hosseini | Software Engineer | Frontend Engineer",

    description:
      "Software Engineer | Frontend Engineer specializing in React, Next.js, TypeScript, and scalable, high-performance web applications.",

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
  jobTitle: "Ai Software Engineer | Frontend Engineer",
  sameAs: [
    // "https://www.linkedin.com/in/your-profile",
    "https://github.com/madifrontend",
  ],
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
