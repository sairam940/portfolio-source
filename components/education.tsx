"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section id="education" ref={ref} className="mb-28 w-full max-w-5xl scroll-mt-28 px-4 sm:mb-40">
      <SectionHeading>Education</SectionHeading>

      <div className="grid gap-5 md:grid-cols-2">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="section-shell rounded-[1.75rem] p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              {item.logo && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={48}
                    height={48}
                    loading="lazy"
                    sizes="48px"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">
                    {item.date}
                  </span>
                </div>

                <p className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-700 ring-1 ring-sky-200 transition-all duration-200 hover:bg-sky-200 hover:text-sky-800 dark:bg-sky-400/10 dark:text-sky-200 dark:ring-sky-300/20 dark:hover:bg-sky-300/20 dark:hover:text-white">
                    {item.company}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">•</span>
                  <span className="font-normal text-slate-500 dark:text-slate-400">{item.location}</span>
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
