import { motion } from "framer-motion";

export const Badge = ({ children, variants, size }) => {
  return (
    <motion.div
      variants={variants}
      className={`rounded-full py-1 px-8 bg-theme-orange my-1 text-center bg-opacity-50 border-theme-orange border-2 ${
        size === "sm" ? "text-sm md:text-md" : "text-sm md:text-lg"
      } `}
    >
      {children}
    </motion.div>
  );
};