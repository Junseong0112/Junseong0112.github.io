import Section from "./components/Section";
import AboutPage from "./pages/AboutPage";
import FooterPage from "./pages/FooterPage";
import MainPage from "./pages/MainPage";
import StudyPage from "./pages/StudyPage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Section id="main">
        <MainPage />
      </Section>
      <Section id="about">
        <AboutPage />
      </Section>
      <Section id="study">
        <StudyPage />
      </Section>
      <Section id="work">
        <WorkPage />
      </Section>
      <Section id="footer">
        <FooterPage />
      </Section>
    </div>
  );
}

export default App;
