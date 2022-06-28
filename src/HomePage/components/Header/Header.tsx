import { Subtitle } from "../../styles"
import { HeaderMain, HeaderWrapper, HeaderLogoSection, HeaderLinks, ListItem, ShowButton } from "./styles"
import { Link } from "react-scroll"
import "./styles.css"

export function Header(){
  return(
    <HeaderMain>
      <HeaderWrapper>
        <HeaderLogoSection>
          <Subtitle style={{
            cursor: "default",
          }}>&lt;Portfolio /&gt;</Subtitle>

        </HeaderLogoSection>
        <HeaderLinks>
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