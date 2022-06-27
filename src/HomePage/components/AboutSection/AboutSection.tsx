import { Subtitle, Title } from "../../styles";
import { AboutMain, About, Paragraph, AboutSkills, AboutEducation, AboutMe } from "./styles";
import {DiHtml5, DiCss3, DiGit, DiRuby} from "react-icons/di"
import {SiJavascript, SiNodedotjs, SiTypescript, SiElixir, SiTailwindcss} from "react-icons/si"
import {FaPhoenixFramework, FaReact, FaGithub} from "react-icons/fa"

export function AboutSection(){
  return(
    <AboutMain>
      <Title>About</Title>

      <About>

        <AboutMe>
          <Subtitle>About me</Subtitle>
          <Paragraph>
            I have worked as Junior Back end Software Developer with Elixir and Ruby, 
            but nowadays I’m focused on full stack development with Node, React.js(JavaScript/TypeScript) and Java.
          </Paragraph>

          <Paragraph>
            I love to develop applications, solve problems, technology
            and how people with the same objective can change many lives with technology.
          </Paragraph>
        </AboutMe>

        <AboutEducation>
          <Subtitle>Education</Subtitle>
          <Paragraph>I have a technical degree in in I.T Management at Unicesumar.</Paragraph>
        </AboutEducation>

        <AboutSkills>
          <div>
            <Subtitle>Skills</Subtitle>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            gap: "2%",
          }}>
            <DiHtml5 size={80} fill="#e34c26"/>
            <DiCss3 size={80} fill="#264de4"/>
            <SiTailwindcss size={80} fill="#1e69e3"/>
            <SiJavascript size={65} fill="#f0db5f"/>
            <FaReact size={70} fill="#88dded"/>
            <SiNodedotjs size={65} fill="#3C873A"/>
            <SiTypescript size={65} fill="#007acc"/>
            <SiElixir size={65} fill="#320e63"/>
            <FaPhoenixFramework size={80} fill="#fd4f00"/>
            <DiRuby size={70} fill="#A91401"/>
            <DiGit size={80} fill="#F1502F"/>
            <FaGithub size={80} />
          </div>
        </AboutSkills>
      </About>
    </AboutMain>
  )
}