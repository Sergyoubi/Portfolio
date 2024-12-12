import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

const Home = () => {
  return (
    <main className="w-screen h-screen bg-black">
      <About />
      <Intro />
      <Experience />
      <Projects />
      <TechStack />
      <Footer />
    </main>
  );
};

export default Home;
