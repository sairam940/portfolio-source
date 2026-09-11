"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed left-1/2 top-0 z-[999] -translate-x-1/2 sm:top-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex w-[min(31rem,calc(100vw-0.75rem))] items-center justify-center rounded-full border border-slate-200/80 bg-white/75 px-1 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-colors sm:w-[min(35rem,calc(100vw-1rem))] dark:border-slate-700/80 dark:bg-slate-950/75 dark:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
        style={{ overflow: "hidden" }}
      >
        <ul className="flex w-full items-center justify-center gap-0.5 text-[0.72rem] font-medium text-slate-600 sm:gap-1 sm:text-[0.8rem] dark:text-slate-300">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "relative z-10 flex items-center justify-center rounded-full px-2 py-2 text-slate-600 transition hover:text-slate-900 sm:px-2.5 dark:text-slate-300 dark:hover:text-white",
                  {
                    "text-slate-900 dark:text-white": activeSection === link.name,
                  },
                  link.name === "RP" && "min-w-[3.2rem] rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-violet-500/15 px-3 text-[0.82rem] font-extrabold tracking-[0.22em] text-cyan-600 shadow-[0_0_20px_rgba(56,189,248,0.12)] sm:text-[0.9rem] dark:border-cyan-400/30 dark:from-cyan-500/20 dark:via-sky-500/10 dark:to-violet-500/15 dark:text-cyan-300"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/18 via-sky-500/10 to-violet-500/18 shadow-[0_0_20px_rgba(56,189,248,0.18)]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
