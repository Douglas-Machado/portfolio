import { HeaderMain, HeaderWrapper, Link } from "./styles"
import {FaLinkedin, FaGithub} from "react-icons/fa"

export function Footer(){
  return(
    <HeaderMain>
      <HeaderWrapper>
        <div>
          <p>Email: douglasclaudino10.dc@gmail.com</p>
          <p>Made by Douglas C. Machado</p>
        </div>
        <div>
            <Link target="_blank" href="https://www.linkedin.com/in/douglascmachado/">
              <FaLinkedin size={50} fill="#007acc"/>
            </Link>
          <Link target="_blank" href="https://github.com/Douglas-Machado">
            <FaGithub size={50} fill="black"/>
          </Link>
        </div>
      </HeaderWrapper>
    </HeaderMain>
  )
}