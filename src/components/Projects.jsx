import { useState, useEffect, useRef } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../index.css";

const Projects = () => {
  const { Projects } = content;
  const [selectedProject, setSelectedProject] = useState(null);
  const [closing, setClosing] = useState(false); // For smooth fade-out
  const modalRef = useRef(null);

  // Close popup smoothly
  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setClosing(false);
    }, 300); // Duration matches CSS transition
  };

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (selectedProject) {
        closeModal();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedProject]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedProject]);

  return (
    <section className="bg-[#F5F1EB]" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title text-[#333333]" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle text-[#555555]" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <div className="rounded-lg overflow-hidden bg-[#F5F1EB] max-w-[45vw] min-w-[22rem]">
            <img
              src={Projects.image}
              alt="Project Main"
              className="w-full h-auto"
            />
          </div>

          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs self-start custom-swiper"
          >
            {Projects.project_content.map((proj, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 shadow-md border border-[#E0D8CC] h-fit"
              >
                <img src={proj.image} alt={proj.title} className="rounded-lg" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins text-[#333333]">{proj.title}</h5>
                  <button
                    className="font-bold text-[#C6A87D] self-end hover:text-[#B79362] transition-colors"
                    onClick={() => setSelectedProject(proj)}
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popup modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 transition-opacity ${
            closing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            ref={modalRef}
            className={`bg-white p-6 md:p-10 rounded-xl max-w-md shadow-lg text-center transform transition-transform ${
              closing ? "scale-95" : "scale-100"
            }`}
          >
            <h3 className="text-xl font-bold mb-4 text-[#333333]">{selectedProject.title}</h3>
            <p className="mb-6 text-[#555555]">{selectedProject.description}</p>
            <button
              className="px-6 py-2 bg-[#C6A87D] text-white rounded-md hover:bg-[#B79362] transition-colors"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;