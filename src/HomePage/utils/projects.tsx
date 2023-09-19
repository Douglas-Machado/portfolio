import { StyledComponent } from 'styled-components/'

import DwayPicture from '../../assets/static/dway.png'
import DownloadPicture from "../../assets/static/download.png";
import AramPicture from "../../assets/static/aram-bg.jpg";
import SocialFriendsPicture from "../../assets/static/social-friends.png";

import { Technologies } from '../components/ProjectsSection/styles';
import { DiCss3, DiGit, DiHtml5, DiPython } from 'react-icons/di';
import { FaGithub, FaPhoenixFramework, FaReact } from 'react-icons/fa';
import { SiBootstrap, SiElixir, SiJavascript, SiNodedotjs, SiPrisma, SiSelenium, SiTailwindcss, SiTypescript } from 'react-icons/si';

export interface IProjects {
    name: string;
    githubLink?: string;
    img: string;
    alt: string;
    skills: any
}

export const projects: IProjects[] = [
    {
        name: "Dway",
        githubLink: "https://github.com/Douglas-Machado/dway",
        img: DwayPicture,
        alt: "dway-picture",
        skills: <Technologies>
              <DiGit fill="#F1502F" />
              <FaGithub />
              <DiHtml5 fill="#e34c26" />
              <DiCss3 fill="#264de4" />
              <SiBootstrap fill="#563d7c" />
              <SiElixir fill="#320e63" />
              <FaPhoenixFramework fill="#fd4f00" />
              <SiJavascript fill="#f0db5f" />
        </Technologies>
    },
    {
        name: "Video Downloader",
        githubLink: "https://github.com/Douglas-Machado/video-downloader",
        img: DownloadPicture,
        alt: "download",
        skills: <Technologies>
            <DiPython fill="#4B8BBE" />
            <DiGit fill="#F1502F" />
            <FaGithub />
        </Technologies>
    },
    {
        name: "ARAMID (Discord bot)",
        githubLink: "https://github.com/Douglas-Machado/video-downloader",
        img: AramPicture,
        alt: "aram-bg",
        skills: <Technologies>
            <DiPython fill="#4B8BBE" />
            <DiGit fill="#F1502F" />
            <SiSelenium fill="#04e00c"/>
            <FaGithub />
        </Technologies>
    },
    {
        name: "Social Friends(Coming soon)",
        img: SocialFriendsPicture,
        alt: "social-friends-picture",
        skills: <Technologies>
            <DiGit fill="#F1502F" />
            <FaGithub />
            <DiHtml5 fill="#e34c26" />
            <DiCss3 fill="#264de4" />
            <SiTailwindcss fill="#1e69e3" />
            <SiJavascript fill="#f0db5f" />
            <SiTypescript fill="#007acc" />
            <SiNodedotjs fill="#3C873A" />
            <FaReact fill="#88dded" />
            <SiPrisma fill="#0C344B" />
        </Technologies>
    },
]
