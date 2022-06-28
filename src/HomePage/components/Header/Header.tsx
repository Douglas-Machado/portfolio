import { Subtitle } from "../../styles"
import { HeaderMain, HeaderWrapper, HeaderLogoSection, HeaderLinks, ListItem, ShowButton } from "./styles"
import { Link } from "react-scroll"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import "./styles.css"

import { useState } from "react"

export function Header(){
  const [isClicked, setIsClicked] = useState(false)
  function setClicked(){
    isClicked === true ? setIsClicked(false) : setIsClicked(true)
  }

  return(
    <HeaderMain>
      <HeaderWrapper>
        <HeaderLogoSection>
          <Subtitle style={{
            cursor: "default",
          }}>&lt;Portfolio /&gt;</Subtitle>

          {(isClicked) ?
            <ShowButton active={isClicked}
            onClick={setClicked}>
              <RiArrowUpSLine style={{
                margin: "0 auto",
              }} className="arrow" size={40} fill="white"/>
            </ShowButton>
            :
            <ShowButton active={isClicked}
            onClick={setClicked}>
              <RiArrowDownSLine style={{
                margin: "0 auto",
              }} className="arrow" size={40} fill="white"/>
            </ShowButton>
            }

        </HeaderLogoSection>
        <HeaderLinks active={isClicked}>
          <ListItem>
            <Link 
              activeClass="active" to="home" spy={true} smooth={true}>
                Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to="projects" spy={true} smooth={true}>Projects</Link>
          </ListItem>
          <ListItem>
            <Link to="about" spy={true} smooth={true}>About</Link>
          </ListItem>
          {/* <Button>Contact</Button> */}
        </HeaderLinks>
      </HeaderWrapper>
    </HeaderMain>
  )
}