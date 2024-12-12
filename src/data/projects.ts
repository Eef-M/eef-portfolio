import { Project } from "../types"
import { skills } from "./skills";
import MGames from "../assets/img/projects/m-games.png"
import ComingSoon from "../assets/img/coming_soon.png"

export const projects: Project[] = [
  {
    id: 1,
    title: 'M-Games',
    description: 'Simple information website about video games with an API taken from rawg.io created using React JS and Material UI',
    image: MGames,
    tags: skills
        .filter(skill => ["MaterialUI", "React"].includes(skill.name))
        .map(skill => ({
            name: skill.name,
            svg: skill.svg
        })),
    github: 'https://github.com/Eef-M/M-Games',
    link: 'https://m-games-eef-m.vercel.app/'
  },
  {
    id: 2,
    title: 'Coming Soon...',
    description: 'Under construction...',
    image: ComingSoon,
    tags: skills
        .filter(skill => ["SandTimer"].includes(skill.name))
        .map(skill => ({
            name: skill.name,
            svg: skill.svg
        })),
    github: 'https://github.com/Eef-M',
    link: '#'
  },
];