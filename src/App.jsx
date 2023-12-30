import { motion, useScroll } from "framer-motion";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Experince from "./components/experince";
import Projects from "./components/projects";
import Footer from "./components/footer";
import ContactMe from "./components/contactMe";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="scroll-smooth">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="sticky bg-white w-[100%] h-[2px] top-0 z-10 "
      />
      <Hero></Hero>
      <Skills></Skills>
      <Experince></Experince>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
