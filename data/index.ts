import { Github, Linkedin, Youtube } from "lucide-react";

const data = {
  home: {
    name: "Mahdi Hosseini",
    description:
      "FullStack Web Developer | #Next_js #React #Node_js #TypeScript Expert", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "#contact",
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
        link: "https://www.linkedin.com/in/#/",
        icon: Linkedin,
      },
      {
        name: "youtube",
        link: "https://www.youtube.com/#",
        icon: Youtube,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Tikkaa.com",
        description:
          "Tikkaa is one of the largest online language learning platforms in Iran, providing structured courses, interactive lessons, and progress tracking for thousands of students. The platform is built with a modern Next.js architecture to ensure fast performance and scalability. It includes features such as course management, user dashboards, secure payment integration, and responsive UI optimized for both desktop and mobile.\n\nTechnologies: Next.js, React.js, TypeScript, Tailwind CSS, Stripe API, PostgreSQL",
        image: "/projects-imgs/3.png",
        previewLink: "https://Tikkaa.com",
      },

      {
        id: 2,
        title: "E-commerce Platform",
        description:
          "A modern e-commerce platform designed for fast and seamless online shopping experiences. The project focuses on product browsing, shopping cart management, and a smooth checkout process. Special attention was given to performance optimization, responsive design, and scalable state management to handle complex product interactions and payments.\n\nTechnologies: Next.js, React.js, TypeScript, Tailwind CSS, Redux, Stripe API, Jest",
        image: "/projects-imgs/1.png",
        previewLink: "https://e-commerce-rtk.vercel.app/",
      },

      {
        id: 3,
        title: "Personal Portfolio Website",
        description:
          "My personal portfolio website designed to showcase my projects, skills, and professional experience as a frontend developer. The site focuses on clean UI, smooth animations, and modern web design principles. It is fully responsive, optimized for performance, and built to highlight projects with an engaging user experience.\n\nTechnologies: Next.js, React.js, TypeScript, CSS Modules, Framer Motion",
        image: "/projects-imgs/2.png",
        previewLink: "https://mahdihosseini.site",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "HTML5",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "CSS3",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "JavaScript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "TypeScript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "React",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "Tailwind CSS",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "Next.js",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "PostgreSQL",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "Vite",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "Git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "Docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "Figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "Firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "Markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 15,
        name: "MongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "madifrontend@gmail.com",
  },
};

export default data;
