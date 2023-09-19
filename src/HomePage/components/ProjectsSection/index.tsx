import {
  ProjectsMain,
  Projects,
  PictureLink,
  ProjectPicture,
} from "./styles";
import { Title } from "../../styles";
import "animate.css";

import "./styles.css";
import { useState } from "react";
import { projects } from "../../utils/projects";

export function ProjectsSection() {
  const [showBox, setShowBox] = useState(false);
  function handleMouseOver() {
    setShowBox(!showBox);
  }

  function handleMouseOut() {
    setShowBox(!showBox);
  }

  return (
    <ProjectsMain id="projects">
      <Title>Projects</Title>
      <Projects>
        {
          projects.map((project) => {
            return (
              <div>
                <h2>{project.name}</h2>
                <PictureLink target="_blank" href={project.githubLink}>
                  <ProjectPicture
                    src={project.img}
                    alt={project.alt}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  />
                </PictureLink>
                {showBox ? (project.skills) : ""}
              </div>
            )
          })
        }
      </Projects>
    </ProjectsMain>
  );
}
