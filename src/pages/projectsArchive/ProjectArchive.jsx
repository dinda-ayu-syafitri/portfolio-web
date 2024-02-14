import React from "react";
import { MainLayout } from "../../Layouts/MainLayout";
import { Link } from "react-router-dom";

export const ProjectArchive = () => {
  return (
    <MainLayout>
      <section className="flex flex-col text-center justify-center items-center mx-5">
        <h1>Not Yet Available</h1>
        <p>Under Development</p>
        <p>Please contact me to get my projects archives for the meantime</p>
        <a href="/#contact">
          <button className="flex mx-auto justify-center items-center py-2 px-8 bg-theme-orange text-theme-off-white max-w-[90vw] md:max-w-[60vw] rounded-lg mt-5 hover:bg-theme-off-white hover:text-theme-orange">
            Send Me a Message
          </button>
        </a>
      </section>
    </MainLayout>
  );
};
