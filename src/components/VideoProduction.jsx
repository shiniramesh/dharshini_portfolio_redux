import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const VideoProduction = () => {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    Aos.refresh(); // refresh AOS for dynamic iframe
  }, [playVideo]);

  return (
    <section
      id="video-production"
      className="min-h-screen bg-[#F5F1EB] py-20 flex flex-col justify-center"
    >
      <div className="md:container px-5">
        {/* Headings */}
        <div className="text-left mb-10" data-aos="fade-down">
          <h2 className="title md:text-4xl text-3xl font-Inria font-bold text-[#333333]">
            Video Production
          </h2>
          <h4 className="subtitle text-[#555555] mt-2 font-Paprika">
            Crafting visual stories with emotion and precision
          </h4>
        </div>

        {/* Video */}
        <div
          className="w-full flex justify-center"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {!playVideo ? (
            <div
              className="relative w-[90%] md:w-[60%] bg-black rounded-2xl overflow-hidden shadow-md border border-[#E0D8CC] cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                alt="Video thumbnail"
                className="w-full h-auto opacity-80"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <button className="bg-[#C6A87D] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg hover:bg-[#B79362] transition">
                  ▶
                </button>
              </div>
            </div>
          ) : (
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video Production Reel"
              className="rounded-2xl border border-[#E0D8CC] w-[90%] md:w-[60%] shadow-md"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoProduction;
