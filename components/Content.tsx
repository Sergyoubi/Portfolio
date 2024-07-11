import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";

const Content = () => {
  return (
    <div className="w-screen h-screen bg-slate-900">
      <About />
      <Intro />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Content;
