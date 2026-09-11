"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & { url?: string };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-5 last:mb-0"
    >
      <section className="section-shell relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-5 transition hover:-translate-y-0.5 sm:p-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li
                  className="pill rounded-full px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.08em]"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950 dark:shadow-slate-950/60">
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="h-[220px] w-full rounded-[1.2rem] object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
