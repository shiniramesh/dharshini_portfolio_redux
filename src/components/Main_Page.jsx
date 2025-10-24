import React, { useState, useEffect, useRef } from "react";

const Main_Page = ({ content }) => {
  const { title, firstName, LastName, btnText, Main_Page_content, image } = content;
  const [showPopup, setShowPopup] = useState(false);
  const [closing, setClosing] = useState(false);
  const popupRef = useRef(null);

  const closePopup = () => {
    setClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setClosing(false);
    }, 150); // fast fade
  };

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (showPopup) closePopup();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        closePopup();
      }
    };
    if (showPopup) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row">
      {/* Left column */}
      <div className="w-full md:w-3/5 bg-[#F5F1EB] flex flex-col justify-center px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>

        {/* About Me button */}
        <button
          className="bg-[#C6A87D] text-white px-4 py-2 rounded-md hover:bg-[#B79362] self-start"
          onClick={() => setShowPopup(true)}
        >
          {btnText}
        </button>

        <div className="flex flex-col gap-6 mt-10">
          {Main_Page_content.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 w-full md:w-80 ${
                i === 1 ? "flex-row-reverse text-right" : ""
              }`}
            >
              <h3 className="text-xl font-semibold">{item.count}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div
        className="w-full md:w-2/5 relative h-80 md:h-auto"
        style={{
          background: "linear-gradient(to bottom, rgba(198,168,125,0.8), rgba(245,241,235,0.3))",
        }}
      >
        <img
          src={image}
          alt="Main_Page"
          className="w-full h-full object-cover mix-blend-multiply"
        />
        {/* Name overlay */}
        <div className="absolute top-1/4 left-1/2 md:left-auto md:right-4 transform -translate-x-1/2 md:translate-x-0 text-center md:text-left w-full md:w-auto px-2">
          <h1 className="md:text-4xl text-2xl font-bold text-white">
            {firstName} <span className="text-[#C6A87D]">{LastName}</span>
          </h1>
        </div>
      </div>

      {/* About Me Popup */}
      {showPopup && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-150 ${
            closing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            ref={popupRef}
            className="bg-white p-8 rounded-xl max-w-md text-center relative shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="mb-6">
              I am an Interaction and Experience Design enthusiast with
              experience in Unity, Python & React.js. I enjoy building
              interactive applications and designing engaging user experiences.
            </p>
            <button
              className="bg-[#C6A87D] text-white px-6 py-2 rounded-full hover:bg-[#B79362] transition-colors"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Main_Page;