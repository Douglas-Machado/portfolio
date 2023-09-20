import styled from "styled-components";

export const ProjectsMain = styled.section`
  margin: 0 auto;
  padding-top: 80px;
  text-align: center;
  margin-bottom: 104px;
  min-height: 740px;
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`;

export const Project = styled.div`
  min-height: 344px;
`;

export const PictureLink = styled.a`
  text-decoration: none;
`;

export const ProjectPicture = styled.img`
  width: calc(1200px / 3);
  height: 211px;
  border-radius: 20px;

  transition: background-color 400ms;
  &:hover {
    filter: blur(1px);
  }

  box-shadow: 20px 20px 10px 0px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Skills = styled.div<{ $active: boolean }>`
  display: ${(props) => (props.$active ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Skill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;

  transition: background-color 400ms;
  &:hover {
    background-color: #b4ff8f;
  }

  @media (max-width: 768px) {
    max-width: 4rem;
    max-height: 5rem;
  }
`;

export const SpanInfo = styled.span`
  font-weight: bold;
  color: #e67a84;
`;
