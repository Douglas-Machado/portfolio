import styled from "styled-components"

export const HeaderMain = styled.header`
  background: rgba(202, 169, 169, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.9px);
  -webkit-backdrop-filter: blur(7.9px);
  border-bottom: 3px solid rgba(202, 169, 169, 1);
  padding: 1.5rem 0;

  position: fixed;
  inset: auto 0;
  z-index: 10;
`

export const HeaderWrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 2fr;
  column-gap: 600px;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HeaderLogoSection = styled.div`
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const ShowButton = styled.button`
  display: none;
  background: none;
  border: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 768px) {
    flex-direction: column;
    display: none
  }
`

export const ListItem = styled.li`
  list-style-type: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`

export const Button = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
`