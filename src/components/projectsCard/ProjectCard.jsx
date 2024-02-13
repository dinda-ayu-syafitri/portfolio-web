// import React from "react";
import { Badge } from "../badge/Badge";

export const ProjectCard = ({
  ProjectTitle,
  ProjectDesc,
  ProjectThumbnail,
  ProjectLink,
  ProjectTags,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 rounded-xl bg-theme-dark-blue border-2 border-theme-orange p-5 h-[70vh] md:h-[60vh] mb-8">
      <div
        className={`w-1/2 h-full bg-[url('${ProjectThumbnail}')] bg-cover rounded-lg`}
      ></div>
      {/* <img src={ProjectThumbnail} alt={`${ProjectTitle} Thumbnail`} /> */}
      <div className="w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <a href={ProjectLink}>
            <h4 className="text-3xl text-theme-orange font-jura font-bold">
              {ProjectTitle}
            </h4>
          </a>
          <p>{ProjectDesc}</p>
          <div className="flex justify-start flex-wrap gap-3">
            {ProjectTags.map((tag) => (
              <Badge key={tag} size={"sm"}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-theme-orange flex justify-center rounded-xl py-2">
          View Project
        </div>
      </div>
    </div>
  );
};
