import { Subtitle, Title } from "../../styles";
import { AboutMain, About, Paragraph, AboutSkills, AboutEducation, AboutMe, Skills, Skill } from "./styles";
import {DiHtml5, DiCss3, DiGit, DiRuby} from "react-icons/di"
import {SiJavascript, SiNodedotjs, SiTypescript, SiElixir, SiTailwindcss} from "react-icons/si"
import {FaPhoenixFramework, FaReact, FaGithub} from "react-icons/fa"

export function AboutSection(){
  return(
    <AboutMain id="about">
      <Title>About</Title>

      <About>

        <AboutMe>
          <Subtitle>About me</Subtitle>
          <Paragraph>
            I have worked as Junior Back end Software Developer with Elixir and Ruby, 
            but nowadays I’m focused on full stack development with Node, React.js (JavaScript and TypeScript) and Java.
          </Paragraph>

          <Paragraph>
            I love to develop applications, solve problems, technology
            and how people with the same objective can change many lives with technology.
          </Paragraph>
        </AboutMe>

        <AboutEducation>
          <Subtitle>Education</Subtitle>
          <Paragraph>I have a technical degree in I.T Management at Unicesumar.</Paragraph>
        </AboutEducation>

        <AboutSkills>
          <div>
            <Subtitle>Skills</Subtitle>
          </div>
          <Skills>
            <Skill>
              <DiHtml5 size={70} fill="#e34c26"/>
            </Skill>
            <Skill>
              <DiCss3 size={70} fill="#264de4"/>
            </Skill>
            <Skill>
              <SiTailwindcss size={70} fill="#1e69e3"/>
            </Skill>
            <Skill>
              <SiJavascript size={60} fill="#f0db5f"/>
            </Skill>
            <Skill>
              <FaReact size={70} fill="#88dded"/>
            </Skill>
            <Skill>
              <SiNodedotjs size={70} fill="#3C873A"/>
            </Skill>
            <Skill>
              <SiTypescript size={60} fill="#007acc"/>
            </Skill>
            <Skill>
              <SiElixir size={70} fill="#320e63"/>
            </Skill>
            <Skill>
              <FaPhoenixFramework size={70} fill="#fd4f00"/>
            </Skill>
            <Skill>
              <DiRuby size={70} fill="#A91401"/>
            </Skill>
            <Skill>
              <DiGit size={70} fill="#F1502F"/>
            </Skill>
            <Skill>
              <FaGithub size={70} />
            </Skill>
          </Skills>
        </AboutSkills>
      </About>
    </AboutMain>
  )
}