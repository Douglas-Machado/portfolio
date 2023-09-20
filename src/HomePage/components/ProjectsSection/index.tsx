import { ProjectsMain, Projects, SpanInfo } from "./styles";
import { Title } from "../../styles";
import "animate.css";

import "./styles.css";
import { projects } from "../../utils/projects";
import { ProjectsComponent } from "./ProjectsComponent";

export function ProjectsSection() {
  return (
    <ProjectsMain id="projects">
      <Title>Projects</Title>
      <SpanInfo>mouse over for more information</SpanInfo>
      <Projects>
        {projects.map((project) => (
          <ProjectsComponent project={project} />
        ))}
      </Projects>
    </ProjectsMain>
  );
}
