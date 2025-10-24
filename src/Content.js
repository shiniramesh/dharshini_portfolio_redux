// import images
import Main_Page_person from "./assets/images/Main_Page/shini.png";

import python from "./assets/images/Skills/python.png";
import unity from "./assets/images/Skills/Unity.png";
import blender from "./assets/images/Skills/Blender.png";
import reactjs from "./assets/images/Skills/react.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.jpeg";
import project3 from "./assets/images/projects/img3.jpeg";
import person_project from "./assets/images/projects/sunflower.png";

import About_person from "./assets/images/About/cat.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiCameraLine, RiVideoLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar, MdCall } from "react-icons/md";

export const content = {
  nav: [
    { link: "#home", icon: TbSmartHome },
    { link: "#skills", icon: BiUser },
    { link: "#projects", icon: RiProjectorLine },
    { link: "#about-me", icon: RiServiceLine },
    { link: "#photography", icon: RiCameraLine },
    { link: "#video-production", icon: RiVideoLine },
    { link: "#contact", icon: MdOutlinePermContactCalendar },
  ],

  Main_Page: {
    title: "Interaction & Experience Designer",
    firstName: "Dharshini",
    LastName: "Ramesh Babu",
    btnText: "About Me",
    subtitle: "Designing intuitive and engaging digital experiences",
    image: Main_Page_person,
    Main_Page_content: [
      { count: "M.Sc", text: "Interaction & Experience Design" },
      { count: "4+", text: "Projects in Unity, Python & React.js" },
      { count: "4", text: "Years of Academic & Personal Experience" },
    ],
  },

  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Python",
        para: "Proficient in Data Analysis, Automation, and Machine Learning Applications. Experienced with libraries like Pandas, NumPy, Matplotlib, and scikit-learn. Able to build predictive models, automate tasks, and handle large datasets efficiently.",
        logo: python,
      },
      {
        name: "Unity",
        para: "Experienced in game development, interactive simulations, and 3D Applications. Skilled in creating immersive experiences, using physics engines, animations, scripting in C#, and optimizing performance for PC and mobile platforms.",
        logo: unity,
      },
      {
        name: "Blender",
        para: "Skilled in 3D Modelling, texturing, Animation, and rendering. Capable of creating detailed 3D assets, character rigging, lighting, and realistic scene composition for games, VR, or animations.",
        logo: blender,
      },
      {
        name: "React js",
        para: "Frontend development with reusable components, hooks, and state management. Experienced in building responsive, interactive web applications, integrating APIs, and using tools like Redux and Tailwind CSS for optimized UI/UX.",
        logo: reactjs,
      },
    ],
  },

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "ART Immerse: Accessible 360° VR Immersive Experience",
        image: project1,
        description:
          "A 360-degree VR platform for art appreciation, allowing users to explore artwork in fully immersive virtual galleries. Enhances interactivity and presence, providing a richer understanding of art and context.",
      },
      {
        title: "Interactive Anatomy Exploration in Mixed Reality",
        image: project2,
        description:
          "Transforming 2D CT and MRI scans into interactive 3D models using Hololens and advanced segmentation algorithms. Enables real-time examination and modification of anatomical elements for research, surgical preparation, and medical education.",
      },
      {
        title: "Machine Learning Prognostics for Genetic Disorder Predictions",
        image: project3,
        description:
          "ML algorithms analyze genetic, environmental, and demographic data to predict the likelihood of genetic disorders. Supports personalized treatment strategies, early interventions, and preventive healthcare.",
      },
    ],
  },

  About: {
    title: "About Me",
    subtitle: "A FEW HIGHLIGHTS",
    image1: About_person,
    image2: About_person,
    para: "My Resume", // short preview
    btnText: "Click",
  },

  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "shinirameshh@gmail.com",
        icon: GrMail,
        link: "mailto:shinirameshh@gmail.com",
      },
      {
        text: "+353 89 496 1182",
        icon: MdCall,
        link: "https://wa.me/+353894961182",
      },
      {
        text: "shhinnii",
        icon: BsInstagram,
        link: "https://www.instagram.com/shhinnii/",
      },
    ],
  },
};
