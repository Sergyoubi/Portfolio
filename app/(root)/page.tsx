import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main className="w-screen h-screen bg-slate-900">
      <About />
      <Intro />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
