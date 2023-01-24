import { Subtitle, Title } from "../../styles";
import {
  AboutMain, About, Paragraph, AboutSkills, AboutEducation, AboutMe, Skills, Skill, SkillsSection, SkillsSectionWrapper
} from "./styles";
import { icons, IconImage } from "../../utils/icon"

export function AboutSection() {
  return (
    <AboutMain id="about">
      <Title>About</Title>
      <About>
        <AboutMe>
          <Subtitle>About me</Subtitle>
          <Paragraph>
            Fullstack developer Python | JavaScript | MySQL
          </Paragraph>

          <Paragraph>
            My purpose is solve problems with technology and work with incredible people to change people lifes.
          </Paragraph>
        </AboutMe>

        <AboutEducation>
          <Subtitle>Education</Subtitle>
          <Paragraph>I have a technical degree in I.T Management at Unicesumar.</Paragraph>
        </AboutEducation>

        <AboutSkills>
          <div>
            <Subtitle>Programming languages, frameworks and other</Subtitle>
          </div>
          <Skills>
            <SkillsSection>
              <Subtitle>Frontend</Subtitle>
              <SkillsSectionWrapper>
                {
                  icons.map(icon => {
                    if (icon.type.includes('frontend')) {
                      return (
                        <Skill
                          title={icon.name}
                          key={icon.name}>
                          <IconImage
                            item={icon}
                        />
                        </Skill>
                      )
                    }
                  })
                }
              </SkillsSectionWrapper>
            </SkillsSection>
            <SkillsSection>
              <Subtitle>Backend</Subtitle>
              <SkillsSectionWrapper>
                {
                  icons.map(icon => {
                    if (icon.type.includes('backend')) {
                      return (
                        <Skill title={icon.name} key={icon.name} style={{
                          color: `${icon.color}`
                        }}>
                          <IconImage item={icon} />
                        </Skill>
                      )
                    }
                  })
                }
              </SkillsSectionWrapper>
            </SkillsSection>
            <SkillsSection>
              <Subtitle>Databases and ORM</Subtitle>
              <SkillsSectionWrapper>
                {
                  icons.map(icon => {
                    if (icon.type.includes('database')) {
                      return (
                        <Skill title={icon.name} key={icon.name} style={{
                          color: `${icon.color}`
                        }}>
                          <IconImage item={icon} />
                        </Skill>
                      )
                    }
                  })
                }
              </SkillsSectionWrapper>
            </SkillsSection>
            <SkillsSection>
              <Subtitle>Other</Subtitle>
              <SkillsSectionWrapper>
                {
                  icons.map(icon => {
                    if (icon.type.includes('other')) {
                      return (
                        <Skill title={icon.name} key={icon.name} style={{
                          color: `${icon.color}`
                        }}>
                          <IconImage item={icon} />
                        </Skill>
                      )
                    }
                  })
                }
              </SkillsSectionWrapper>
            </SkillsSection>
          </Skills>
        </AboutSkills>
      </About>
    </AboutMain>
  )
}
