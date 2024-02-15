// import React from 'react'

import { ProjectCard } from "../../components/projectsCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Projects = () => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + "</div>";
    },
  };

  const navSliderVariants = {
    initial: { scale: 1 },
    whileHover: {
      scale: 1.02,
      transition: { duration: 0.2 },
      color: "#ff7e50",
    },
    whileTap: { scale: 0.9 },
  };

  return (
    <section className="py-20" id="projects">
      <h3 className="text-3xl md:text-6xl font-jura font-bold text-center my-5 md:mb-8">
        Projects
      </h3>
      <div className="flex mx-[2vw] md:mx-[5vw] gap-2 md:gap-5">
        <motion.div className="text-theme-off-white flex justify-center items-center ">
          <motion.div
            variants={navSliderVariants}
            initial="initial"
            whileHover={"whileHover"}
            whileTap={"whileTap"}
          >
            <IoIosArrowDropleftCircle
              // size={50}
              className="swiper-button-prev cursor-pointer text-[30px] md:text-[50px]"
            />
          </motion.div>
        </motion.div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={pagination}
          centeredSlides={true}
        >
          <SwiperSlide>
            <ProjectCard
              ProjectThumbnail={"./porto/dNotes.png"}
              ProjectTitle={"dNotes"}
              ProjectDesc={
                "dNotes is A note taking website to capture, manage, and access notes everywhere and anywhere. Developed using React JS, HTML, CSS, Javascript, Tailwind, Supabase, this website got a lot of features such as authentication, CRUD, and many more. With responsive and clean design, dNotes offer a great user experience."
              }
              ProjectLink={"https://dnotes-the-notes.netlify.app/"}
              ProjectTags={[
                "ReactJs",
                "ViteJS",
                "Tailwind CSS",
                "Supabase",
                "Javascript",
                "HTML",
                "CSS",
                "Git",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              ProjectThumbnail={"./porto/RacersEdge.png"}
              ProjectTitle={"RacersEdge"}
              ProjectDesc={
                "RacersEdge is a concept website created for racing enthusiasts. This website is developed using React JS, HTML, CSS, Javascript, and Tailwind. RacersEdge offers a great user experience with responsive, sporty, and unique design. I'm responsible for developing the front end of this website."
              }
              ProjectLink={"https://racers-edge.vercel.app/"}
              ProjectTags={[
                "ReactJs",
                "Tailwind CSS",
                "Javascript",
                "HTML",
                "CSS",
                "Git",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              ProjectThumbnail={"./porto/porto1.png"}
              ProjectTitle={"Lantera by Sakubi Teknologi Indonesia"}
              ProjectDesc={
                "Lantera is a web based application developed to providing platform to do early detections and health report for elderly. Lantera will provide the health report data collected by Lantera Partners to Local Health Center (Puskesmas) to do early detections for elderly. I was responsible for developing the front end of this website for Sakubi Teknologi Indonesia using Laravel, Bootstrap, Blade, HTML, CSS, and Git."
              }
              ProjectLink={"https://dev.kader.lantera.sakubiacademy.com"}
              ProjectTags={[
                "Laravel",
                "Bootstrap",
                "Blade",
                "HTML",
                "CSS",
                "Git",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              ProjectThumbnail={"./porto/vokasiBisa.png"}
              ProjectTitle={
                "VokasiBisa by Sakubi Teknologi Indonesia Landing Page"
              }
              ProjectDesc={
                "A Landing page for VokasiBisa by Sakubi Teknologi Indonesia A modern and responsive website as landing page for internship registration."
              }
              ProjectLink={"https://vokasibisa.id/"}
              ProjectTags={["Laravel", "PHP", "Blade", "HTML", "CSS"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              ProjectThumbnail={"./porto/sakubi.png"}
              ProjectTitle={"Sakubi Teknologi Indonesia Landing Page"}
              ProjectDesc={
                "A Modern, Simple, and Responsive website as landing page for Sakubi Teknologi Indonesia. Developed using Laravel, Bootstrap, Blade, HTML, CSS, and PHP."
              }
              ProjectLink={"https://sakubi.id/"}
              ProjectTags={[
                "Laravel",
                "Bootstrap",
                "Blade",
                "HTML",
                "CSS",
                "PHP",
              ]}
            />
          </SwiperSlide>
        </Swiper>
        <motion.div className="text-theme-off-white flex justify-center items-center ">
          <motion.div
            variants={navSliderVariants}
            initial="initial"
            whileHover={"whileHover"}
            whileTap={"whileTap"}
          >
            <IoIosArrowDroprightCircle
              // size={50}
              className="swiper-button-next cursor-pointer text-[30px] md:text-[50px]"
            />
          </motion.div>
        </motion.div>
      </div>
      <Link to="/projects-archive">
        <motion.button
          className="flex mx-auto justify-center items-center py-2 px-8 bg-theme-off-white text-theme-orange max-w-[90vw] md:max-w-[60vw] rounded-lg mt-2"
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
            backgroundColor: "#ff7e50",
            color: "#fff",
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          See More of My Projects
        </motion.button>
      </Link>
    </section>
  );
};
