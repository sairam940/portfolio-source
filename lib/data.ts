import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import testAIImg from "@/public/TestAI.jpg";
import crmTestImg from "@/public/crmTest.jpg";
import cloudTestImg from "@/public/cloudTesting.jpg";
import wineClassImg from "@/public/wineClass.jpg";
import somsImg from "@/public/soms.jpg";
import appleLogo from "@/public/apple_logo.png";
import amazonLogo from "@/public/amazon_logo.jpg";
import capgeminiLogo from "@/public/capgemini_logo.jpg";
import changeHealthcareLogo from "@/public/change_healthcare_logo.jpg";
import tcsLogo from "@/public/tcs_logo.jpg";
import visaLogo from "@/public/visa_logo.jpg";
import usmLogo from "@/public/usm_logo.jpg";
import sastraLogo from "@/public/sastra_logo.jpg";

export const links = [
  {
    name: "RP",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Developer in Test",
    company: "Apple",
    location: "Austin, TX",
    logo: appleLogo,
    description:
      "• Leading release validation on storage systems and distributed services for various devices  \n • Owning release confidence by architecting and executing automation signals.\n• Identified process gaps and developed automation solutions and internal tools to improve efficiency and reduce repetitive work.",
    icon: React.createElement(FaReact),
    date: "Jun 2026 - Present",
  },
  {
    title: "System Development Engineer II",
    company: "Amazon",
    location: "Austin, TX",
    logo: amazonLogo,
    description:
      "• Architected and scaled cloud-native infrastructure for distributed microservices serving millions of customers across AWS\n• Led quality strategy across platform services by building scalable automation frameworks for backend, web, mobile, and Fire TV\n• Built high-performance automation frameworks in TypeScript and Python, reducing regression time by ~40%\n• Influenced architecture, observability, deployment validation, and resiliency with service owners\n• Integrated AI-assisted engineering workflows using Kiro AI and Cline, improving productivity by ~20%\n• Owned quality strategy for multiple Fire TV launches, delivering defect-free releases across global regions",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Jun 2026",
  },
  {
    title: "Senior Software Test Engineer",
    company: "Visa",
    location: "Austin, TX",
    logo: visaLogo,
    description:
      "• Led quality engineering for enterprise financial services applications processing payment transactions\n• Spearheaded QA strategy for large-scale CRM migration from Salesforce to Dynamics with zero production defects\n• Built comprehensive CI/CD integration using Azure DevOps and designed automated test suites implementing BDD practices, reducing regression cycle time by 35%.\n • Automated batch processing engine and portal applications to deliver high quality, defect-free releases. ",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - May 2022",
  },
  {
    title: "Software Development Engineer Test II",
    company: "Change Healthcare (via Innova Solutions)",
    location: "Nashville, TN",
    logo: changeHealthcareLogo,
    description:
      "• Optimized healthcare application testing architecture and led offshore development teams\n• Reduced overall testing time by 30% through Serenity BDD framework implementation\n• Built scalable test frameworks for Java Spring Boot microservices on AWS cloud infrastructure",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2019 - Nov 2019",
  }, 
  {
    title: "Graduate Research Assistant",
    company: "University of Southern Mississippi",
    location: "Hattiesburg, MS",
    logo: usmLogo,
    description:
      "• Developed innovative mobile and voice applications enhancing university student experience\n• Built Alexa skills using AWS and Node.js, increasing university app engagement by 33%\n• Solved critical navigation issues through campus mapping solutions",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2017 - Nov 2018",
  },
  {
    title: "Software Development Engineer in Test",
    company: "Capgemini",
    location: "Bengaluru, KA, India",
    logo: capgeminiLogo,
    description:
      "• Led automation initiatives across multiple client projects (T-Mobile & Thomson Reuters)\n• Reduced test cycle time by 50% through comprehensive web application automation\n• Implemented batch test execution using TestNG and Maven, significantly improving defect identification accuracy\n •Automated performance testing workflows saving ~8 hours per test cycle through tooling and process improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2015 - Jun 2017",
  },
  {
    title: "Test Automation Engineer",
    company: "Tata Consultancy Services",
    location: " Chennai, TN, India",
    logo: tcsLogo,
    description:
      "• Delivered enterprise-scale automation solutions for Liberty Mutual insurance applications\n• Achieved $8,000 annual cost savings by implementing Selenium WebDriver framework replacing legacy HP-QTP tools\n• Automated 650+ test scripts, reducing manual testing overhead while accelerating release velocity.\n• Optimized regression suites executing 1,050+ automated tests, reducing failure rates by ~8% through refactoring. ",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2013 - Dec 2015",
  },
] as const;

