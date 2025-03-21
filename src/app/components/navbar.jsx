import React from "react";

const Navbar = () => {
  return (
    <div className="py-[13px] hidden md:flex justify-between bg-[#161B21] px-[40px]">
      <div className="flex gap-[48px] ">
        <img src="/epicGlobal.svg" className="h-[42px] w-[56px]" alt="logo" />
        <div className="flex text-[#F7F9FC] gap-[40px] items-center text-[14px] leading-[26px] font-medium">
          <p>About us</p>
          <p>Services</p>
          <p>Solutions</p>
          <p>Case Studies</p>
        </div>
      </div>
      <div className="flex gap-[16px] text-[14px] font-semibold">
        <button
          className="flex items-center rounded-[100px] w-[134px] h-[38px] justify-center cursor bg-[#FFFFFF52] text-[#F7F9FC] cursor-pointer"
          style={{
            border: "1px solid",
            borderImageSource: "linear-gradient(0deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.32)), radial-gradient(142.39% 1113.97% at 32.52% 41.25%, #5E7BFE 0%, #C6FE95 100%)"
          }}
        >
          Login
        </button>
        <button className="cursor-pointer rounded-[100px] flex items-center w-[134px] h-[38px] justify-center bg-gradient-to-r from-[#5E7BFE] to-[#2342CE]">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
