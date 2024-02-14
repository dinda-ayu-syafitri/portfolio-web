// import React from "react";

import { motion } from "framer-motion";
import { Badge } from "../../components/badge/Badge";

export const SkillsExpertise = () => {
  const variants = {
    initial: { opacity: 0, y: 100 },
    initialBadge: { opacity: 0, y: 50 },
    initialText: { opacity: 0, x: -100 },
    animateHeading: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    animateBadge: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        type: "spring",
        bounce: 0.5,
      },
    },
    animateText: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <section
      id="skills-expertise"
      className="flex flex-col md:flex-row justify-center justify-items-center items-center gap-10 text-lg"
    >
      <div className="flex justify-start md:justify-center justify-items-center flex-col w-full md:w-2/3 px-5 md:px-[15%] order-2 md:order-1 h-3/4 md:h-full">
        <motion.p
          className="mb-8"
          variants={variants}
          initial="initialText"
          whileInView={"animateText"}
        >
          Proficient in ReactJS, Vite, NextJS, and Laravel, I leverage these
          technologies to build dynamic and responsive websites that elevate the
          user experience.
        </motion.p>
        <motion.p
          variants={variants}
          initial="initialText"
          whileInView={"animateText"}
        >
          These are some of my skills and expertise
        </motion.p>
        <div>
          <motion.div
            className="flex justify-start gap-2 md:gap-5 flex-wrap mt-8"
            variants={variants}
            initial="initialBadge"
            whileInView={"animateBadge"}
          >
            <Badge variants={variants}>HTML</Badge>
            <Badge variants={variants}>CSS</Badge>
            <Badge variants={variants}>Javascript</Badge>
            <Badge variants={variants}>Typescript</Badge>
            <Badge variants={variants}>PHP</Badge>
            <Badge variants={variants}>Next.Js</Badge>
            <Badge variants={variants}>ReactJS</Badge>
            <Badge variants={variants}>Vite</Badge>
            <Badge variants={variants}>Laravel</Badge>
            <Badge variants={variants}>Git</Badge>
            <Badge variants={variants}>Vercel</Badge>
            <Badge variants={variants}>Supabase</Badge>
            <Badge variants={variants}>Tailwind CSS</Badge>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center justify-items-center bg-theme-off-white h-1/4 md:h-full w-full md:w-1/3 text-theme-dark-blue px-5 order-1 md:order-2 md:pt-0 pt-14">
        <motion.h3
          className="text-3xl md:text-6xl font-jura font-bold"
          variants={variants}
          initial="initial"
          whileInView={"animateHeading"}
        >
          Skills <br />& Expertise
        </motion.h3>
      </div>
    </section>
  );
};
