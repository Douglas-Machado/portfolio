import { Subtitle, Title } from "../HomeSection/styles";
import { AboutMain } from "./styles";
import {DiHtml5, DiCss3, DiReact} from "react-icons/di"
import {SiJavascript, SiNodedotjs} from "react-icons/si"

export function AboutSection(){
  return(
    <AboutMain>
      <Title>About</Title>

      <div>
        <div style={{
          textAlign: "left",
          marginBottom: "48px"
        }}>
          <Subtitle>Education</Subtitle>
          <p style={{
            color: "white",
          }}>I graduated in T.I Management at Unicesumar.</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left"
        }}>
          <div>
            <Subtitle>Programming</Subtitle>
            <p style={{
              color: "white",
            }}></p>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center"
          }}>
            <DiHtml5 size={80}/>
            <DiCss3 size={80}/>
            <SiJavascript size={65}/>
            <DiReact size={80}/>
            <SiNodedotjs size={65}/>
          </div>
        </div>
      </div>
    </AboutMain>
  )
}