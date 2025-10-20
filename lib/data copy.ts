import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bargiino from "@/public/bargiino.png";
import gameHub from "@/public/game-hub.jpg";
import fastPizza from "@/public/fast-pizza.png";

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
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Education",
    location: "Iran",
    description:
      "Bachelor Of Science, Qom University of Technology - Computer Software Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2012 - 2016",
  },
  {
    title: "Full-Stack Developer",
    location: "Iran, Tehran",
    description:
      "I worked as a full-stack developer for 2 years in 1 job at UNIQOSOFT. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Iran",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Laravel, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bargiino",
    description:
      "I've launched Bargino, a comprehensive platform for worksheets designed for students from first to sixth grade.",
    tags: ["React", "Next.js", "Laravel", "Tailwind", "Zustand"],
    imageUrl: bargiino,
    link: "https://bargiino.ir",
  },
  {
    title: "Game Hub",
    description:
      "I've developed Game Hub, a platform for discovering and browsing video games with search, filters, and infinite scroll.",

    tags: ["React", "TypeScript", "Chakra-UI", "React Query", "Zustand"],
    imageUrl: gameHub,
    link: "https://game-hub-eta-bice.vercel.app",
  },
  {
    title: "Fast Pizza",
    description:
      "Fast Pizza is a simple ordering app where users can customize their pizza orders, add priority, and track them easily—no login required!",

    tags: ["React", "React Router", "Tailwind", "Redux"],
    imageUrl: fastPizza,
    link: "https://fast-react-pizza-rho-two.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
  "Git",
  "Tailwind",
  "Prisma",
  "My SQL",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;
