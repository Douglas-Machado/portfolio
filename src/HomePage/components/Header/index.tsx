import { HeaderTag, HeaderWrapper, HeaderLinks, Link } from "./styles"

export function Header(){
  return(
    <HeaderTag>
      <HeaderWrapper>
        <span>ICON</span>
        <HeaderLinks>
          <Link href="">Home</Link>
          <Link href="">Projects</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </HeaderLinks>
      </HeaderWrapper>
    </HeaderTag>
  )
}