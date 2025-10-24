import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wrcr3rq",   // ✅ Your Service ID
        "template_b2dd7cc", // ✅ Your Template ID
        form.current,
        "VW9Y-skkTLNFbJqej" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("✅ Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("❌ Failed to send email. Try again!");
        }
      );
  };

  return (
    <section className="bg-[#E8DFC9] text-[#333333]" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title text-[#333333]" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle text-[#555555]" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5 bg-white p-6 rounded-xl shadow-md"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-[#C6A87D] p-3 rounded text-[#333]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Id"
              required
              className="border border-[#C6A87D] p-3 rounded text-[#333]"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-[#C6A87D] p-3 rounded text-[#333] h-44"
              required
            ></textarea>
            <button
              type="submit"
              className="btn self-start px-6 py-2 rounded-md bg-[#C6A87D] text-white hover:bg-[#B79362] transition-colors"
            >
              Submit
            </button>
          </form>

          {/* Social Media */}
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-[#333333]">{createElement(content.icon)}</h4>
                <a
                  className="font-Poppins text-[#333333] hover:text-[#555555]"
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
