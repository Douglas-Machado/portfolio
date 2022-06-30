import { Subtitle, Title } from "../../styles";
import { AboutMain, About, Paragraph, AboutSkills, AboutEducation, AboutMe, Skills, Skill, SkillsSection, SkillsSectionWrapper } from "./styles";
import {DiHtml5, DiCss3, DiGit, DiRuby} from "react-icons/di"
import {SiJavascript, SiNodedotjs, SiTypescript, SiElixir, SiTailwindcss, SiPrisma, SiMongodb, SiPostgresql, SiMysql} from "react-icons/si"
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
            <SkillsSection>
              <Subtitle>Frontend</Subtitle>
              <SkillsSectionWrapper>
                <Skill title="Html">
                  <DiHtml5 title="Html" size={70} fill="#e34c26"/>
                </Skill>
                <Skill title="Css">
                  <DiCss3 title="Css" size={70} fill="#264de4"/>
                </Skill>
                <Skill title="JavaScript">
                  <SiJavascript title="JavaScript" size={60} fill="#f0db5f"/>
                </Skill>
                <Skill title="TypeScript">
                  <SiTypescript title="TypeScript" size={60} fill="#007acc"/>
                </Skill>
                <Skill title="Tailwind">
                  <SiTailwindcss title="Tailwind" size={70} fill="#1e69e3"/>
                </Skill>
                <Skill title="React.js">
                  <FaReact title="React.js" size={70} fill="#88dded"/>
                </Skill>
              </SkillsSectionWrapper>
            </SkillsSection>
            <SkillsSection>
              <Subtitle>Backend</Subtitle>
              <SkillsSectionWrapper>
              <Skill title="JavaScript">
                  <SiJavascript title="JavaScript" size={60} fill="#f0db5f"/>
                </Skill>
                <Skill title="Noje.js">
                  <SiNodedotjs title="Noje.js" size={70} fill="#3C873A"/>
                </Skill>
                <Skill title="TypeScript">
                  <SiTypescript title="TypeScript" size={60} fill="#007acc"/>
                </Skill>
                <Skill title="Elixir">
                  <SiElixir title="Elixir" size={70} fill="#320e63"/>
                </Skill>
                <Skill title="Phoenix">
                  <FaPhoenixFramework title="Phoenix" size={70} fill="#fd4f00"/>
                </Skill>
                <Skill title="Ruby">
                  <DiRuby title="Ruby" size={70} fill="#A91401"/>
                </Skill>
              </SkillsSectionWrapper>
            </SkillsSection>
            <SkillsSection>
              <Subtitle>Databases and ORM</Subtitle>
              <SkillsSectionWrapper>
                <Skill title="Prisma ORM">
                  <SiPrisma title="Prisma ORM" size={70} fill="#0C344B"/>
                </Skill>
                <Skill title="MongoDB">
                  <SiMongodb title="MongoDB" size={60} fill="#4DB33D"/>
                </Skill>
                <Skill title="MySQL">
                  <SiMysql title="MySQL" size={70} fill="#320e63"/>
                </Skill>
                <Skill title="Postgres">
                  <SiPostgresql title="Postgres" size={70} fill="#2F6792"/>
                </Skill>
              </SkillsSectionWrapper>
            </SkillsSection>
            <SkillsSection>
              <Subtitle>Other</Subtitle>
              <SkillsSectionWrapper>
                <Skill title="Git">
                  <DiGit title="Git" size={70} fill="#F1502F"/>
                </Skill>
                <Skill title="Github">
                  <FaGithub title="Github" size={70} />
                </Skill>
              </SkillsSectionWrapper>
            </SkillsSection>
          </Skills>
        </AboutSkills>
      </About>
    </AboutMain>
  )
}