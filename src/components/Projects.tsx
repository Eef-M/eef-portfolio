import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.15, ease: "easeOut" },
        }}
        className="w-full mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-eefAccent text-center">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 md:gap-y-8 mt-8">
          {[...projects].reverse().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
