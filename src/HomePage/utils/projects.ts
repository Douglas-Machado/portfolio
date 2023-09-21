import DwayPicture from "../../assets/static/dway.png";
import DownloadPicture from "../../assets/static/download.png";
import AramPicture from "../../assets/static/aram-bg.jpg";
import SocialFriendsPicture from "../../assets/static/social-friends.png";

export interface IProject {
  name: string;
  githubLink?: string;
  img: string;
  alt: string;
  skills: string[];
}

export const projects: IProject[] = [
  {
    name: "Social Friends(Coming soon)",
    img: SocialFriendsPicture,
    alt: "social-friends-picture",
    skills: [
      "Html",
      "Css",
      "Tailwind",
      "TypeScript",
      "Node",
      "Prisma",
      "React",
    ],
  },
  {
    name: "Dway",
    githubLink: "https://github.com/Douglas-Machado/dway",
    img: DwayPicture,
    alt: "dway-picture",
    skills: ["Git", "Html", "Css", "Elixir", "Phoenix", "JavaScript"],
  },
  {
    name: "ARAMID (Discord bot)",
    githubLink: "https://github.com/Douglas-Machado/aram-bot",
    img: AramPicture,
    alt: "aram-bg",
    skills: ["Git", "Python", "Selenium"],
  },
  {
    name: "Video Downloader",
    githubLink: "https://github.com/Douglas-Machado/video-downloader",
    img: DownloadPicture,
    alt: "download",
    skills: ["Git", "Python"],
  },
];
