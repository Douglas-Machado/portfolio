import { useState } from "react";
import { Subtitle } from "../../../styles";
import { IconImage, icons } from "../../../utils/icon";
import {
  AboutSkills,
  Skill,
  SkillDescriptionWrapper,
  Skills,
  SkillsContainer,
  SkillsSection,
  SkillsSectionWrapper,
  SkillDescriptionPlaceholder,
  DescriptionContainer,
} from "../styles";
import { IIcon } from "../../../../types";
import { SkillDescriptionContainer } from "./SkillDescriptionContainer";

export function AboutSkillsComponent() {
  const [skill, setSkill] = useState<IIcon | null>(null);

  const skillHover = (icon: IIcon | null) => {
    setSkill(icon);
  };

  return (
    <AboutSkills>
      <DescriptionContainer>
        <SkillDescriptionWrapper>
          {skill ? (
            <SkillDescriptionContainer skill={skill} />
          ) : (
            <SkillDescriptionPlaceholder>
              *mouse over for more information*
            </SkillDescriptionPlaceholder>
          )}
        </SkillDescriptionWrapper>
      </DescriptionContainer>
      <SkillsContainer>
        <div>
          <Subtitle>Programming languages, frameworks and others</Subtitle>
        </div>
        <Skills>
          <SkillsSection>
            <Subtitle>Frontend</Subtitle>
            <SkillsSectionWrapper>
              {icons.map((icon) => {
                if (icon.type.includes("frontend")) {
                  return (
                    <Skill
                      key={icon.name}
                      onMouseOver={() => skillHover(icon)}
                      onMouseOut={() => skillHover(null)}
                    >
                      <IconImage item={icon} />
                    </Skill>
                  );
                }
              })}
            </SkillsSectionWrapper>
          </SkillsSection>
          <SkillsSection>
            <Subtitle>Backend</Subtitle>
            <SkillsSectionWrapper>
              {icons.map((icon) => {
                if (icon.type.includes("backend")) {
                  return (
                    <Skill
                      key={icon.name}
                      onMouseOver={() => skillHover(icon)}
                      onMouseOut={() => skillHover(null)}
                    >
                      <IconImage item={icon} />
                    </Skill>
                  );
                }
              })}
            </SkillsSectionWrapper>
          </SkillsSection>
          <SkillsSection>
            <Subtitle>Databases and ORM</Subtitle>
            <SkillsSectionWrapper>
              {icons.map((icon) => {
                if (icon.type.includes("database")) {
                  return (
                    <Skill
                      key={icon.name}
                      onMouseOver={() => skillHover(icon)}
                      onMouseOut={() => skillHover(null)}
                    >
                      <IconImage item={icon} />
                    </Skill>
                  );
                }
              })}
            </SkillsSectionWrapper>
          </SkillsSection>
          <SkillsSection>
            <Subtitle>Other</Subtitle>
            <SkillsSectionWrapper>
              {icons.map((icon) => {
                if (icon.type.includes("other")) {
                  return (
                    <Skill
                      key={icon.name}
                      onMouseOver={() => skillHover(icon)}
                      onMouseOut={() => skillHover(null)}
                    >
                      <IconImage item={icon} />
                    </Skill>
                  );
                }
              })}
            </SkillsSectionWrapper>
          </SkillsSection>
        </Skills>
      </SkillsContainer>
    </AboutSkills>
  );
}
