import { useState } from "react";
import Section from "./components/Section";
import AboutPage from "./pages/AboutPage";
import FooterPage from "./pages/FooterPage";
import MainPage from "./pages/MainPage";
import StudyPage from "./pages/StudyPage";
import WorkPage from "./pages/WorkPage";
import Navigation from "./components/Navigation";

function App() {
  const [currentSection, setCurrentSection] = useState<string>("main");

  const handleVisibilityChange = (id: string, isVisible: boolean) => {
    if (isVisible) {
      setCurrentSection(id);
    }
  };
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Section id="main" onVisibilityChange={handleVisibilityChange}>
        <MainPage />
      </Section>
      <Section id="about" onVisibilityChange={handleVisibilityChange}>
        <AboutPage />
      </Section>
      <Section id="study" onVisibilityChange={handleVisibilityChange}>
        <StudyPage />
      </Section>
      <Section id="work" onVisibilityChange={handleVisibilityChange}>
        <WorkPage />
      </Section>
      <Section id="footer" onVisibilityChange={handleVisibilityChange}>
        <FooterPage />
      </Section>
      <Navigation
        isVisible={currentSection !== "main" && currentSection !== "footer"}
      />
    </div>
  );
}

export default App;
