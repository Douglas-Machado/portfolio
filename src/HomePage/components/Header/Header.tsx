import { Subtitle} from "../../styles"
import { HeaderMain, HeaderWrapper, HeaderLinks, Link } from "./styles"

export function Header(){
  return(
    <HeaderMain>
      <HeaderWrapper>
        <Subtitle>&lt;Portfolio /&gt;</Subtitle>
        <HeaderLinks>
          <Link href="">Home</Link>
          <Link href="">Projects</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </HeaderLinks>
      </HeaderWrapper>
    </HeaderMain>
  )
}