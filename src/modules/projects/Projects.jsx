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

export const Projects = () => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + "</div>";
    },
  };
  return (
    <section className="py-20">
      <h3 className="text-3xl md:text-6xl font-jura font-bold text-center mb-5 md:mb-8">
        Projects
      </h3>
      <div className="flex mx-[5vw] gap-5">
        <div className="swiper-button-prev text-theme-off-white flex justify-center items-center">
          <IoIosArrowDropleftCircle size={50} />
        </div>

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
              ProjectThumbnail={"./porto/porto1.png"}
              ProjectTitle={"Lantera by Sakubi Teknologi Indonesia"}
              ProjectDesc={
                "Lantera which stands for Lansia Sejahtera is a web based application developed to contribute in achieving SDGs in Good Health and Well Being by providing platform to do early detections and health report for elderly. Lantera will provide the health report data collected by Lantera Partners to Local Health Center (Puskesmas) to do early detections for elderly."
              }
              ProjectLink={"https://dev.kader.lantera.sakubiacademy.com"}
              ProjectTags={[
                "Laravel",
                "Bootstrap",
                "Blade",
                "MySql",
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
                "Lantera which stands for Lansia Sejahtera is a web based application developed to contribute in achieving SDGs in Good Health and Well Being by providing platform to do early detections and health report for elderly. Lantera will provide the health report data collected by Lantera Partners to Local Health Center (Puskesmas) to do early detections for elderly."
              }
              ProjectLink={"https://dev.kader.lantera.sakubiacademy.com"}
              ProjectTags={[
                "Laravel",
                "Bootstrap",
                "Blade",
                "MySql",
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
                "Lantera which stands for Lansia Sejahtera is a web based application developed to contribute in achieving SDGs in Good Health and Well Being by providing platform to do early detections and health report for elderly. Lantera will provide the health report data collected by Lantera Partners to Local Health Center (Puskesmas) to do early detections for elderly."
              }
              ProjectLink={"https://dev.kader.lantera.sakubiacademy.com"}
              ProjectTags={[
                "Laravel",
                "Bootstrap",
                "Blade",
                "MySql",
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
                "Lantera which stands for Lansia Sejahtera is a web based application developed to contribute in achieving SDGs in Good Health and Well Being by providing platform to do early detections and health report for elderly. Lantera will provide the health report data collected by Lantera Partners to Local Health Center (Puskesmas) to do early detections for elderly."
              }
              ProjectLink={"https://dev.kader.lantera.sakubiacademy.com"}
              ProjectTags={[
                "Laravel",
                "Bootstrap",
                "Blade",
                "MySql",
                "HTML",
                "CSS",
                "Git",
              ]}
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next text-theme-off-white flex justify-center items-center">
          <IoIosArrowDroprightCircle size={50} />
        </div>
      </div>

      <div className="flex mx-auto justify-center items-center py-2 bg-theme-off-white text-theme-orange max-w-[90vw] md:max-w-[60vw] rounded-lg mt-2">
        See More of My Projects
      </div>
    </section>
  );
};
