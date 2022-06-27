import { Header } from "./components/Header"
import { Container } from "./styles"
import { HomeSection } from "./components/HomeSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { AboutSection } from "./components/AboutSection"

export function HomePage(){
  return (
    <>
      <Header />
      <Container>
        <HomeSection/>
        <ProjectsSection />
        <AboutSection />
      </Container>
    </>
  )
}