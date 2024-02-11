import { motion } from "framer-motion";

// import React from 'react'
export const AnimatedHeroImage = () => {
  return (
    <div className="flex justify-center items-center relative mt-28 md:mt-0">
      <motion.div
        className="w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] bg-theme-grey absolute rounded-full "
        initial={{ x: -100, y: 200, scale: 0, rotate: 30 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.8, delay: 0.3 }}
      ></motion.div>

      <motion.div
        className="w-[4vw] h-[4vw] md:w-[2vw] md:h-[2vw] bg-theme-grey absolute rounded-full"
        initial={{ x: 180, y: -130, scale: 0, rotate: 30 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.8, delay: 0.4 }}
      ></motion.div>

      <motion.div
        className="w-[3vw] h-[3vw] md:w-[1vw] md:h-[1vw] bg-theme-light-grey absolute rounded-full"
        initial={{ x: -100, y: -100, scale: 0, rotate: 30 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.8, delay: 0.5 }}
      ></motion.div>

      <motion.div
        className="w-[55vw] h-[55vw] md:w-[19vw] md:h-[19vw] bg-theme-light-grey absolute rounded-full"
        initial={{ x: 5, y: 40, scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      ></motion.div>

      <motion.div
        className="w-[45vw] h-[44vw] md:w-[16vw] md:h-[15vw] bg-theme-orange absolute rounded-full"
        initial={{ x: 0, y: 0, scale: 0 }}
        whileInView={{ y: 50, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.1 }}
      ></motion.div>

      <motion.div
        className="absolute w-[30vw] md:w-[12vw]"
        initial={{ rotate: -20 }}
        animate={{ rotate: 25 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
      >
        <img src="./tangan.png" alt="waving-hand" />
      </motion.div>
    </div>
  );
};
