import { Header } from "./components/Header/Header"
import { Container } from "./styles"
import { HomeSection } from "./components/HomeSection/HomeSection"
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection"
import { AboutSection } from "./components/AboutSection/AboutSection"
import { ContactSection } from "./components/ContactSection/ContactSection"
import { Footer } from "./components/Footer/Footer"

export function HomePage(){
  return (
    <>
      <Header />
      <Container>
        <HomeSection/>
        <ProjectsSection />
        <AboutSection />
        {/* <ContactSection /> */}
      </Container>
      <Footer/>
    </>
  )
}