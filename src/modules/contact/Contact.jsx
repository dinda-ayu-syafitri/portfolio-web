import React, { useRef } from "react";
import { Footer } from "../../components/footer/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

export const Contact = () => {
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
      id="contact"
      className="relative flex flex-col  bg-theme-grey overflow-hidden"
      ref={ref}
    >
      <motion.div
        style={{ y: bgAnimation }}
        className="bg-[url('./parallax-bg-1.svg')] w-[100%] h-[100%] bg-cover absolute top-0 opacity-25"
      ></motion.div>
      <motion.div
        style={{ x: bgAnimation }}
        className="bg-[url('./contact-bg-1.svg')] w-[100%] h-[100%] bg-cover absolute top-0 opacity-50"
      ></motion.div>
      <div className="flex justify-between justify-items-center items-center h-full flex-wrap z-10 pt-5">
        <div className="w-[100vw] md:w-[40vw] bg-theme-off-white bg-opacity-10 h-[20vh] md:h-full flex justify-center flex-col items-center">
          <div className=" mt-10 md:mt-0 mx-5 md:mx-0">
            <h3 className="font-jura text-3xl md:text-6xl font-bold mb-1 md:mb-5">
              Contact Me
            </h3>
            <div className="pl-2 text-sm md:text-xl hidden md:block">
              <p>Want to work together?</p>
              <p>Feel free to contact me!</p>
              <p>I’m open to freelancing!</p>
            </div>
            <div className=" gap-10 mb-5 text-xl pl-2 mt-2 md:mt-5 flex">
              <a
                href="mailto:dindasyafitri@gmail.com"
                className="hover:text-theme-orange"
              >
                <IoMail />
              </a>
              <a
                href="https://github.com/dinda-ayu-syafitri"
                className="hover:text-theme-orange"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dinda-ayu-syafitri/"
                className="hover:text-theme-orange"
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
        <form className="md:w-[50vw] w-[100vw] flex justify-center flex-col bg-theme-dark-blue bg-opacity-50 rounded-xl p-5 mx-3 md:mx-10">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-bg-theme-off-white font-jura"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-theme-off-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-bg-theme-off-white font-jura"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-theme-off-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-bg-theme-off-white font-jura"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-theme-off-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-bg-theme-off-white font-jura"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="bg-theme-off-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Message"
              required
            />
          </div>
          <button className="bg-theme-orange text-bg-theme-off-white font-jura font-bold text-lg py-2.5 px-5 rounded-lg hover:bg-theme-dark-orange">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};
