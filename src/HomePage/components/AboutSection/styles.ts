import styled from "styled-components";

export const AboutMain = styled.section`
  margin: 0 auto;
  padding-top: 80px;
  min-height: 800px;
  text-align: center;

  @media (max-width: 768px) {
    min-height: 1000px;
  }
`

export const About = styled.div`
  display: flex;

  flex-direction: column;

  gap: 100px;
`

export const AboutMe = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    max-width: 90%
  }
`

export const AboutEducation = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    max-width: 90%
  }
`

export const Paragraph = styled.p`
  color: white;
  font-size: 18px;
`

export const AboutSkills = styled.div`
display: flex;

@media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    max-width: 90%;
  }
`

export const SkillsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: right;
`

export const SkillDescriptionContainer = styled.div`
  width: 50%;
  `

export const SkillDescriptionWrapper = styled.div`
  margin: 20% 20%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
  
export const Skills = styled.div` 
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
`
export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const SkillsSectionWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const SkillDescription = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
`

export const SkillDescriptionPlaceholder = styled.p`
  font-size: 32px;
  font-weight: bold;
`

export const Skill = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  min-width: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 1px 0;

  transition: background-color 400ms;
  &:hover {
    background-color: #b4ff8f;
  }

  @media (max-width: 768px) {
    max-width: 4rem;
    max-height: 5rem;
  }
`
