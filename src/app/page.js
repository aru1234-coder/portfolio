import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/magicui/Header";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="w-1/2 h-full">
          {/* Header with profile image */}
          <Header />

          {/* about page */}
          <About />
          <Experience />
          <Education />
          <Skills />
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
