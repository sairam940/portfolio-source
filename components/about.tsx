"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 w-full max-w-5xl scroll-mt-28 px-4 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-left text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              My journey in software engineering began with a simple belief: <span className="font-medium italic text-slate-900 dark:text-white">“Great systems are built with simplicity, scalability, and reliability at their core.”</span>
            </p>
            <p>
              Over the past <span className="font-semibold text-slate-900 dark:text-white">10 years</span>, that belief has shaped my work from building automation solutions to leading end-to-end engineering initiatives that improve software delivery and system reliability.
            </p>
            <p>
              At <span className="font-semibold text-slate-900 dark:text-white">Amazon</span>, I’ve worked across cloud-native systems and platform engineering, addressing large-scale reliability, release quality, and automation challenges. Before that, at <span className="font-semibold text-slate-900 dark:text-white">Visa</span>, I modernized enterprise solutions by building automation that accelerated delivery without compromising quality.
            </p>
            <p>
              My approach combines deep technical expertise in <span className="font-semibold text-slate-900 dark:text-white">TypeScript, Python, Java, and cloud-native technologies</span> with a Master’s in Computer Science and a focus on AI-assisted engineering. I build systems that anticipate issues, reduce operational toil, and help teams deliver with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="metric-card group rounded-2xl p-4 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_20px_50px_-18px_rgba(59,130,246,0.45)]">
              <div className="text-3xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">10+</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Years experience</div>
            </div>
            <div className="metric-card group rounded-2xl p-4 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_20px_50px_-18px_rgba(59,130,246,0.45)]">
              <div className="text-3xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">20+</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">High-impact systems</div>
            </div>
            <div className="metric-card group rounded-2xl p-4 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_20px_50px_-18px_rgba(59,130,246,0.45)]">
              <div className="text-3xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">40%</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Faster regression cycles</div>
            </div>
            <div className="metric-card group rounded-2xl p-4 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_20px_50px_-18px_rgba(59,130,246,0.45)]">
              <div className="text-3xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">AI</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Assisted engineering</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
