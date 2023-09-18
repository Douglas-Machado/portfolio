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
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`;

export const PictureLink = styled.a`
  text-decoration: none;
`;

export const ProjectPicture = styled.img`
  width: calc(1200px / 3);
  height: 211px;
  border-radius: 20px;

  box-shadow: 20px 20px 10px 0px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Technologies = styled.div`
  display: flex;
  gap: 2%;
  justify-content: center;
  padding-top: 16px;
`;
