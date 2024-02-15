import React, { useEffect } from "react";
import { HeroSection } from "../../modules/hero-section/HeroSection";
import { AboutMe } from "../../modules/aboutMe-section/AboutMe";
import { SkillsExpertise } from "../../modules/skills-expertise/SkillsExpertise";
import { Projects } from "../../modules/projects/Projects";
import { MainLayout } from "../../Layouts/MainLayout";
import { Contact } from "../../modules/contact/Contact";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const hash = useLocation().hash;

  useEffect(() => {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <MainLayout>
      <HeroSection />
      <AboutMe />
      <SkillsExpertise />
      <Projects />
      <Contact />
    </MainLayout>
  );
};
