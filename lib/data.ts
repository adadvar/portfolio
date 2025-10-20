import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import bargiino from "@/public/bargiino.png";
import gameHub from "@/public/game-hub.jpg";
import fastPizza from "@/public/fast-pizza.png";

export function getLinks(dict: any) {
  return [
    { name: dict.nav.home, hash: "#home" },
    { name: dict.nav.about, hash: "#about" },
    { name: dict.nav.projects, hash: "#projects" },
    { name: dict.nav.skills, hash: "#skills" },
    { name: dict.nav.experience, hash: "#experience" },
    { name: dict.nav.contact, hash: "#contact" },
  ] as const;
}

export function getExperiences(dict: any) {
  return [
    {
      title: dict.experience.education.title,
      location: dict.experience.education.location,
      description: dict.experience.education.description,
      icon: React.createElement(LuGraduationCap),
      date: dict.experience.education.date,
    },
    {
      title: dict.experience.uniqosoft.title,
      location: dict.experience.uniqosoft.location,
      description: dict.experience.uniqosoft.description,
      icon: React.createElement(CgWorkAlt),
      date: dict.experience.uniqosoft.date,
    },
    {
      title: dict.experience.freelance.title,
      location: dict.experience.freelance.location,
      description: dict.experience.freelance.description,
      icon: React.createElement(FaReact),
      date: dict.experience.freelance.date,
    },
  ] as const;
}

export function getProjects(dict: any) {
  return [
    {
      title: dict.projects.bargiino.title,
      description: dict.projects.bargiino.description,
      tags: ["React", "Next.js", "Laravel", "Tailwind", "Zustand"],
      imageUrl: bargiino,
      link: "https://bargiino.ir",
    },
    {
      title: dict.projects.gamehub.title,
      description: dict.projects.gamehub.description,
      tags: ["React", "TypeScript", "Chakra-UI", "React Query", "Zustand"],
      imageUrl: gameHub,
      link: "https://game-hub-eta-bice.vercel.app",
    },
    {
      title: dict.projects.fastpizza.title,
      description: dict.projects.fastpizza.description,
      tags: ["React", "React Router", "Tailwind", "Redux"],
      imageUrl: fastPizza,
      link: "https://fast-react-pizza-rho-two.vercel.app",
    },
  ] as const;
}

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
