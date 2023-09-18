import { IconType } from "react-icons/lib";
import {DiCss3, DiDjango, DiGit, DiHtml5, DiPython} from "react-icons/di"
import {
    SiJavascript, SiNextdotjs, SiNodedotjs, SiTypescript, SiElixir, SiTailwindcss, SiPrisma, SiMongodb,
    SiPostgresql, SiMysql
} from "react-icons/si"
import {FaAws, FaDocker, FaGithub, FaLinkedin, FaPhoenixFramework, FaReact} from "react-icons/fa"
import * as React from "react";

interface IconsInterface {
    name: string;
    size: number;
    type: Array<string>;
    img: IconType;
    color: string;
    children: null;
    link?: string;
}

type IconImageParams = {
    item: IconsInterface;
}
  
export function IconImage({ item }: IconImageParams) {
  return React.createElement(
    item.img,
    {
      style: {
        color: item.color,
        fontSize: item.size,
      },
      title: item.name
    },
    item.children,
  )
}

export const icons: IconsInterface[] = [
  {
      name: "Html",
      size: 70,
      type: ["frontend"],
      img: DiHtml5,
      color: "#e34c26",
      children: null,
  },
  {
      name: "Css",
      size: 70,
      type: ["frontend"],
      img: DiCss3,
      color: "#264de4",
      children: null,
  },
  {
      name: "JavaScript",
      size: 60,
      type: ["frontend", "backend"],
      img: SiJavascript,
      color: "#f0db5f",
      children: null,
  },
  {
      name: "TypeScript",
      size: 60,
      type: ["frontend", "backend"],
      img: SiTypescript,
      color: "#007acc",
      children: null,
  },
  {
      name: "Nodejs",
      size: 70,
      type: ["backend"],
      img: SiNodedotjs,
      color: "#3C873A",
      children: null,
  },
  {
      name: "Tailwind",
      size: 70,
      type: ["frontend"],
      img: SiTailwindcss,
      color: "#1e69e3",
      children: null,
  },
  {
      name: "Reactjs",
      size: 70,
      type: ["frontend"],
      img: FaReact,
      color: "#88dded",
      children: null,
  },
  {
      name: "Elixir",
      size: 70,
      type: ["backend"],
      img: SiElixir,
      color: "#320e63",
      children: null,
  },
  {
      name: "Phoenix",
      size: 70,
      type: ["backend"],
      img: FaPhoenixFramework,
      color: "#fd4f00",
      children: null,
  },
  {
    name: "Nextjs",
    size: 70,
    type: ["frontend"],
    img: SiNextdotjs,
    color: "#00000",
    children: null,
  },
  {
      name: "Python",
      size: 70,
      type: ["backend"],
      img: DiPython,
      color: "#4B8BBE",
      children: null,
  },
  {
      name: "Prisma ORM",
      size: 70,
      type: ["database"],
      img: SiPrisma,
      color: "#0C344B",
      children: null,
  },
  {
      name: "MongoDB",
      size: 60,
      type: ["database"],
      img: SiMongodb,
      color: "#4DB33D",
      children: null,
  },
  {
      name: "MySQL",
      size: 70,
      type: ["database"],
      img: SiMysql,
      color: "#320e63",
      children: null,
  },
  {
      name: "Postgres",
      size: 70,
      type: ["database"],
      img: SiPostgresql,
      color: "#2F6792",
      children: null,
  },
  {
      name: "Git",
      size: 70,
      type: ["other"],
      img: DiGit,
      color: "#F1502F",
      children: null,
  },
  {
      name: "Docker",
      size: 70,
      type: ["other"],
      img: FaDocker,
      color: "#0db7ed",
      children: null,
  },
  {
      name: "AWS",
      size: 60,
      type: ["other"],
      img: FaAws,
      color: "#FF9900",
      children: null,
  },
  {
      name: "GitHub",
      size: 70,
      type: ["social"],
      img: FaGithub,
      color: "#00000",
      children: null,
      link: "https://github.com/Douglas-Machado",
  },
  {
      name: "LinkdedIn",
      size: 70,
      type: ["social"],
      img: FaLinkedin,
      color: "#007acc",
      children: null,
      link: "https://www.linkedin.com/in/douglascmachado/",
  },
  {
    name: "Django",
    size: 71,
    type: ["backend"],
    img: DiDjango,
    color: "#092e20",
    children: null,
  }
]
