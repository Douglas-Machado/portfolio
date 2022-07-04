import { ProjectsMain, Projects, PictureLink, ProjectPicture, Technologies } from "./styles"
import { Title, Subtitle} from "../../styles"
import "animate.css"

import CurrencyConverterPicture from '../../../assets/static/currency-converter.png'

import {DiHtml5, DiCss3, DiGit} from "react-icons/di"
import {SiTailwindcss, SiJavascript, SiNodedotjs, SiTypescript, SiPrisma, SiElixir, SiBootstrap} from "react-icons/si"
import {FaReact, FaGithub, FaPhoenixFramework} from "react-icons/fa"

import DwayPicture from '../../../assets/static/dway.png'
import SocialFriendsPicture from '../../../assets/static/social-friends.png'
import "./styles.css"
import { useState } from "react"

export function ProjectsSection(){
  const [showBox, setShowBox] = useState(false)
  function handleMouseOver() {
    setShowBox(!showBox)
  }

  function handleMouseOut() {
    setShowBox(!showBox)
  }

  return(
    <ProjectsMain id="projects">
      <Title>Projects</Title>
      <Projects>
        <div>
          <h2>Currency Converter</h2>
            <PictureLink 
              target="_blank"
              href="https://currency-web-ten.vercel.app"
            >
              <ProjectPicture 
                src={CurrencyConverterPicture} 
                alt="currency-converter-picture"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} 
              />
            </PictureLink>
            {showBox ? 
            <Technologies className="animate__animated animate__slideInDown">
              <DiGit fill="#F1502F"/>
              <FaGithub/>
              <DiHtml5 fill="#e34c26"/>
              <DiCss3 fill="#264de4"/>
              <SiTailwindcss fill="#1e69e3"/>
              <SiJavascript fill="#f0db5f"/>
              <SiTypescript fill="#007acc"/>
              <SiNodedotjs fill="#3C873A"/>
              <FaReact fill="#88dded"/>
            </Technologies>
              :
              ""
            }
        </div>
        <div>
          <h2>Dway</h2>
          <PictureLink target="_blank" href="https://github.com/Douglas-Machado/dway">
            <ProjectPicture 
              src={DwayPicture} 
              alt="dway-picture" 
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut} 
            />
          </PictureLink>
          {showBox ? 
          <Technologies className="animate__animated animate__slideInDown">
            <DiGit fill="#F1502F"/>
            <FaGithub/>
            <DiHtml5 fill="#e34c26"/>
            <DiCss3 fill="#264de4"/>
            <SiBootstrap fill="#563d7c"/>
            <SiElixir fill="#320e63"/>
            <FaPhoenixFramework fill="#fd4f00"/>
            <SiJavascript fill="#f0db5f"/>
          </Technologies>
            :
            ""
          }
        </div>
        <div>
          <h2>College API</h2>
          <PictureLink 
            target="_blank" 
            href="https://github.com/Douglas-Machado/college-node"
          >
            <div 
              className="img-background"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut} 
            >
              <Subtitle>API Backend</Subtitle>
            </div>
          </PictureLink>
          {showBox ? 
          <Technologies className="animate__animated animate__slideInDown">
            <DiGit fill="#F1502F"/>
            <FaGithub/>
            <SiJavascript fill="#f0db5f"/>
            <SiTypescript fill="#007acc"/>
            <SiNodedotjs fill="#3C873A"/>
          </Technologies>
            :
            ""
          }
        </div>
        <div>
          <h2>Social Friends(Coming soon)</h2>
          <PictureLink target="_blank">
            <ProjectPicture 
              src={SocialFriendsPicture} 
              alt="social-friends-picture"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut} 
            />
          </PictureLink>
          {showBox ? 
          <Technologies className="animate__animated animate__slideInDown">
            <DiGit fill="#F1502F"/>
            <FaGithub/>
            <DiHtml5 fill="#e34c26"/>
            <DiCss3 fill="#264de4"/>
            <SiTailwindcss fill="#1e69e3"/>
            <SiJavascript fill="#f0db5f"/>
            <SiTypescript fill="#007acc"/>
            <SiNodedotjs fill="#3C873A"/>
            <FaReact fill="#88dded"/>
            <SiPrisma fill="#0C344B"/>
          </Technologies>
            :
            ""
          }
        </div>
      </Projects>
    </ProjectsMain>
  )
}