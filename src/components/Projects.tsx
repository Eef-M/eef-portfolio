import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="mx-3 md:mx-12 mt-3 md:mt-6 py-8 md:py-16">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold text-eefDark text-center">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 md:gap-y-8 mt-8">
          {[...projects].reverse().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
