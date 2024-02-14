import { Navbar } from "./components/navbar/Navbar";
import { AboutMe } from "./modules/aboutMe-section/AboutMe";
import { HeroSection } from "./modules/hero-section/HeroSection";
import { Projects } from "./modules/projects/Projects";
import { SkillsExpertise } from "./modules/skills-expertise/SkillsExpertise";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { ProjectArchive } from "./pages/projectsArchive/ProjectArchive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects-archive",
    element: <ProjectArchive />,
  },
]);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
