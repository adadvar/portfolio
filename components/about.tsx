"use client";

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
        Since 2020, I've developed frontend projects using{" "}
        <span className="font-medium">React and Next.js.</span>My experience
        includes technical support{" "}
        <span className="font-medium">(UNIQOSOFT) and CakePHP development</span>
        . Currently, I'm focused on
        <span className="font-medium"> Bargiino </span>a comprehensive worksheet
        platform for elementary students (grades 1-6).
      </p>
      <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js and laravel</span>. I am
        also familiar with TypeScript and Prisma. I am always looking to learn
        new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
