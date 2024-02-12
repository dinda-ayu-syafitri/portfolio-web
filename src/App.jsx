import { Navbar } from "./components/navbar/Navbar";
import { AboutMe } from "./modules/aboutMe-section/AboutMe";
import { HeroSection } from "./modules/hero-section/HeroSection";

const App = () => {
  return (
    <div className="bg-theme-dark-blue text-theme-off-white">
      <Navbar />
      <HeroSection />
      <AboutMe />
      {/* <section id="parallax1">Parallax</section> */}
      {/* <section id="aboutMe">About Me</section> */}
      <section id="parallax2">Parallax</section>
      <section id="projects">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="contact">Contact</section>
    </div>
  );
};

export default App;
