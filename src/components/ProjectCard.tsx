import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded-lg p-4 flex flex-col justify-between w-full md:w-[640px] lg:w-[440px] bg-white/40 backdrop-blur-md">
      <div>
        <div className="rounded-md overflow-hidden h-44 md:h-52">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="my-4 text-black">
          <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <span>Made with: </span>
            {project.tags.map((tag) => (
              <div key={tag.name} className="inline-flex items-center gap-1">
                <tag.svg className="w-8 h-8" />
              </div>
            ))}
          </div>
          <p className="my-2">{project.description}</p>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        {project.link && (
          <a
            href={project.link}
            className="inline-flex items-center text-white bg-eefPrimary rounded-md px-4 py-2 hover:bg-eefAccent hover:text-eefLight transition duration-300 ease-in-out"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            className="inline-flex items-center text-eefPrimary border border-eefPrimary rounded-md px-4 py-2 hover:bg-eefAccent hover:text-white hover:border-gray-500 transition duration-300 ease-in-out"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
