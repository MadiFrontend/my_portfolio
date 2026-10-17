"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import profile from "@/public/imgs/mahdi-hosseini.jpeg";
import data from "@/data";

export default function AboutSection() {
  const { about } = data;
  const ref = useRef(null);
  useCurSection(ref);
  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-32 bg-muted text-sm md:text-base"
    >
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>

      <div className="flex gap-9 items-center flex-col  w-10/12 mx-auto p-5 rounded-lg container">
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-full size-[200px] bg-gradient-primary p-0.5"
          >
            <Image
              className="size-full rounded-full grayscale-0 transition-all object-cover"
              width={600}
              height={600}
              alt="Mahdi Hosseini | Software Engineer | Full-Stack"
              src={profile}
            />
          </motion.div>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold">
            <span className="text-secondary">{"< "}</span>

            <span className="text-muted-foreground">Who am I</span>
            <span className="text-secondary">{" />"}</span>
          </h2>
          <motion.div
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
            className="text-muted-foreground text-left space-y-6"
          >
            <p>{about.intro}</p>

            <div>
              <h3 className="font-semibold text-foreground mb-2">
                What I work on
              </h3>
              <ul className="space-y-2">
                {about.focusAreas.map((area) => (
                  <li key={area.title}>
                    <span className="text-secondary">{area.title}</span>
                    {" — "}
                    {area.description}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">How I work</h3>
              <ul className="space-y-1">
                {about.principles.map((principle) => (
                  <li key={principle}>
                    <span className="text-secondary">{"> "}</span>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              {about.cta.text}{" "}
              <a href={about.cta.link} className="text-primary hover:underline">
                {about.cta.label} →
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
