"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

import useCurSection from "@/hooks/use-cur-section";
import data from "@/data";

export default function ExperienceSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.25);

  return (
    <section
      ref={ref}
      id="experience"
      className="w-full py-12 my-32 bg-muted text-sm md:text-base"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative text-center mb-16">
          <Image
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20 w-[min(100%,480px)] h-auto object-cover"
            src="/svgs/grid.svg"
            alt=""
            width={480}
            height={200}
          />
          <h1 className="text-3xl md:text-5xl mb-4">
            <span className="text-gradient-primary">{"{ "}</span>
            Experience
            <span className="text-gradient-primary">{" }"}</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {data.experience.subtitle}
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div
            aria-hidden
            className="absolute left-[11px] md:left-[15px] top-3 bottom-3 w-px bg-border"
          />
          <ol>
            {data.experience.jobs.map((job, index) => (
              <ExperienceItem key={job.id} job={job} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

type Job = (typeof data.experience.jobs)[number];

function ExperienceItem({ job, index }: { job: Job; index: number }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.35 });

  return (
    <motion.li
      ref={itemRef}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="relative pl-10 md:pl-14 pb-12 last:pb-0"
    >
      <span className="absolute left-0 top-2 flex size-6 md:size-8 items-center justify-center rounded-full border bg-background shadow-sm">
        <span className="size-2.5 md:size-3 rounded-full bg-gradient-primary" />
      </span>

      <article className="rounded-2xl border bg-background p-5 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs md:text-sm text-muted-foreground font-mono mb-1">
              <span className="text-secondary">const</span> role ={" "}
              <span className="text-primary">&quot;{job.type}&quot;</span>;
            </p>
            <h2 className="text-xl md:text-2xl font-bold">{job.role}</h2>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 text-foreground">
                <Briefcase size={14} className="text-secondary shrink-0" />
                {job.company}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="shrink-0" />
                {job.location}
              </span>
            </div>
          </div>
          <time className="shrink-0 rounded-md border bg-muted px-3 py-1 text-xs md:text-sm font-mono text-muted-foreground w-fit">
            {job.period}
          </time>
        </div>

        <ul className="mt-5 space-y-2.5 text-muted-foreground">
          {job.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5">
              <span className="text-secondary font-mono shrink-0 select-none">
                {"//"}
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {job.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border bg-muted px-2.5 py-1 text-xs text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </motion.li>
  );
}