export const educationData = [
  {
    title: "Master of Science",
    company: "University of Southern Mississippi",
    location: "Hattiesburg, MS",
    logo: usmLogo,
    description:
      "Built a strong foundation in advanced computer science concepts, software engineering practices, and applied research in computing systems.",
    date: "2017 - 2018",
  },
  {
    title: "Bachelor of Technology",
    company: "Sastra University",
    location: "Thanjavur, India",
    logo: sastraLogo,
    description:
      "Focused on computer science fundamentals, software development methodologies, algorithms, and data structures.",
    date: "2010 - 2014",
  },
] as const;

export const projectsData = [
  {
    title: "AI-Powered Test Automation Framework",
    description:
      "Enterprise test automation frameworks integrating AI tools for FireTV OS and Global engineering services testing across multiple AWS regions.",
    tags: ["Typescript", "Python", "AWS", "AI", "Playwright", "Mozart's RPA"],
    imageUrl: testAIImg,
  },
  {
    title: "Enterprise CRM Testing Suite",
    description:
      "Comprehensive testing solutions for salesforce to Dynamics migration with automated BDD test suites.",
    tags: ["C#", "Azure DevOps", "Rest APIs", "Dynamics", "EasyRepro"],
    imageUrl: crmTestImg,
  },
  {
    title: "Cloud-Native Microservices Testing",
    description:
      "Scalable test frameworks for Java Spring Boot microservices with CI/CD pipeline integration.",
    tags: ["Java", "Selenium", "Serenity BDD", "AWS", "Jenkins", "Docker"],
    imageUrl: cloudTestImg, 
  },
  {
    title: "Wine Classification Neural Network",
    description:
      "Multilayer neural network for wine variety classification using backpropagation algorithm.",
    tags: ["Java", "Neuroph Framework", "Data Analytics", "Machine Learning"],
    imageUrl: wineClassImg,
    url: "https://github.com/sairam940/wineClassificationNeuralNetwork",
  },
  {
    title: "Smart Online Exam System",
    description:
      "Full-stack web application for automated test scheduling and grading with performance analytics.",
    tags: ["JavaScript", "Ajax", "Bootstrap", "MySQL", "HTML5", "JSP"],
    imageUrl: somsImg,
    url: "https://github.com/sairam940/SmartOnlineTest",
  },
] as const;

export const skillsData = [
  "AWS",
  "API Testing",
  "Azure DevOps",
  "BDD/TDD",
  "CI/CD",
  "Data Analysis",
  "Distributed Systems Testing",
  "Docker",
  "Embedded Systems",
  "End-to-End Automation",
  "Firmware Validation",
  "Framework Design",
  "Git",
  "Java",
  "JavaScript",
  "Jenkins",
  "JIRA",
  "Kubernetes",
  "Linux",
  "Mobile Testing",
  "NAND Flash",
  "Performance Testing",
  "Playwright",
  "Python",
  "Radar",
  "React",
  "Selenium",
  "SOAP/REST APIs",
  "Splunk",
  "SQL",
  "System Validation",
  "Tableau",
  "Test Automation",
  "TestNG",
  "TypeScript",
  "UI Testing",
] as const;
