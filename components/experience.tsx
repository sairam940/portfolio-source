"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="mb-28 w-full max-w-[75rem] scroll-mt-28 px-4 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "rgba(15, 23, 42, 0.12)" : "rgba(148, 163, 184, 0.25)"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "rgba(255, 255, 255, 0.75)" : "rgba(15, 23, 42, 0.8)",
                boxShadow: "0 22px 48px -26px rgba(15, 23, 42, 0.28)",
                border: theme === "light" ? "1px solid rgba(15, 23, 42, 0.08)" : "1px solid rgba(148, 163, 184, 0.15)",
                textAlign: "left",
                padding: "1.4rem 1.8rem",
                borderRadius: "1.3rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              className="group hover:-translate-y-0.5"
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid rgba(255,255,255,0.9)"
                    : "0.4rem solid rgba(15, 23, 42, 0.8)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#0f172a" : "#e2e8f0",
                color: theme === "light" ? "white" : "#0f172a",
                fontSize: "1.45rem",
                boxShadow: "0 0 0 6px rgba(59,130,246,0.08)",
              }}
            >
              <div className="mb-2 flex items-center gap-3">
                {item.logo && (
                  <div
                    className={
                      item.company === "Apple"
                        ? "flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-300 dark:bg-white"
                        : item.company === "Tata Consultancy Services" || item.company === "Change Healthcare (via Innova Solutions)"
                          ? "flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900"
                          : "flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900"
                    }
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={item.company === "Apple" ? 48 : item.company === "Tata Consultancy Services" || item.company === "Change Healthcare (via Innova Solutions)" ? 56 : 48}
                      height={item.company === "Apple" ? 48 : item.company === "Tata Consultancy Services" || item.company === "Change Healthcare (via Innova Solutions)" ? 56 : 48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <h3 className="whitespace-nowrap text-lg font-semibold capitalize text-slate-900 dark:text-white">{item.title}</h3>
              </div>

              <p className="!mt-0 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                {item.company && (
                  <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-700 ring-1 ring-sky-200 transition-all duration-200 group-hover:bg-sky-200 group-hover:text-sky-800 dark:bg-sky-400/10 dark:text-sky-200 dark:ring-sky-300/20 dark:group-hover:bg-sky-300/20 dark:group-hover:text-white">
                    {item.company === "Change Healthcare (via Innova Solutions)"
                      ? "Change Healthcare"
                      : item.company}
                  </span>
                )}
                {item.company && item.location && (
                  <span className="font-normal text-slate-500 dark:text-slate-400">•</span>
                )}
                {item.location && (
                  <span className="font-normal text-slate-500 dark:text-slate-400">{item.location}</span>
                )}
              </p>

              <ul className="!mt-3 list-none space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                {item.description.split("\n").map((line, idx) => (
                  <li key={idx} className="pl-0">
                    {line}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
