import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./Layouts/Navbar";
import Main_Page from "./components/Main_Page";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Photography from "./components/Photography";
import VideoProduction from "./components/VideoProduction";
import Contact from "./components/Contact";
import { content } from "./Content";

const App = () => {
  const [showPopup, setShowPopup] = useState(false); // for About popup

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home / Main Section */}
      <Main_Page
        content={content.Main_Page}
        onOpenPopup={() => setShowPopup(true)}
      />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About
        content={content.About}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />

      {/* Photography Section */}
      <Photography />

      {/* Video Production Section */}
      <VideoProduction />

      {/* Contact Section */}
      <Contact content={content.Contact} />

      {/* Footer */}
      <footer className="p-3 text-center bg-[#F5F1EB] border-t border-[#E0D8CC]">
        <h6 className="mb-3 text-[#333333]">DHARSHINI RAMESH BABU</h6>
      </footer>
    </div>
  );
};

export default App;
