import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  min-height: 1000px;
  display: flex;

  align-items: center;

  @media (max-width: 768px) {
    min-height: 1000px;
    padding-top: 100px;
    flex-direction: column;
    text-align: center;
    gap: 100px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;

  justify-content: center;
`

export const ProfileImage = styled.img`
  height: 528px;

  @media (max-width: 768px) {
    height: 320px;
  }
`