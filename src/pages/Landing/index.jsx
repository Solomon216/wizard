import React from "react";
//Layout
import Header from "../../Layout/Header";
//Sections
import Home from "../../sections/Home";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Contact from "../../sections/Contact";
import ToggleThemeButton from "../../components/ToggleThemeButton";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <ToggleThemeButton />
    </>
  );
};

export default Landing;
