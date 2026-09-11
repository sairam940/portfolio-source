"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-5xl scroll-mt-28 px-4 sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="section-shell rounded-[2rem] p-6 sm:p-8">
        <ul className="flex flex-wrap justify-center gap-3 text-base text-slate-700 dark:text-slate-200">
          {skillsData.map((skill, index) => (
            <motion.li
              className="pill rounded-full px-4 py-2.5 font-medium shadow-sm"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
