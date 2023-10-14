import Education from "./components/Education";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
