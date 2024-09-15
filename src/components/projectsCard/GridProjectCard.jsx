import React from "react";
import { Badge } from "../badge/Badge";
import { Link } from "react-router-dom";

export const GridProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl border-2 border-theme-orange border-solid p-3 h-full">
      <div className="flex flex-col justify-between h-full">
        <img
          src={project.img}
          alt=""
          className="object-contain w-full rounded-lg"
        />
        <div className="flex flex-col gap-3 mt-3 flex-grow">
          <h3 className="text-2xl text-theme-orange font-extrabold font-jura">
            {project.title}
          </h3>
          <p className="font-jost font-normal">{project.desc}</p>

          <div className="flex justify-start flex-wrap gap-1 md:gap-3">
            {project.techStack.map((tag, index) => (
              <Badge key={index} size={"sm"}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Keep this div at the bottom by using justify-between and flex-grow above */}
        {/* <div className="bg-theme-orange flex justify-center rounded-xl py-2 cursor-pointer mt-3"> */}
        {project.link === "" ? (
          <div className="bg-theme-light-grey text-theme-dark-blue flex justify-center rounded-xl py-2 mt-3">
            <p>Not Published Yet</p>
          </div>
        ) : (
          <Link
            to={project.link}
            target="_blank"
            className="bg-theme-orange flex justify-center rounded-xl py-2 cursor-pointer mt-3"
          >
            View Project
          </Link>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};
