import React, { useState } from "react";
import { GridProjectCard } from "../../components/projectsCard/GridProjectCard";
import projectData from "../../pages/projectsArchive/projectData.json";

export const ProjectsGrid = () => {
  const [projectCategory, setProjectCategory] = useState("App");

  return (
    <section className="py-20" id="projects">
      <h3 className="text-3xl md:text-6xl font-jura font-bold text-theme-off-white text-center my-5 md:mb-8">
        Projects
      </h3>
      <div className="flex mx-[1vw] md:mx-[5vw] gap-2 md:gap-5 justify-start font-jura rounded-t-xl text-theme-dark-blue ">
        <div className="grid grid-cols-3 text-center justify-center w-full md:w-2/4 ">
          <div
            className={`rounded-t-xl  py-5 z-25 ${
              projectCategory === "App"
                ? "bg-theme-off-white shadow-[10_-10px_30px_5px_rgba(0,0,0,0.3)]"
                : "bg-theme-light-grey  "
            } `}
            onClick={() => setProjectCategory("App")}
          >
            <p className="text-lg">Apps</p>
          </div>
          <div
            className={`rounded-t-xl  py-5 z-20  ${
              projectCategory === "Website"
                ? "bg-theme-off-white shadow-[10_-10px_30px_5px_rgba(0,0,0,0.3)]"
                : "bg-theme-light-grey "
            } `}
            onClick={() => setProjectCategory("Website")}
          >
            <p className="text-lg">Websites</p>
          </div>
          <div
            className={`rounded-t-xl py-5 z-10 ${
              projectCategory === "Game"
                ? "bg-theme-off-white shadow-[10_-10px_30px_5px_rgba(0,0,0,0.3)]"
                : "bg-theme-light-grey shadow-[10_-10px_30px_5px_rgba(0,0,0,0.3)]"
            } `}
            onClick={() => setProjectCategory("Game")}
          >
            <p className="text-lg">Games</p>
          </div>
        </div>
      </div>
      <div className="mx-[2vw] md:mx-[5vw] md:px-10 pt-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-5 bg-theme-off-white rounded-b-xl rounded-r-xl shadow-[0_-5px_10px_5px_rgba(0,0,0,0.3)] z-50">
        {projectData
          .filter((project) => project.category.includes(projectCategory))
          .sort((a, b) => b.id - a.id) // Sort by largest ID first
          .map((project) => (
            <GridProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};
