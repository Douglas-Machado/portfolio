import { Subtitle, TextWrapper, Main, Title, ProfileImage } from "./styles"
import "animate.css"

import DouglasProfile from  "../../../assets/static/douglas.png"

export function HomeSection(){
  return(
    <Main>

      <TextWrapper>
        <Subtitle>Hi I am</Subtitle>
        <Title>Douglas Claudino Machado</Title>
        <Subtitle>Fullstack developer</Subtitle>
      </TextWrapper>

      <ProfileImage className="animate__animated animate__pulse animate__repeat-2 animate__delay-1s" src={DouglasProfile} alt="douglas-profile" />

      
    </Main>
  )
}