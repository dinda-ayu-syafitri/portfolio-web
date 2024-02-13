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
        className="bg-[url('./parallax-bg-1.svg')] w-[100%] h-[100%] bg-cover absolute top-0"
      ></motion.div>
      <motion.div
        style={{ x: bgAnimation }}
        className="bg-[url('./parallax-bg-2.svg')] w-[100%] h-[100%] bg-cover absolute top-0"
      ></motion.div>
      <motion.div
        style={{ y: textAnimation }}
        variants={textAnimationVariants}
        initial="initial"
        whileInView="animate"
        className="w-[90vw] md:w-[50vw] text-xl text-center absolute"
      >
        <p className="mb-5">
          As a passionate web developer, I am dedicated to creating captivating
          digital experiences. With a vision of excellence, I strive to craft
          pixel-perfect designs and bring them to life with clean and efficient
          code.{" "}
        </p>
        <p>
          Every opportunity and challenge is a chance for me to thrive and
          learn, and I eagerly embrace them with enthusiasm and determination. I
          am open to collaborating on exciting projects and am eager to bring my
          skills and creativity to new ventures.
        </p>
      </motion.div>
    </section>
  );
};
