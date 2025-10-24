import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ content }) => {
  const { title, subtitle, image1, image2, para, btnText } = content;
  const [showResume, setShowResume] = useState(false);

  // Initialize AOS
  useEffect(() => {
    Aos.init({ duration: 1200, offset: 100, once: true });
  }, []);

  return (
    <section
      id="about-me"
      className="min-h-screen bg-[#F5F1EB] flex items-center py-20 relative"
    >
      <div className="md:container px-5">
        {/* Titles */}
        <h2
          className="title text-3xl md:text-4xl font-semibold text-[#333333]"
          data-aos="fade-down"
        >
          {title}
        </h2>
        <h4
          className="subtitle text-[#555555] mt-2"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          {subtitle}
        </h4>

        {/* Main Content */}
        <div className="flex items-center md:flex-row flex-col-reverse gap-10 mt-10">
          {/* Images */}
          <div
            className="rounded-lg overflow-hidden bg-[#F5F1EB] max-w-sm md:block hidden"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img src={image1} alt="About Me" className="w-full h-auto" />
          </div>

          <div
            className="rounded-lg overflow-hidden bg-[#F5F1EB] max-w-sm md:hidden"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img src={image2} alt="About Me" className="w-full h-auto" />
          </div>

          {/* Text Card */}
          <div
            className="border border-[#E0D8CC] max-w-sm p-6 shadow-md rounded-xl sm:min-w-[22rem] bg-white"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <p className="leading-relaxed text-[#333333]">{para}</p>
            <br />
            <button
              className="px-6 py-2 rounded-md text-white bg-[#C6A87D] hover:bg-[#B79362] transition-colors"
              onClick={() => setShowResume(true)}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>

      {/* Resume Popup */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 md:p-10 rounded-xl w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] flex flex-col shadow-lg">
            
            {/* Header with close button */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#333333]">My Resume</h3>
              <button
                onClick={() => setShowResume(false)}
                aria-label="Close resume"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E0D8CC] text-[#555555] hover:text-[#333333]"
              >
                ✖
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto">
              <iframe
                src="/resume.pdf"
                title="Resume PDF"
                className="w-full h-[65vh] rounded-md border border-[#E0D8CC]"
              />
            </div>

            {/* Download Option */}
            <div className="mt-4 flex justify-center">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2 bg-[#C6A87D] text-white rounded-md hover:bg-[#B79362] transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
