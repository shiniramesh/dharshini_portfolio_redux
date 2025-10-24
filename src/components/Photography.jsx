import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Image1 from "../assets/images/Photography/Image1.jpeg";
import Image2 from "../assets/images/Photography/Image2.jpeg";
import Image3 from "../assets/images/Photography/Image3.jpeg";

const Photography = () => {
  const photos = [Image1, Image2, Image3];

  useEffect(() => {
    Aos.init({ duration: 1200, offset: 100, once: true });
  }, []);

  return (
    <section
      id="photography"
      className="min-h-screen bg-[#F5F1EB] py-20 flex flex-col justify-center"
    >
      <div className="md:container px-5">
        {/* Headings */}
        <div className="text-left mb-10" data-aos="fade-down">
          <h2 className="title md:text-4xl text-3xl font-Inria font-bold text-[#333333]">
            Photography
          </h2>
          <h4 className="subtitle text-[#555555] mt-2 font-Paprika">
            Capturing moments through my lens
          </h4>
        </div>

        {/* Photos grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {photos.map((src, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="rounded-xl overflow-hidden shadow-md border border-[#E0D8CC] bg-white"
            >
              {/* Hover scale wrapper */}
              <div className="transform transition-transform duration-300 hover:scale-105">
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  className="w-full h-80 md:h-96 object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
