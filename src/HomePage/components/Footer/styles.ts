import styled from "styled-components";

export const FooterMain = styled.footer`
  padding: 1.5rem 0;
  inset: auto 0;
  background-color: #4a3a63;
`

export const FooterWrapper = styled.div`
  display: grid;

  grid-template-columns: 2fr 1fr;
  column-gap: 300px;
  position: relative;
  text-align: center;
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
`

export const ContactInfosSpan = styled.span`
  padding-right: 24px;
  font-size: 14px;
`