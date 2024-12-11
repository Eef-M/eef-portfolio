import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-eefLight border border-eefDark rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div>
        <div className="rounded-md overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="my-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {project.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <span className="text-eefDark">Made with: </span>
            {project.tags.map((tag) => (
              <div key={tag.name} className="inline-flex items-center gap-1">
                <tag.svg className="w-8 h-8" />
              </div>
            ))}
          </div>
          <p className="my-2 text-eefDark">{project.description}</p>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        {project.link && (
          <a
            href={project.link}
            className="inline-flex items-center text-eefLight bg-eefPrimary rounded-full px-4 py-2 hover:bg-eefDark"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            className="inline-flex items-center text-eefDark border border-eefDark rounded-full px-4 py-2 hover:bg-eefDark hover:text-eefLight"
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
