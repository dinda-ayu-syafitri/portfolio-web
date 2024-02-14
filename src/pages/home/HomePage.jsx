import React from "react";
import { HeroSection } from "../../modules/hero-section/HeroSection";
import { AboutMe } from "../../modules/aboutMe-section/AboutMe";
import { SkillsExpertise } from "../../modules/skills-expertise/SkillsExpertise";
import { Projects } from "../../modules/projects/Projects";
import { MainLayout } from "../../Layouts/MainLayout";
import { Contact } from "../../modules/contact/Contact";

export const HomePage = () => {
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
