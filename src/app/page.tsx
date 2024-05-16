import Footer from "components/global/footer/Footer";
import Navbar from "components/global/navbar/Navbar";
import About from "components/home/About";
import Contact from "components/home/contact/Contact";
import Hero from "components/home/Hero";
import Projects from "components/home/projects/Projects";
import Skills from "components/home/skills/Skills";
import { homeNavbarElements } from "data/home";

export default function Home() {
  return (
    <>
      <Navbar mainLinksToSamePage mainLink="hero" subLinks={homeNavbarElements} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
