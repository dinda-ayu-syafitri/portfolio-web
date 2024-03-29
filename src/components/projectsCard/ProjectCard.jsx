import { motion } from "framer-motion";
import { Badge } from "../badge/Badge";
import { LuLink } from "react-icons/lu";
import { Link } from "react-router-dom";

export const ProjectCard = ({
  ProjectTitle,
  ProjectDesc,
  ProjectThumbnail,
  ProjectLink,
  ProjectTags,
}) => {
  const badgeVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        type: "spring",
        bounce: 0.1,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 rounded-xl bg-theme-dark-blue border-2 border-theme-orange p-2 md:p-5 md:h-[60vh] mb-8">
      <div
        className={`w-full h-fit md:h-full flex justify-center md:w-1/2 bg-cover bg-center rounded-lg`}
      >
        <img
          src={ProjectThumbnail}
          alt=""
          className="object-contain w-full rounded-lg"
        />
      </div>
      {/* <img src={ProjectThumbnail} alt={`${ProjectTitle} Thumbnail`} /> */}
      <div className="w-full h-full md:w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-2 md:gap-5">
          <motion.div
            className="flex flex-col gap-5"
            variants={textVariants}
            initial="initial"
            whileInView={"animate"}
          >
            <motion.a
              href={ProjectLink}
              variants={textVariants}
              target="_blank"
            >
              <h4 className="text-xl md:text-4xl text-theme-orange font-jura font-bold hover:underline">
                {ProjectTitle} <LuLink size={25} className="inline" />
              </h4>
            </motion.a>
            <motion.p variants={textVariants} className="hidden md:block">
              {ProjectDesc}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex justify-start flex-wrap gap-1 md:gap-3"
            variants={badgeVariants}
            initial="initial"
            whileInView="animate"
          >
            {ProjectTags.map((tag) => (
              <Badge key={tag} size={"sm"} variants={badgeVariants}>
                {tag}
              </Badge>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.6, backgroundColor: "#ff7e10" }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.5 },
            backgroundColor: "#ff7e50",
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
          className="bg-theme-orange flex justify-center rounded-xl py-2 cursor-pointer "
        >
          <Link to={ProjectLink} target="_blank">
            View Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
