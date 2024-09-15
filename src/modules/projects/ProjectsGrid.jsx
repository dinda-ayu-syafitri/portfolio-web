import React, { useState } from "react";
import { GridProjectCard } from "../../components/projectsCard/GridProjectCard";
import projectData from "../../pages/projectsArchive/projectData.json";

export const ProjectsGrid = () => {
  const [projectCategory, setProjectCategory] = useState("App");

  return (
    <section className="py-20" id="projects">
      <h3 className="text-3xl md:text-6xl font-jura font-bold text-theme-orange text-center my-5 md:mb-8">
        Projects
      </h3>
      <div className="flex mx-[2vw] md:mx-[5vw] gap-2 md:gap-5 justify-center font-jura">
        <div className="grid grid-cols-3 gap-5 text-center justify-center w-2/4">
          <div
            className={`${
              projectCategory === "App"
                ? "border-b-2 border-theme-orange border-solid"
                : ""
            } hover:border-b-2 hover:border-theme-orange hover:border-solid`}
            onClick={() => setProjectCategory("App")}
          >
            <p className="text-lg">Apps</p>
          </div>
          <div
            className={`${
              projectCategory === "Website"
                ? "border-b-2 border-theme-orange border-solid"
                : ""
            } hover:border-b-2 hover:border-theme-orange hover:border-solid`}
            onClick={() => setProjectCategory("Website")}
          >
            <p className="text-lg">Websites</p>
          </div>
          <div
            className={`${
              projectCategory === "Game"
                ? "border-b-2 border-theme-orange border-solid"
                : ""
            } hover:border-b-2 hover:border-theme-orange hover:border-solid`}
            onClick={() => setProjectCategory("Game")}
          >
            <p className="text-lg">Games</p>
          </div>
        </div>
      </div>
      <div className="mx-[2vw] md:mx-[5vw] md:px-10 mt-10 grid grid-cols-2 md:grid-cols-3 gap-5">
        {projectData
          .filter((project) => project.category.includes(projectCategory))
          .map((project) => (
            <GridProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};
