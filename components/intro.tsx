"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("RP", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 w-full max-w-6xl scroll-mt-[100rem] px-3 pb-10 pt-6 sm:mb-28 sm:px-4 sm:pb-12 sm:pt-8"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="mb-5 flex items-center gap-3 text-base font-medium text-slate-600 sm:mb-6 sm:gap-4 dark:text-slate-300">
            <div className="relative">
              <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-slate-300/50 dark:border-slate-800 dark:shadow-slate-950/50 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                <Image
                  src="/my-photo.png"
                  alt="Ram Pullabhotla portrait"
                  width={200}
                  height={200}
                  quality={100}
                  priority={true}
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 text-2xl">👋</span>
            </div>
            <span className="text-lg sm:text-2xl">Hi, I’m Ram</span>
          </div>

          <h1 className="max-w-2xl text-2.5xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.08]">
            Senior Software Engineer
            <span className="mt-2 block text-sm font-medium tracking-[-0.02em] text-slate-600 dark:text-slate-300 sm:text-xl lg:text-[1.55rem] lg:leading-[1.35]">
              {" "}Building resilient systems, automation, and AI-assisted products.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            I bring <span className="font-semibold text-slate-900 dark:text-white">10+ years</span> of experience in distributed systems,
            cloud-native engineering, and scalable automation to help teams ship faster with higher confidence.
          </p>

          <motion.div
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus:scale-105 dark:bg-slate-100 dark:text-slate-900"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here
              <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
            </Link>

            <a
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              href="/Ram_Pullabhotla_Sr SW Engineer_Automation_Resume.pdf"
              download
            >
              Download Resume
              <HiDownload className="opacity-70 transition group-hover:translate-y-1" />
            </a>

            <div className="ml-0 flex items-center gap-3 sm:ml-2">
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-950 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500"
                href="https://www.linkedin.com/in/sai-ram-pullabhotla/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-950 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500"
                href="https://github.com/sairam940"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithubSquare />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="section-shell rounded-[2rem] p-4 sm:p-5"
        >
          <div className="code-block rounded-[1.5rem] p-4 font-mono text-sm">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="text-sky-300">{'const profile = {'}</div>
              <div className="pl-4 text-slate-200">{'role: "Senior Software Engineer",'}</div>
              <div className="pl-4 text-slate-200">{'focus: ["Cloud", "Automation", "AI"],'}</div>
              <div className="pl-4 text-slate-200">{'impact: "10+ years of building scalable systems",'}</div>
              <div className="text-sky-300">{'};'}</div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2">
                <span className="text-slate-300">System Health</span>
                <span className="font-semibold text-emerald-400">98.7%</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2">
                <span className="text-slate-300">Automation Coverage</span>
                <span className="font-semibold text-sky-400">87%</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2">
                <span className="text-slate-300">Release Confidence</span>
                <span className="font-semibold text-violet-400">High</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
