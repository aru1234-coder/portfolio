import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/magicui/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="relative w-1/2 h-full p-2.5">
          <Header />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
