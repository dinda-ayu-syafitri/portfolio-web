import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// import React from "react";
export const AboutMe = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textAnimation = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const bgAnimation = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const textAnimationVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, type: "spring", bounce: 0.5 },
    },
  };

  return (
    <section
      id="aboutMe"
      ref={ref}
      className="flex flex-col justify-center items-center relative overflow-hidden bg-theme-grey"
    >
      <motion.div
        style={{ y: bgAnimation }}
        className="bg-[url('/parallax-bg-1.svg')] w-[100%] h-[100%] bg-cover absolute top-0"
      ></motion.div>
      <motion.div
        style={{ x: bgAnimation }}
        className="bg-[url('/parallax-bg-2.svg')] w-[100%] h-[100%] bg-cover absolute top-0"
      ></motion.div>
      <motion.div
        style={{ y: textAnimation }}
        variants={textAnimationVariants}
        initial="initial"
        whileInView="animate"
        className="w-[90vw] md:w-[50vw] text-xl text-center absolute"
      >
        <p className="mb-5">
        As a passionate software engineer, I gain expertise in iOS and web development, dedicated to creating impactful user-centric software that solves user problems and enhances their experience.
        </p>
        <p>
        With extensive experience in iOS Development, Website Development, and project execution using the SCRUM method, I consistently strive to deliver high-quality solutions. My familiarity with Game Development and UI/UX Design further enriches my skill set. Eager to learn and grow continuously.
        </p>
      </motion.div>
    </section>
  );
};
