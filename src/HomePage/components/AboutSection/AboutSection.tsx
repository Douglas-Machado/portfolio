import { Subtitle, Title } from "../../styles";
import { AboutMain, About, Paragraph, AboutEducation } from "./styles";
import { AboutMeComponenent } from "./AboutMe";
import { AboutSkillsComponent } from "./AboutSkills";

export function AboutSection() {
  return (
    <AboutMain id="about">
      <Title>About</Title>
      <About>
        <AboutMeComponenent />
        <AboutEducation>
          <Subtitle>Education</Subtitle>
          <Paragraph>
            I have a technical degree in I.T Management at Unicesumar.
          </Paragraph>
        </AboutEducation>
        <AboutSkillsComponent />
      </About>
    </AboutMain>
  );
}
