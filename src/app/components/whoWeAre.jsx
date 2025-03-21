"use client";

import { useEffect, useState } from "react";

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("who-we-are");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="who-we-are"
      className="flex flex-col md:flex-row justify-between gap-4 py-[40px] bg-[#161B21] bg-[url('/whoBackground.png')] bg-cover bg-center px-[16px] md:px-[80px]"
    >
      <img
        src="/who.png"
        className={`max-w-[487px] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        alt="Epic"
      />

      <div
        className={`transition-all duration-1000 ease-out delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
      >
        <div className="flex items-center justify-center md:juustify-start mb-[16px] gap-3">
          <p className="text-transparent text-[20px] md:text-[40px] font-[500] bg-gradient-to-r from-[#93A5F7] via-[#F9F7FC] to-[#93A5F7] bg-clip-text">
            Who We Are
          </p>
          <img src="/icons/star.png" className="w-[24px]" alt="Epic" />
        </div>
        <div className="max-w-[520px] text-[#B3B6BA] md:text-[#F9F7FCCC] text-center md:text-start text-[16px]">
          Epic Global is a world-leading brand accelerator that helps businesses expand across Amazon, Walmart,
          TikTok Shop, and other global marketplaces. We specialize in AI-driven optimization, marketplace management, and long-term brand success—at zero cost to you.
        </div>
      </div>
    </div>
  );
}
