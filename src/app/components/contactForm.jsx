import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, message });
    // Add your form submission logic here
  };

  return (
    <div
      style={{
        border: "1.5px solid",
        borderImageSource:
          "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #2342CC 100.01%)",
      }}
      className="backdrop-blur-[31.4px] mx-[16px] md:mx-0 bg-[#161B21] flex items-center justify-between p-[54px] md:p-[70px] rounded-[24px] max-w-[1120px] w-full px-[16px] md:px-[80px] mt-[-250px] "
    >
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col mb-8 md:mb-0">
          <div className="mb-4 flex justify-center md:justify-start">
            <img src="/icons/phone.png" alt="epic" className="w-[50px]" />
          </div>
          <div className="text-white max-w-[440px]">
            <p className="text-transparent md:text-[40px] text-[24px] font-[500] bg-gradient-to-r from-[#F3F5FF] via-[#C8FE9F] to-[#F3F5FF] bg-clip-text">
              Book a call with us and make something great happen!
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#F7F9FC] mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="pat@shuffle.dev"
                className="w-full bg-[#FFFFFF1F] border border-[#E6EBEE33] rounded-[8px] p-4 text-white placeholder-[ #F7F9FCCC]"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-[#F7F9FC] mb-2">
                Any Other Message For Us ?
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="type here"
                rows={4}
                style={{ resize: "none" }}
                className="w-full bg-[#FFFFFF1F] border border-[#E6EBEE33] rounded-[8px] p-4 text-white placeholder-[ #F7F9FCCC]"
              />
            </div>
            <div className="flex justify-center">
              <button className="flex items-center h-[38px] gap-3 p-[6px] rounded-[100px] ps-[20px] bg-[linear-gradient(91.34deg,#2342CC_0.01%,#0A259D_100.01%),radial-gradient(142.39%_1113.97%_at_32.52%_41.25%,#5E7BFE_0%,#2342CE_100%)]">
                <div className="flex items-center gap-2">
                  Partner With Us
                  <img
                    src="/icons/rightArrowWhite.png"
                    alt="arrow"
                    className="w-[20px]"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
