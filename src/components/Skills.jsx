import { useSelector, useDispatch } from "react-redux";
import { openSkill, closeSkill } from "../features/skills/skillsSlice";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "28rem",
    width: "90%",
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: "#FFFFFF",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 50,
  },
};

Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const dispatch = useDispatch();
  const selectedSkill = useSelector((state) => state.skills.selectedSkill);
  const modalIsOpen = selectedSkill !== null;

  return (
    <section className="min-h-screen flex flex-col justify-between bg-[#F5F1EB] py-16" id="skills">
      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => dispatch(closeSkill())} style={customStyles}>
        <div className="flex items-center gap-2 mb-4">
          <img className="h-10" src={selectedSkill?.logo} alt={selectedSkill?.name} />
          <h6 className="text-lg font-bold text-[#333333]">{selectedSkill?.name}</h6>
        </div>
        <p className="font-Poppins sm:text-sm text-xs !leading-7 mb-6 text-justify text-[#555555]">
          {selectedSkill?.para}
        </p>
        <div className="flex justify-end">
          <button
            onClick={() => dispatch(closeSkill())}
            className="px-6 py-2 rounded-md bg-[#C6A87D] text-white hover:bg-[#B79362] transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Skills content */}
      <div className="md:container px-5 py-14">
        <h2 className="title text-[#333333]" data-aos="fade-down">{skills.title}</h2>
        <h4 className="subtitle text-[#555555]" data-aos="fade-down">{skills.subtitle}</h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-[#E0D8CC] shadow-sm"
              onClick={() => dispatch(openSkill(skill))}
            >
              <div>
                <img src={skill.logo} alt={skill.name} className="w-10 group-hover:scale-125 duration-200" />
              </div>
              <div>
                <h6 className="font-bold text-[#333333]">{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
