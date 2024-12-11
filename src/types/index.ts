// import { ReactNode } from "react";

import { FunctionComponent, SVGProps } from "react";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: Skill[];
    link?: string;
    github?: string;
  }
  
  export interface Skill {
    name: string;
    svg: FunctionComponent<SVGProps<SVGSVGElement>> | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
