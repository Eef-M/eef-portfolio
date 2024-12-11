import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="mx-3 md:mx-12 mt-3 md:mt-6">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold text-eefDark text-center">
          My Projects
        </h2>
        <div className="mt-8 grid gap-4 md:gap-14 md:grid-cols-2 lg:grid-cols-3">
          {[...projects].reverse().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
