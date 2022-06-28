import { Subtitle } from "../../styles"
import { HeaderMain, HeaderWrapper, HeaderLinks, ListItem } from "./styles"
import { Button, Link } from "react-scroll"

export function Header(){
  return(
    <HeaderMain>
      <HeaderWrapper>
        <Subtitle style={{
          cursor: "default",
        }}>&lt;Portfolio /&gt;</Subtitle>
        <HeaderLinks>
          <ListItem>
            <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
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