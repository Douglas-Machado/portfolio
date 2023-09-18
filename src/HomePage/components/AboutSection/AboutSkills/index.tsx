import { useState } from "react";
import { Subtitle } from "../../../styles";
import { IconImage, icons } from "../../../utils/icon";
import {
  AboutSkills,
  Skill,
  SkillDescription,
  SkillDescriptionContainer,
  SkillDescriptionPlaceholder,
  SkillDescriptionWrapper,
  Skills,
  SkillsContainer,
  SkillsSection,
  SkillsSectionWrapper,
} from "../styles";
import { IIcon } from "../../../../types";

export function AboutSkillsComponent() {
	const [skill, setSkill] = useState<IIcon | null>(null);

	const skillHover = (icon: IIcon | null) => {
		setSkill(icon)
	}

  return (
    <AboutSkills>
			<SkillDescriptionContainer>
				<SkillDescriptionWrapper>
						{
							skill ?
								<div>
									<IconImage item={skill} />
									<SkillDescription>{skill.description}</SkillDescription>
								</div>
							: <SkillDescriptionPlaceholder>*Hover a icon*</SkillDescriptionPlaceholder>
						}
				</SkillDescriptionWrapper>
			</SkillDescriptionContainer>
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
