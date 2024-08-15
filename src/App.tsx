import { useState } from "react";
import Section from "./components/Section";
import AboutPage from "./pages/AboutPage";
import FooterPage from "./pages/FooterPage";
import MainPage from "./pages/MainPage";
import StudyPage from "./pages/StudyPage";
import WorkPage from "./pages/WorkPage";
import Navigation from "./components/Navigation";

const sectionID: string[] = ["main", "about", "study", "work", "footer"];

const renderPage = (id: string) => {
  switch (id) {
    case "main":
      return <MainPage />;
    case "about":
      return <AboutPage />;
    case "study":
      return <StudyPage />;
    case "work":
      return <WorkPage />;
    case "footer":
      return <FooterPage />;
    default:
      return null;
  }
};

function App() {
  const [currentSection, setCurrentSection] = useState<string>("main");

  const handleVisibilityChange = (id: string, isVisible: boolean) => {
    if (isVisible) {
      setCurrentSection(id);
    }
  };
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {sectionID.map((id) => (
        <Section key={id} id={id} onVisibilityChange={handleVisibilityChange}>
          {renderPage(id)}
        </Section>
      ))}
      <Navigation
        isVisible={currentSection !== "main" && currentSection !== "footer"}
      />
    </div>
  );
}

export default App;
