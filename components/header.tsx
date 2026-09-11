"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
    name: typeof links[number]["name"]
  ) => {
    event.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header className="fixed left-1/2 top-0 z-[999] -translate-x-1/2 sm:top-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative flex w-[min(31rem,calc(100vw-1rem))] items-center justify-between rounded-full border border-slate-200/80 bg-white/75 px-1.5 py-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-colors sm:w-[min(35rem,calc(100vw-1rem))] sm:justify-center sm:px-1 sm:py-2 dark:border-slate-700/80 dark:bg-slate-950/75 dark:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
      >
        <Link
          href="#home"
          aria-label="Go to home"
          onClick={(event) => handleLinkClick(event, "#home", "RP")}
          className="flex min-h-10 min-w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 text-[0.82rem] font-extrabold tracking-[0.22em] text-cyan-600 sm:hidden dark:text-cyan-300"
        >
          RP
        </Link>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-slate-700 transition hover:bg-slate-100 sm:hidden dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
        <ul id="site-navigation" className={clsx(
          "items-center justify-center gap-0.5 text-[0.72rem] font-medium text-slate-600 sm:flex sm:w-full sm:text-[0.8rem] dark:text-slate-300",
          isMenuOpen
            ? "absolute left-0 right-0 top-[calc(100%+0.5rem)] flex flex-col rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-xl backdrop-blur-2xl dark:border-slate-700/80 dark:bg-slate-950/95"
            : "hidden"
        )}>
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
                onClick={(event) => handleLinkClick(event, link.hash, link.name)}
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
