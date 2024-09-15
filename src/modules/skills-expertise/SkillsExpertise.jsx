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
      <div className="flex justify-start md:justify-center justify-items-center flex-col w-full md:w-2/3 px-5 md:px-[10%] order-2 md:order-1 h-3/4 md:h-full">
        <motion.p
          className="mb-8"
          variants={variants}
          initial="initialText"
          whileInView={"animateText"}
        >
          Proficient in these technologies, I leverage them to build impactful user-centric software.
        </motion.p>
        {/* <motion.p
          variants={variants}
          initial="initialText"
          whileInView={"animateText"}
        >
          These are some of my skills and expertise
        </motion.p> */}

<div>
        {/* <motion.p
        className="mt-6 mb-4 font-bold text-2xl"
          variants={variants}
          initial="initialText"
          whileInView={"animateText"}
        >
          iOS and Apple Platform Development
        </motion.p> */}
          <motion.div
            className="flex justify-start gap-2 md:gap-5 flex-wrap"
            variants={variants}
            initial="initialBadge"
            whileInView={"animateBadge"}
          >
            <Badge size="sm" variants={variants}>Swift</Badge>
            <Badge size="sm" variants={variants}>UIKit</Badge>
            <Badge size="sm" variants={variants}>SwiftUI</Badge>
            <Badge size="sm" variants={variants}>Swift Data</Badge>
            <Badge size="sm" variants={variants}>Core Data</Badge>
            <Badge size="sm" variants={variants}>AVFoundation</Badge>
            <Badge size="sm" variants={variants}>SpriteKit</Badge>
            <Badge size="sm" variants={variants}>Apple Push Notification</Badge>
            <Badge size="sm" variants={variants}>HealthKit</Badge>
            <Badge size="sm" variants={variants}>HTML</Badge>
            <Badge size="sm" variants={variants}>CSS</Badge>
            <Badge size="sm" variants={variants}>Javascript</Badge>
            <Badge size="sm" variants={variants}>Typescript</Badge>
            <Badge size="sm" variants={variants}>PHP</Badge>
            <Badge size="sm" variants={variants}>Next.Js</Badge>
            <Badge size="sm" variants={variants}>ReactJS</Badge>
            <Badge size="sm" variants={variants}>Vite</Badge>
            <Badge size="sm" variants={variants}>Laravel</Badge>
            <Badge size="sm" variants={variants}>NodeJS</Badge>
            <Badge size="sm" variants={variants}>C#</Badge>
            <Badge size="sm" variants={variants}>Git</Badge>
            <Badge size="sm" variants={variants}>Vercel</Badge>
            <Badge size="sm" variants={variants}>Firebase</Badge>
            <Badge size="sm" variants={variants}>Supabase</Badge>
          </motion.div>
        </div>

        {/* <div>
        <motion.p
        className="mt-8 mb-4 font-bold text-2xl"
          variants={variants}
          initial="initialText"
          whileInView={"animateText"}
        >
          Website Development
        </motion.p>
          <motion.div
            className="flex justify-start gap-2 md:gap-5 flex-wrap"
            variants={variants}
            initial="initialBadge"
            whileInView={"animateBadge"}
          >
            <Badge size="sm" variants={variants}>HTML</Badge>
            <Badge size="sm" variants={variants}>CSS</Badge>
            <Badge size="sm" variants={variants}>Javascript</Badge>
            <Badge size="sm" variants={variants}>Typescript</Badge>
            <Badge size="sm" variants={variants}>PHP</Badge>
            <Badge size="sm" variants={variants}>Next.Js</Badge>
            <Badge size="sm" variants={variants}>ReactJS</Badge>
            <Badge size="sm" variants={variants}>Vite</Badge>
            <Badge size="sm" variants={variants}>Laravel</Badge>
            <Badge size="sm" variants={variants}>NodeJS</Badge>
          </motion.div>
        </div> */}

        {/* <div>
        <motion.p
        className="mt-8 mb-4 font-bold text-2xl"
          variants={variants}
          initial="initialText"
          whileInView={"animateText"}
        >
          Game Development
        </motion.p>
          <motion.div
            className="flex justify-start gap-2 md:gap-5 flex-wrap"
            variants={variants}
            initial="initialBadge"
            whileInView={"animateBadge"}
          >
                  <Badge size="sm" variants={variants}>C#</Badge>
                  <Badge size="sm" variants={variants}>Unity</Badge>
          </motion.div>
        </div> */}

        {/* <div>
        <motion.p
        className="mt-8 mb-4 font-bold text-2xl"
          variants={variants}
          initial="initialText"
          whileInView={"animateText"}
        >
         Other Comprehension
        </motion.p>
          <motion.div
            className="flex justify-start gap-2 md:gap-5 flex-wrap"
            variants={variants}
            initial="initialBadge"
            whileInView={"animateBadge"}
          >
            <Badge size="sm" variants={variants}>Git</Badge>
            <Badge size="sm" variants={variants}>Vercel</Badge>
            <Badge size="sm" variants={variants}>Firebase</Badge>
            <Badge size="sm" variants={variants}>Supabase</Badge>
            <Badge size="sm" variants={variants}>SOLID</Badge>
            <Badge size="sm" variants={variants}>MVVM</Badge>
            <Badge size="sm" variants={variants}>Clean Architecture</Badge>
    
          </motion.div>
        </div> */}
      </div>
      <div className="flex justify-center items-center justify-items-center bg-theme-off-white h-1/4 md:h-full md:min-h-screen w-full md:w-1/3 text-theme-dark-blue px-5 order-1 md:order-2 md:pt-0 pt-14">
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
