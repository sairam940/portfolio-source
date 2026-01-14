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
  My journey in software engineering began with a simple belief: <span className="italic">"great systems start with reliable, scalable solutions"</span>. Over the past <span className="font-medium">10 years</span>, I've evolved from writing test scripts to architecting <span className="font-medium">AI-powered frameworks</span> that serve millions of users across distributed systems.
</p>

<p className="mb-3">
  At <span className="font-medium">Amazon</span>, I design and lead the development of automation frameworks for <span className="font-medium">Fire TV OS and Global Engineering Services</span>, integrating AI tools like <span className="font-medium">Amazon Q, Kiro AI</span> and <span className="font-medium">Cline</span> to achieve <span className="font-medium">20% faster defect detection</span> and ensure system reliability. Previously at <span className="font-medium">Visa</span>, I drove quality and automation strategies for enterprise financial applications, delivering <span className="font-medium">zero-defect migrations</span> and reducing regression cycles by <span className="font-medium">35%</span>.
</p>

<p className="mb-3">
  My approach combines deep technical expertise in <span className="font-medium">TypeScript, Python, Java, and cloud-native technologies</span> with a <span className="font-medium">Master's degree in Computer Science</span>, specializing in <span className="font-medium">AI and machine learning</span>. I focus on building intelligent systems that anticipate problems, automate processes, and enable teams to deliver with confidence.
</p>

<p>
  <span className="italic">Today, I'm focused on the future of software quality and reliability:</span> leveraging AI and scalable automation to improve <span className="font-medium">system resilience</span>, accelerate <span className="font-medium">CI/CD pipelines</span>, and enhance <span className="font-medium">distributed software delivery</span>.
</p>
    </motion.section>
  );
}
