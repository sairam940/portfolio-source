import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import testAIImg from "@/public/TestAI.jpg";
import crmTestImg from "@/public/crmTest.jpg";
import cloudTestImg from "@/public/cloudTesting.jpg";
import wineClassImg from "@/public/wineClass.jpg";
import somsImg from "@/public/soms.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "System Dev Engineer II (Technical Lead)",
    company: "Amazon",
    location: "Austin, TX",
    description:
      "Building scalable automation and quality solutions for cloud-native microservices serving millions of users. Leading CI/CD quality pipelines and end-to-end automation across global Fire TV OS systems. Integrating AI-powered testing tools (Amazon Q, Kiro AI, Cline) to accelerate defect detection and system reliability. Mentoring cross-functional teams on BDD/TDD practices and distributed system testing.",
    icon: React.createElement(FaReact),
    date: "Dec 2025 - Present",
  },
  {
    title: "Lead Software QA Engineer",
    company: "Amazon",
    location: "Austin, TX",
    description:
      "Built TypeScript/Python automation frameworks reducing regression time by 40%. Implemented initial AI-powered testing integration (Amazon Q, Kiro AI, Cline).Developed foundational end-to-end automation pipelines for Fire TV OS. Mentored teams on BDD/TDD practices and automation adoption.",
    icon: React.createElement(FaReact),
    date: "May 2022 - Dec 2025",
  },
  {
    title: "Senior Software Enginer - Test",
    company: "Visa",
    location: "Austin, TX",
    description:
      "Led quality engineering for enterprise financial services applications processing payment transactions. Spearheaded QA strategy for large-scale CRM migration from Salesforce to Dynamics with zero production defects. Built comprehensive CI/CD integration using Azure DevOps and designed automated test suites implementing BDD practices, reducing regression cycle time by 35%.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2019 - May 2022",
  },
  {
    title: "Software Development Engineer in Test II",
    company: "Change Healthcare",
    location: "Nashville, TN",
    description:
      "Optimized healthcare application testing architecture and led offshore development teams. Reduced overall testing time by 30% through Serenity BDD framework implementation and built scalable test frameworks for Java Spring Boot microservices on AWS cloud infrastructure.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2019 - Dec 2019",
  }, 
  {
    title: "Application Developer- Graduate Reserach Assistant",
    company: "University of Southern Mississippi",
    location: "Hattiesburg, MS",
    description:
      "Developed innovative mobile and voice applications enhancing university student experience. Built Alexa skills using AWS and Node.js, increasing university app engagement by 33% based on Google Analytics while solving critical navigation issues through campus mapping solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2017 - Nov 2018",
  },
  {
    title: "Software Development Engineer in Test I (Associate Consultant)",
    company: "Capgemini",
    location: "Bengaluru, India",
    description:
      "Led automation initiatives across multiple client projects (T-Mobile & Thomson Reuters). Reduced test cycle time by 50% through comprehensive web application automation and implemented batch test execution using TestNG and Maven, significantly improving defect identification accuracy.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2015 - Jun 2017",
  },
  {
    title: "Test Automation Engineer (Systems Engineer)",
    company: "Tata Consultancy Services",
    location: " Chennai, India",
    description:
      "Delivered enterprise-scale automation solutions for Liberty Mutual insurance applications. Achieved $8,000 annual cost savings by implementing Selenium WebDriver framework replacing legacy HP-QTP tools and automated 450+ test scripts, reducing manual testing overhead while accelerating release velocity.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2013 - Dec 2015",
  },
  {
    title: "Master's in Computer Science",
    company: "University of Southern Mississippi",
    location: "Hattiesburg, MS",
    description:
      "Specialized in AI and machine learning. Enhanced my programming skills in Python, Java, and data structures while completing projects on natural language processing and predictive analytics.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2017 - Dec 2018",
  },
  {
    title: "Bachelor's in Technology",
    company: "Sastra University",
    location: "Thanjavur, India",
    description:
      "Strong foundation in computer science and software engineering principles including algorithms, data structures, and software development methodologies.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2009 - Jun 2013",
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
  "CI/CD",
  "Cline",
  "Cloud Shepherd",
  "Cypress",
  "Docker",
  "Git",
  "Hydra",
  "Javascript",
  "Jenkins",
  "Java",
  "JIRA",
  "Kiro AI",
  "Kubernetes",
  "Playwright",
  "Python",
  "React",
  "Selenium",
  "SOAP and REST APIs",
  "SQL",
  "TestNG",
  "TypeScript",
] as const;
