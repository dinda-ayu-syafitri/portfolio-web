import { motion } from "framer-motion";
import { useState } from "react";
import {
  IoMenu,
  IoClose,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMail,
} from "react-icons/io5";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navbarVariants = {
    closed: { opacity: 0, x: 100 },
    closedOverlay: { opacity: 0, x: 0 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
        damping: 10,
        staggerChildren: 0.1,
      },
    },
    overlay: {
      opacity: 0.6,
      x: 0,
      transition: { duration: 0.1 },
    },
  };
  return (
    <div className="fixed bg-theme-grey w-full py-3 px-5 md:px-[15%] flex items-center justify-between z-30 shadow-lg">
      <div>
        <a href="/#hero">
          <img src="./dinda-logo.png" alt="" className="w-28 hidden md:block" />
          <img
            src="./square-dinda-logo.png"
            alt=""
            className="w-12 md:hidden"
          />
        </a>
      </div>
      <div className=" justify-around gap-10 text-md hidden md:flex ">
        <div>
          <a href="/#aboutMe" className="hover:text-theme-orange">
            About Me
          </a>
        </div>
        <div>
          <a href="/#skills-expertise" className="hover:text-theme-orange">
            Skills & Expertise
          </a>
        </div>
        <div>
          <a href="/#projects" className="hover:text-theme-orange">
            Projects
          </a>
        </div>
        <div>
          <a href="/#contact" className="hover:text-theme-orange">
            Contact
          </a>
        </div>
      </div>
      <div className={`flex md:hidden`}>
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          <IoMenu size={44} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <motion.div
          variants={navbarVariants}
          initial={"closed"}
          animate={open ? "open" : "closed"}
          className="fixed md:hidden top-0 right-0  h-screen w-full flex justify-end text-2xl "
        >
          <motion.div
            variants={navbarVariants}
            initial={"closedOverlay"}
            animate={"overlay"}
            onClick={() => setOpen(!open)}
            className="bg-theme-dark-blue bg-opacity-80 h-screen w-[20vw]"
          ></motion.div>

          <div className="bg-theme-orange h-screen w-[80vw] py-3 flex flex-col justify-between">
            <div className="flex flex-col">
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden flex justify-end mb-8 px-5 "
              >
                <IoClose size={44} />
              </button>
              <motion.div
                className="flex flex-col text-center"
                variants={navbarVariants}
                initial="closed"
                animate="open"
              >
                <motion.a
                  variants={navbarVariants}
                  onClick={() => setOpen(!open)}
                  href="/#aboutMe"
                  className="hover:bg-theme-dark-blue hover:text-theme-orange py-5"
                >
                  About Me
                </motion.a>
                <motion.a
                  variants={navbarVariants}
                  onClick={() => setOpen(!open)}
                  href="/#skills-expertise"
                  className="hover:bg-theme-dark-blue hover:text-theme-orange py-5"
                >
                  Skills & Expertise
                </motion.a>
                <motion.a
                  variants={navbarVariants}
                  onClick={() => setOpen(!open)}
                  href="/#projects"
                  className="hover:bg-theme-dark-blue hover:text-theme-orange py-5"
                >
                  Projects
                </motion.a>
                <motion.a
                  variants={navbarVariants}
                  onClick={() => setOpen(!open)}
                  href="/#contact"
                  className="hover:bg-theme-dark-blue hover:text-theme-orange py-5"
                >
                  Contact
                </motion.a>
              </motion.div>
            </div>
            <div className="flex justify-center gap-10 w-full px-5 mb-5">
              <a
                href="mailto:dindasyafitri@gmail.com"
                className="hover:text-theme-dark-blue"
              >
                <IoMail />
              </a>
              <a
                href="https://github.com/dinda-ayu-syafitri"
                className="hover:text-theme-dark-blue"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dinda-ayu-syafitri/"
                className="hover:text-theme-dark-blue"
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
