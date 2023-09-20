import { useState } from "react";
import { PictureLink, Project, ProjectPicture, Skill, Skills } from "./styles";
import { IProject } from "../../utils/projects";
import { IconImage, icons } from "../../utils/icon";

interface IProps {
  project: IProject;
}
export function ProjectsComponent({ project }: IProps) {
  const [hover, setHover] = useState<boolean>(false);

  function handleHover() {
    setHover(!hover);
  }

  function getSkillIcon(skill: string) {
    return icons.find((icon) => {
      return icon.name == skill;
    });
  }

  return (
    <Project>
      <h2>{project.name}</h2>
      <PictureLink target="_blank" href={project.githubLink}>
        <ProjectPicture
          src={project.img}
          alt={project.alt}
          onMouseOver={() => handleHover()}
          onMouseOut={() => handleHover()}
        />
        <Skills $active={hover}>
          {project.skills.map((skill) => {
            let skillIcon = getSkillIcon(skill);
            return (
              <>
                {skillIcon ? (
                  <Skill key={skillIcon.name}>
                    <IconImage item={skillIcon} size={25} />
                  </Skill>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </Skills>
      </PictureLink>
    </Project>
  );
}
