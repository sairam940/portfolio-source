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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
<p className="mb-3">
  My journey in software engineering began with a simple belief: <span className="italic">"Great systems are built with simplicity, scalability, and reliability at their core."</span>. Over the past <span className="font-medium">10 years</span>, that belief has guided my growth from building automation solutions to <span className="font-medium">leading engineering initiatives</span>  that improve software delivery & system reliability.
</p>

<p className="mb-3">
  At <span className="font-medium">Amazon</span>, I worked across consumer products and backend services, leading large-scale engineering initiatives ranging from <span className="font-medium">cloud migrations and release engineering to automation strategy and service reliability.</span> Before that, <span className="font-medium">at Visa, </span> I helped modernize enterprise financial applications by <span className="font-medium"> building scalable automation solutions </span> that accelerated software delivery while <span className="font-medium"> maintaining high standards of quality</span>.
</p>

<p className="mb-3">
  My approach combines deep technical expertise in <span className="font-medium">TypeScript, Python, Java, and cloud-native technologies</span> with a <span className="font-medium">Master's degree in Computer Science</span>, specializing in <span className="font-medium">AI and machine learning</span>. I focus on building intelligent systems that anticipate problems, automate processes, and enable teams to deliver with confidence.
</p>

<p>
  <span className="italic">Today, I'm focused on designing resilient systems, improving engineering efficiency, and creating technology </span> that is scalable, maintainable, and built to last.
</p>
    </motion.section>
  );
}
