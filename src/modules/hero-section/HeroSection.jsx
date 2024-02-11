import { motion } from "framer-motion";
import { AnimatedHeroImage } from "../../components/animatedHeroImage/AnimatedHeroImage";
// import { ScrollingText } from "../../components/scrollingText/ScrollingText";
export const HeroSection = () => {
  const heroText = {
    initial: { x: "-100vw" },
    animate: { x: 0, transition: { duration: 1, staggerChildren: 0.1 } },
  };

  const slideText = {
    initialToRight: { x: "-100vw" },
    initialToLeft: { x: "0vw" },
    animateToRight: {
      x: "0vw",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 50,
        ease: "linear",
      },
    },
    animateToLeft: {
      x: "-100vw",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 50,
        ease: "linear",
      },
    },
  };
  return (
    <section
      id="hero"
      className="flex justify-center md:flex-row flex-col px-10 md:px-32 gap-5 overflow-hidden relative"
    >
      <motion.div
        variants={slideText}
        initial="initialToLeft"
        whileInView={"animateToLeft"}
        className="absolute top-0 flex w-fit gap-5"
      >
        <h3 className="text-[10rem] md:text-[15rem] opacity-5 text-nowrap whitespace-nowrap leading-none">
          Website Developer
        </h3>
        <h3 className="text-[10rem] md:text-[15rem] opacity-5 text-nowrap whitespace-nowrap leading-none">
          Website Developer
        </h3>
        <h3 className="text-[10rem] md:text-[15rem] opacity-5 text-nowrap whitespace-nowrap leading-none">
          Website Developer
        </h3>
      </motion.div>
      <motion.div
        className="flex justify-center flex-col gap-5 md:basis-2/3"
        variants={heroText}
        initial={"initial"}
        animate={"animate"}
        // whileInView={"animate"}
      >
        <motion.h1 className="text-2xl md:text-3xl" variants={heroText}>
          HI, I&apos;M DINDA
        </motion.h1>
        <motion.h1
          className="font-jura text-theme-orange text-6xl md:text-8xl font-bold"
          variants={heroText}
        >
          Web Developer
        </motion.h1>
      </motion.div>
      <div className="flex justify-center md:basis-1/3 w-full">
        {/* <img src="./hero-image.svg" alt="hero-image" /> */}
        <AnimatedHeroImage />
      </div>
      <motion.div
        variants={slideText}
        initial="initialToRight"
        whileInView={"animateToRight"}
        className="absolute bottom-0 flex w-fit gap-5"
      >
        <h3 className="text-[10rem] md:text-[15rem] opacity-5 text-nowrap whitespace-nowrap leading-none">
          Website Developer
        </h3>
        <h3 className="text-[10rem] md:text-[15rem] opacity-5 text-nowrap whitespace-nowrap leading-none">
          Website Developer
        </h3>
        <h3 className="text-[10rem] md:text-[15rem] opacity-5 text-nowrap whitespace-nowrap leading-none">
          Website Developer
        </h3>
      </motion.div>
    </section>
  );
};
