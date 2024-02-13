import { motion } from "framer-motion";

export const Badge = ({ children, variants, size }) => {
  return (
    <motion.div
      variants={variants}
      className={`rounded-full py-1  bg-theme-orange my-1 text-center bg-opacity-50 border-theme-orange border-2 ${
        size === "sm" ? "text-xs md:text-md px-5" : "text-sm md:text-lg px-8"
      } `}
    >
      {children}
    </motion.div>
  );
};
