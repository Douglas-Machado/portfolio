import styled from "styled-components";

export const HeaderMain = styled.header`
  padding: 1.5rem 0;
  inset: auto 0;
  background-color: #4a3a63;
`

export const HeaderWrapper = styled.div`
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
  padding-left: 20px;
`