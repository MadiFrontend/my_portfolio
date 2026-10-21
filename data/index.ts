import { Github, Linkedin, Youtube } from "lucide-react";

const data = {
  home: {
    name: "Mahdi Hosseini",
    description:
      "Software Engineer | Full-Stack #Next_js #NestJS #AI #Docker #CI__CD", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
  },
  about: {
    intro:
      "I'm Mahdi Hosseini, a software engineer with 5+ years of experience building web products end to end. I work across the full stack: the interfaces users interact with, the APIs and databases behind them, and the CI/CD pipelines and servers that keep everything running in production. I also work daily with AI coding tools to ship faster without lowering code quality.",
    focusAreas: [
      {
        title: "Frontend",
        description:
          "I build fast, accessible and SEO-friendly interfaces with Next.js, React and TypeScript. For UI I use Tailwind CSS and Material UI, manage server state with React Query, and handle complex client state with Redux Toolkit when the product needs it.",
      },
      {
        title: "Backend",
        description:
          "I design and ship Node.js APIs with NestJS and Express, backed by PostgreSQL, MongoDB, Redis and Prisma. That covers auth, payments, background jobs, caching and the data models products actually depend on.",
      },
      {
        title: "AI-Assisted Development",
        description:
          "I use AI coding tools like Cursor and Claude as part of my day-to-day workflow: exploring codebases, drafting implementations, refactoring, reviewing diffs and debugging faster. The goal is higher shipping speed with the same engineering standards: readable code, solid architecture and production-ready results.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "I set up Dockerized environments, GitLab CI pipelines, Nginx reverse proxies and Linux/VPS deployments so releases are automated, repeatable and boring in the best way.",
      },
      {
        title: "Observability & Performance",
        description:
          "I use Prometheus, Grafana, Sentry and Lighthouse to measure what matters, catch regressions early, find bottlenecks and keep Core Web Vitals and API latency under control as traffic grows.",
      },
    ],
    principles: [
      "Own features from design to production, not just a single layer of the stack.",
      "Measure before optimizing: metrics, traces and user impact over guesswork.",
      "Use AI coding tools to move faster, then verify everything like a senior engineer would.",
      "Write code the next engineer can read, change and ship with confidence.",
    ],
    cta: {
      text: "Building a product or scaling an existing system?",
      label: "Let's talk",
      link: "#contact",
    },
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/madifrontend",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "", // add your LinkedIn profile URL to show this link
        icon: Linkedin,
      },
      {
        name: "youtube",
        link: "", // add your YouTube channel URL to show this link
        icon: Youtube,
      },
    ],
  },

  experience: {
    subtitle:
      "Roles where I owned features end to end — from UI to APIs, data and deployment.",
    jobs: [
      {
        id: 1,
        role: "Full-Stack Engineer",
        company: "Tikkaa",
        location: "Remote / Iran",
        period: "2023 — Present",
        type: "Full-time",
        bullets: [
          "Built and scaled core product features for one of Iran's largest online language-learning platforms serving thousands of students.",
          "Owned Next.js frontends and Node.js APIs for courses, dashboards, payments and progress tracking under real production traffic.",
          "Improved rendering performance, SEO and Core Web Vitals while keeping the learning experience fast on mobile and desktop.",
          "Set up Dockerized deployments, CI pipelines and observability so releases stayed repeatable and regressions were caught early.",
        ],
        tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Docker", "GitLab CI"],
      },
      {
        id: 2,
        role: "Frontend Engineer",
        company: "Freelance & Product Teams",
        location: "Remote",
        period: "2021 — 2023",
        type: "Contract",
        bullets: [
          "Delivered responsive, accessible UIs with React, Next.js and TypeScript for e-commerce and SaaS-style products.",
          "Implemented complex client state (Redux Toolkit / React Query), payment flows and Jest coverage for checkout-critical paths.",
          "Partnered with designers and backend engineers to ship features from wireframe to production without handoff gaps.",
          "Focused on predictable architecture so catalogs, carts and dashboards stayed maintainable as requirements grew.",
        ],
        tech: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Stripe", "Jest"],
      },
      {
        id: 3,
        role: "Software Engineer",
        company: "Independent Projects",
        location: "Remote",
        period: "2019 — 2021",
        type: "Full-time",
        bullets: [
          "Started shipping full web products end to end: interfaces, APIs, databases and basic VPS / Nginx deployments.",
          "Built reusable UI patterns and API contracts that made iteration faster across personal and client work.",
          "Learned production discipline early: readable code, solid data models and measuring performance before guessing.",
          "Grew into the full-stack workflow I use today — owning features from design through deploy.",
        ],
        tech: ["JavaScript", "Node.js", "Express", "MongoDB", "Linux", "Nginx"],
      },
    ],
  },
  projects: {
    subtitle:
      "Products I've designed, built, shipped and kept running in production.",
    projects: [
      {
        id: 1,
        title: "Tikkaa.com",
        description:
          "One of Iran's largest online language-learning platforms, serving thousands of students with structured courses, interactive lessons and progress tracking.\n\nI worked across the stack on a Next.js architecture built for speed and scale: course management, user dashboards, secure payment integration, responsive SEO-friendly UI, and the backend and data layer that keep learning progress reliable under real traffic.\n\nTechnologies: Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Node.js",
        image: "/projects-imgs/3.png",
        previewLink: "https://Tikkaa.com",
      },

      {
        id: 2,
        title: "E-commerce Platform",
        description:
          "A full shopping experience from product browsing to checkout, designed to feel fast on both desktop and mobile.\n\nBuilt with predictable, scalable state management for complex cart and product interactions, payment integration, Jest test coverage, and a strong focus on rendering performance so the store stays smooth as the catalog grows.\n\nTechnologies: Next.js, React, TypeScript, Redux Toolkit, Tailwind CSS, Stripe API, Jest",
        image: "/projects-imgs/1.png",
        previewLink: "https://e-commerce-rtk.vercel.app/",
      },

      {
        id: 3,
        title: "Personal Portfolio Website",
        description:
          "The site you're on: an IDE-inspired portfolio with an interactive terminal, typed code intro and motion-driven sections.\n\nFully responsive, statically optimized and SEO-ready with structured data. Built to present my work the way I build software: clear structure, performance first, and details that hold up in production.\n\nTechnologies: Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
        image: "/projects-imgs/2.png",
        previewLink: "https://mahdihosseini.site",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "TypeScript",
        category: "frontend",
        src: "/skills/typescript.svg",
        link: "https://www.typescriptlang.org/",
      },
      {
        id: 2,
        name: "JavaScript",
        category: "frontend",
        src: "/skills/javascript.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        id: 3,
        name: "React",
        category: "frontend",
        src: "/skills/react.svg",
        link: "https://react.dev/",
      },
      {
        id: 4,
        name: "Next.js",
        category: "frontend",
        src: "/skills/nextJS.svg",
        link: "https://nextjs.org/",
      },
      {
        id: 5,
        name: "Tailwind CSS",
        category: "frontend",
        src: "/skills/tailwind.svg",
        link: "https://tailwindcss.com/",
      },
      {
        id: 6,
        name: "Material UI",
        category: "frontend",
        src: "/skills/materialui.svg",
        link: "https://mui.com/",
      },
      {
        id: 7,
        name: "React Query",
        category: "frontend",
        src: "/skills/reactquery.svg",
        link: "https://tanstack.com/query",
      },
      {
        id: 8,
        name: "Redux",
        category: "frontend",
        src: "/skills/redux.svg",
        link: "https://redux.js.org/",
      },
      {
        id: 9,
        name: "Framer Motion",
        category: "frontend",
        src: "/skills/framermotion.svg",
        link: "https://www.framer.com/motion/",
      },
      {
        id: 10,
        name: "Node.js",
        category: "backend",
        src: "/skills/nodejs.svg",
        link: "https://nodejs.org/",
      },
      {
        id: 11,
        name: "NestJS",
        category: "backend",
        src: "/skills/nestjs.svg",
        link: "https://nestjs.com/",
      },
      {
        id: 12,
        name: "Express",
        category: "backend",
        src: "/skills/express.svg",
        link: "https://expressjs.com/",
      },
      {
        id: 13,
        name: "PostgreSQL",
        category: "backend",
        src: "/skills/postgresql.svg",
        link: "https://www.postgresql.org/",
      },
      {
        id: 14,
        name: "MongoDB",
        category: "backend",
        src: "/skills/mongoDB.svg",
        link: "https://www.mongodb.com/",
      },
      {
        id: 15,
        name: "Redis",
        category: "backend",
        src: "/skills/redis.svg",
        link: "https://redis.io/",
      },
      {
        id: 16,
        name: "Prisma",
        category: "backend",
        src: "/skills/prisma.svg",
        link: "https://www.prisma.io/",
      },
      {
        id: 17,
        name: "GraphQL",
        category: "backend",
        src: "/skills/graphql.svg",
        link: "https://graphql.org/",
      },
      {
        id: 18,
        name: "Zod",
        category: "backend",
        src: "/skills/zod.svg",
        link: "https://zod.dev/",
      },
      {
        id: 19,
        name: "Docker",
        category: "devops",
        src: "/skills/docker.svg",
        link: "https://www.docker.com/",
      },
      {
        id: 20,
        name: "GitLab CI",
        category: "devops",
        src: "/skills/gitlab.svg",
        link: "https://docs.gitlab.com/ee/ci/",
      },
      {
        id: 21,
        name: "Nginx",
        category: "devops",
        src: "/skills/nginx.svg",
        link: "https://nginx.org/",
      },
      {
        id: 22,
        name: "Linux",
        category: "devops",
        src: "/skills/linux.svg",
        link: "https://www.kernel.org/",
      },
      {
        id: 23,
        name: "Git",
        category: "devops",
        src: "/skills/git.svg",
        link: "https://git-scm.com/",
      },
      {
        id: 24,
        name: "Vercel",
        category: "devops",
        src: "/skills/vercel.svg",
        link: "https://vercel.com/",
      },
      {
        id: 25,
        name: "Jest",
        category: "devops",
        src: "/skills/jest.svg",
        link: "https://jestjs.io/",
      },
      {
        id: 26,
        name: "Prometheus",
        category: "observability",
        src: "/skills/prometheus.svg",
        link: "https://prometheus.io/",
      },
      {
        id: 27,
        name: "Grafana",
        category: "observability",
        src: "/skills/grafana.svg",
        link: "https://grafana.com/",
      },
      {
        id: 28,
        name: "Sentry",
        category: "observability",
        src: "/skills/sentry.svg",
        link: "https://sentry.io/",
      },
    ],
  },
  contact: {
    email: "madifrontend@gmail.com",
  },
};

export default data;
