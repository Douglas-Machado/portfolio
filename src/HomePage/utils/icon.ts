import {DiCss3, DiDjango, DiGit, DiHtml5, DiPython} from "react-icons/di"
import {
    SiJavascript, SiNextdotjs, SiNodedotjs, SiTypescript, SiElixir, SiTailwindcss, SiPrisma, SiMongodb,
    SiPostgresql, SiMysql
} from "react-icons/si"
import {FaAws, FaDocker, FaGithub, FaLinkedin, FaPhoenixFramework, FaReact} from "react-icons/fa"
import * as React from "react";
import { IconImageParams, IIcon } from "../../types";
  
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

export const icons: IIcon[] = [
  {
      name: "Html",
      size: 70,
      type: ["frontend"],
      img: DiHtml5,
      color: "#e34c26",
      children: null,
      description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
  },
  {
      name: "Css",
      size: 70,
      type: ["frontend"],
      img: DiCss3,
      color: "#264de4",
      children: null,
      description: "Cascading Style Sheets or CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
  },
  {
      name: "JavaScript",
      size: 60,
      type: ["frontend", "backend"],
      img: SiJavascript,
      color: "#f0db5f",
      children: null,
      description: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
  },
  {
      name: "TypeScript",
      size: 60,
      type: ["frontend", "backend"],
      img: SiTypescript,
      color: "#007acc",
      children: null,
      description: "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript."
  },
  {
      name: "Nodejs",
      size: 70,
      type: ["backend"],
      img: SiNodedotjs,
      color: "#3C873A",
      children: null,
      description: "Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser."
  },
  {
      name: "Tailwind",
      size: 70,
      type: ["frontend"],
      img: SiTailwindcss,
      color: "#1e69e3",
      children: null,
      description: "Tailwind CSS is an open source CSS framework."
  },
  {
      name: "Reactjs",
      size: 70,
      type: ["frontend"],
      img: FaReact,
      color: "#88dded",
      children: null,
      description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components."
  },
  {
      name: "Elixir",
      size: 70,
      type: ["backend"],
      img: SiElixir,
      color: "#320e63",
      children: null,
      description: "Elixir is a functional, concurrent, high-level general-purpose programming language."
  },
  {
      name: "Phoenix",
      size: 70,
      type: ["backend"],
      img: FaPhoenixFramework,
      color: "#fd4f00",
      children: null,
      description: "Phoenix is a web development framework written in the functional programming language Elixir."
  },
  {
    name: "Nextjs",
    size: 70,
    type: ["frontend"],
    img: SiNextdotjs,
    color: "#00000",
    children: null,
    description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation."
  },
  {
      name: "Python",
      size: 70,
      type: ["backend"],
      img: DiPython,
      color: "#4B8BBE",
      children: null,
      description: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
  },
  {
      name: "Prisma ORM",
      size: 70,
      type: ["database"],
      img: SiPrisma,
      color: "#0C344B",
      children: null,
      description: "Prisma is a next-generation ORM that makes working with databases easy for application developers."
  },
  {
      name: "MongoDB",
      size: 60,
      type: ["database"],
      img: SiMongodb,
      color: "#4DB33D",
      children: null,
      description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
  },
  {
      name: "MySQL",
      size: 70,
      type: ["database"],
      img: SiMysql,
      color: "#320e63",
      children: null,
      description: "MySQL is an open-source relational database management system."
  },
  {
      name: "Postgres",
      size: 70,
      type: ["database"],
      img: SiPostgresql,
      color: "#2F6792",
      children: null,
      description: "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance."
  },
  {
      name: "Git",
      size: 70,
      type: ["other"],
      img: DiGit,
      color: "#F1502F",
      children: null,
      description: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development."
  },
  {
      name: "Docker",
      size: 70,
      type: ["other"],
      img: FaDocker,
      color: "#0db7ed",
      children: null,
      description: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers."
  },
  {
      name: "AWS",
      size: 60,
      type: ["other"],
      img: FaAws,
      color: "#FF9900",
      children: null,
      description: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis."
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
    description: "Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern."
  }
]
