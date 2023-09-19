import { Header } from "./components/Header/Header";
import { Container } from "./styles";
import { HomeSection } from "./components/HomeSection/HomeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { Footer } from "./components/Footer/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <HomeSection />
        <ProjectsSection />
        <AboutSection />
      </Container>
      <Footer />
    </>
  );
}
