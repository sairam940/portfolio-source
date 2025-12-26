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
        My journey in quality engineering began with a simple belief: <span className="italic">"great software starts with exceptional testing"</span>. Over the past <span className="font-medium">10 years</span>, I've evolved from writing basic test scripts to architecting <span className="font-medium">AI-powered testing solutions</span> that serve millions of users.
      </p>

      <p>
        At <span className="font-medium">Amazon</span>, I lead the development of test automation frameworks for 
        <span className="font-medium"> Fire TV OS and Global Engineering Services</span>, integrating cutting-edge AI tools like 
        <span className="font-medium"> Amazon Q, Kiro AI</span> and  
        <span className="font-medium"> Cline</span> to achieve 
        <span className="font-medium"> 20% faster defect detection</span>. Previously at 
        <span className="font-medium"> Visa</span>, I spearheaded quality strategies for enterprise financial applications, delivering 
        <span className="font-medium"> zero-defect migrations</span> and reducing regression cycles by 
        <span className="font-medium">35%</span>.
      </p>

      <p>
        My approach combines deep technical expertise in 
        <span className="font-medium"> TypeScript, Python, and cloud technologies</span> with a 
        <span className="font-medium"> Master's degree in Computer Science</span>, specializing in 
        <span className="font-medium"> AI and machine learning</span>. 
        <span className="italic"> I don't just test software</span> I build intelligent systems that anticipate problems, automate solutions, and enable teams to deliver with confidence.
      </p>

      <p>
        <span className="italic">Today, I'm focused on the future of quality engineering:</span> leveraging AI to create 
        <span className="font-medium"> smarter, more efficient testing processes</span> that scale with modern software development.
      </p>
    </motion.section>
  );
}
