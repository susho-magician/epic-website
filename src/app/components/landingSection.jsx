"use client";

import { useEffect, useState } from "react";

export default function LandingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="w-full lg:py-[125px] py-[75px] bg-center  bg-[url('/homePageBg1.png')] bg-cover px-[16px] md:px-[0px]">
      <p
        className={`max-w-[920px] text-center mx-auto text-transparent text-[32px] md:text-[74px] font-normal bg-gradient-to-r from-[#93A5F7] via-[#F9F7FC] to-[#93A5F7] bg-clip-text 
        transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        AI-Driven, Data-Powered,
        <br />
        Future-Ready
      </p>
      <img
        src="/landingUnderline.png"
        className={`max-w-[350px] w-[100px] md:w-full mx-auto mt-[0px] md:mt-[-5px] transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        alt="Epic"
      />
      <div
        className={`text-[#F9F7FC] text-center w-full text-[14px] md:text-[16px] max-w-[650px] mt-[8px] mx-auto transition-all duration-1000 ease-out delay-200 
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Epic Global helps brands thrive in an AI-driven world through eCommerce
        expansion, brand protection, and data-driven insights. No fees, no
        risk—just growth.
      </div>
      <div
        className={`mt-[32px] md:mt-[54px] bg-gradient-to-r from-[rgba(249,247,252,0.06)] to-[rgba(249,247,252,0.1)] backdrop-blur-lg grid grid-cols-2 md:grid-cols-4 gap-4 px-[16px] py-[20px] max-w-[1120px] mx-auto rounded-[20px]`}
      >
        {[
          {
            value: "90%",
            label: "Sales Boost",
            description: "Trusted for innovation and reliability",
            image: "sales.png",
          },
          {
            value: "30+",
            label: "Marketplaces",
            description: "Delivering transformative results",
            image: "marketplaces.png",
          },
          {
            value: "50+",
            label: "Global Presence",
            description: "Collaborating for unparalleled success",
            image: "global.png",
          },
          {
            value: "99.8%",
            label: "Higher Conversions",
            description: "Boosting revenue streams",
            image: "conversions.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`text-center transition-all duration-1000 ease-out delay-${
              index * 200
            } 
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-[#C6FE95] font-[700] text-[22px] md:text-[28px]">
              {item.value}
            </div>
            <div className="flex gap-3 justify-center items-center">
              <div className="w-[24px] flex items-center h-[24px] rounded-full bg-[radial-gradient(142.39%_1113.97%_at_32.52%_41.25%,rgba(243,245,255,0.1)_0%,rgba(147,165,247,0.1)_100%)]">
                <img
                  src={`/icons/${item.image}`}
                  alt="epic"
                  className="w-[16px] m-auto"
                />
              </div>
              <div style={{textWrap: "nowrap"}} className="text-[#F9F7FC] font-[600] text-[13px] md:text-[18px]">
                {item.label}
              </div>
            </div>
            <div className="text-[10px] md:text-[14px] text-[#C7C5C9]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
