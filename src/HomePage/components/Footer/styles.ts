import styled from "styled-components";

export const FooterMain = styled.footer`
  padding: 1.5rem 0;
  inset: auto 0;
  background-color: #960c0c;
`

export const FooterWrapper = styled.div`
  display: grid;

  grid-template-columns: 2fr 1fr;
  column-gap: 300px;
  position: relative;
  text-align: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const Link = styled.a`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  padding-left: 24px;
`

export const ContactInfosDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
    margin-bottom: 16px;
    text-align: center;
  }
`

export const ContactInfosSpan = styled.span`
  padding-right: 24px;
  font-size: 14px;
`
