import { FooterMain, FooterWrapper, Link, ContactInfosSpan, ContactInfosDiv } from "./styles"
import {FaLinkedin, FaGithub} from "react-icons/fa"

export function Footer(){
  return(
    <FooterMain>
      <FooterWrapper>
        <ContactInfosDiv>
          <ContactInfosSpan>Email: douglasclaudino10.dc@gmail.com</ContactInfosSpan>
          <ContactInfosSpan>Made by Douglas C. Machado</ContactInfosSpan>
        </ContactInfosDiv>
        <div>
            <Link target="_blank" href="https://www.linkedin.com/in/douglascmachado/">
              <FaLinkedin size={50} fill="#007acc"/>
            </Link>
          <Link target="_blank" href="https://github.com/Douglas-Machado">
            <FaGithub size={50} fill="black"/>
          </Link>
        </div>
      </FooterWrapper>
    </FooterMain>
  )
}