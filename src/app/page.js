"use client";
import Carousel from "./components/carousel";
import StackingCards from "./components/stackingCards";
import { useState } from "react";
import QuoteGrid from "./components/testimonialCard";
import ContactForm from "./components/contactForm";
import EpicGlobalFooter from "./components/footer";
import LandingSection from "./components/landingSection";
import WhoWeAre from "./components/whoWeAre";

export default function Home() {
  const tabs = [
    { id: 1, title: "PYVIT", content: "Content for PYVIT" },
    { id: 2, title: "EG Parcel", content: "Content for EG Parcel" },
    { id: 3, title: "Pigeon Slip", content: "Content for Pigeon Ship" },
    { id: 4, title: "Epic Global", content: "Content for Epic Global" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="h-screen w-full">
      <LandingSection />
      <div>
        <Carousel />
      </div>
      <div className="bg-[#F7F9FC] py-[16px]">
        <div className="flex h-[50px] items-center justify-end gap-3 p-[6px] rounded-[12px] ps-[20px] w-max mx-auto bg-[linear-gradient(91.34deg,#2342CC_0.01%,#0A259D_100.01%),radial-gradient(142.39%_1113.97%_at_32.52%_41.25%,#5E7BFE_0%,#2342CE_100%)]">
          <div className="text-[#F9F7FC] text-[16px] font-[600]">Unlock Your Brand&apos;s Growth</div>
          <button className="py-[2px] px-[20px] rounded-[100px] bg-[#F9F7FC] text-[#0A259D] text-[14px] font-[600] h-full">
            <div className="flex items-center gap-2">
              Let&apos;s Talk
              <img src="/icons/rightArrow.png" alt="arrow" className="w-[5px]" />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-[url('/cardBackground.png')] bg-no-repeat bg-[#F7F9FC] flex flex-col md:flex-row justify-between px-[16px] md:px-[80px] pt-[30px] md:pt-[70px]">
        <div className="mx-[16px] md:mx-0">
          <div className="text-[#374151] font-[500] text-[20px] md:text-[40px] mb-[16px] max-w-[500px] text-center md:text-start">End-to-End eCommerce Management Services</div>
          <button className="md:flex hidden items-center h-[38px] gap-3 p-[6px] rounded-[100px] ps-[20px] mb-[40px] bg-[linear-gradient(91.34deg,#2342CC_0.01%,#0A259D_100.01%),radial-gradient(142.39%_1113.97%_at_32.52%_41.25%,#5E7BFE_0%,#2342CE_100%)]">
            <div className="flex items-center gap-2">
              Partner With Us
              <img src="/icons/rightArrowWhite.png" alt="arrow" className="w-[20px]" />
            </div>
          </button>
        </div>
        <div>
          <StackingCards />
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#161B21] bg-[url('/epicGlobalBackground.png')] bg-cover bg-center py-[40px] px-[16px] md:px-[80px]">
        <p className="max-w-[600px] text-center line mx-auto text-transparent text-[20px] md:text-[40px] font-normal mt-[18px] md:mt-[36px] bg-gradient-to-r from-[#93A5F7] via-[#F9F7FC] to-[#93A5F7] bg-clip-text">
          Why Choose Epic Global?
        </p>
        <div className="max-w-[600px] mx-auto text-[#F7F9FCB2] text-[14px] md:text-[16px] text-center mb-[24px]">
          Empowering brands with infinite growth potential through global eCommerce expansion,
          AI-driven insights, and strategic marketplace management.
        </div>
        <button className="mb-[60px] flex items-center h-[38px] gap-3 p-[6px] rounded-[100px] ps-[20px] mb-[40px] bg-[linear-gradient(91.34deg,#2342CC_0.01%,#0A259D_100.01%),radial-gradient(142.39%_1113.97%_at_32.52%_41.25%,#5E7BFE_0%,#2342CE_100%)]">
          <div className="flex items-center gap-2">
            Partner With Us
            <img src="/icons/rightArrowWhite.png" alt="arrow" className="w-[20px]" />
          </div>
        </button>
        <div>
          <div className="md:flex hidden gap-4">
            <div style={{
              border: "1.5px solid",
              borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
            }} className="backdrop-blur-[31.4px] bg-[#EBEBE129] rounded-[24px] p-6 text-white w-1/4">
              <h2 className="md:text-[32px] text-[20px] font-[500] mb-2">No Fees,<br />No Risk</h2>
              <p className="text-[#F7F9FC]">We buy your product upfront and handle everything.</p>
            </div>
            <div style={{
              border: "1.5px solid",
              borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
            }} className="backdrop-blur-[31.4px] bg-[#EBEBE129] flex justify-between rounded-[24px] text-white w-1/2">
              <div className="p-6">
                <h2 className="md:text-[32px] text-[20px] font-[500] mb-2">Global<br />Expansion</h2>
                <p className="text-[#F7F9FC]">Selling in 47+ countries across 30+ platforms.</p>
              </div>
              <div className="flex items-end">
                <img src="/globe.png" alt="Globe" className="w-[180px]" style={{ borderRadius: "0 0 24px 0px" }} />
              </div>
            </div>
            <div style={{
              border: "1.5px solid",
              borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
            }} className="backdrop-blur-[31.4px] bg-[#EBEBE129] rounded-[24px] p-6 text-white w-1/4">
              <h2 className="text-[32px] font-[500] mb-2">AI-Driven<br />Insights</h2>
              <p className="text-[#F7F9FC]">Proprietary tools to optimize and scale.</p>
            </div>
          </div>
          <div className="flex md:hidden gap-4">
            <div style={{
              border: "1.5px solid",
              borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
            }} className="backdrop-blur-[31.4px] bg-[#EBEBE129] rounded-[24px] p-6 text-white w-1/2">
              <h2 className="md:text-[32px] text-[20px] font-[500] mb-2">No Fees,<br />No Risk</h2>
              <p className="text-[#F7F9FCCC] text-[12px] md:text-[14px]">We buy your product upfront and handle everything.</p>
            </div>
            <div style={{
              border: "1.5px solid",
              borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
            }} className="backdrop-blur-[31.4px] bg-[#EBEBE129] rounded-[24px] p-6 text-white w-1/2">
              <h2 className="md:text-[32px] text-[20px] font-[500] mb-2">AI-Driven<br />Insights</h2>
              <p className="text-[#F7F9FCCC] text-[12px] md:text-[14px]">Proprietary tools to optimize and scale.</p>
            </div>
          </div>
          <div className="flex flex-col md:hidden md:flex-row gap-4 mt-4">
            <div style={{
              border: "1.5px solid",
              borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
            }} className="backdrop-blur-[31.4px] bg-[#EBEBE129] flex justify-between rounded-[24px] text-white">
              <div className="p-6">
                <h2 className="md:text-[32px] text-[20px] font-[500] mb-2">Global Expansion</h2>
                <p className="text-[#F7F9FCCC] text-[12px] md:text-[14px]">Selling in 47+ countries across 30+ platforms.</p>
              </div>
              <div className="flex items-end">
                <img src="/globe.png" alt="Globe" className="w-[180px]" style={{ borderRadius: "0 0 24px 0px" }} />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div style={{
              border: "1.5px solid",
              borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
            }} className="backdrop-blur-[31.4px] bg-[#EBEBE129] rounded-[24px] p-6 text-white w-full md:w-3/5 flex justify-between items-end">
              <div>
                <h2 className="md:text-[32px] text-[20px] font-[500] mb-2">End-to-End<br />eCommerce Solutions</h2>
                <p className="text-[#F7F9FCCC] text-[12px] md:text-[14px]">We do it all: listings, ads, fulfillment, brand protection.</p>
              </div>
              <div className="flex items-center justify-center mt-4">
                <img src="/ecommerce.png" alt="Shopping Cart" className="w-[140px] object-cover" />
              </div>
            </div>
            <div style={{
              border: "1.5px solid",
              borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
            }} className="backdrop-blur-[31.4px] bg-[#EBEBE129] rounded-[24px] p-6 text-white w-full md:w-2/5 flex justify-between items-nter">
              <div>
                <h2 className="md:text-[32px] text-[20px] font-[500] mb-2">Long-Term<br />Partnership</h2>
                <p className="text-[#F7F9FCCC] text-[12px] md:text-[14px]">Your success is our success.</p>
              </div>
              <div className="flex items-center justify-center mt-4">
                <img src="/partnership.png" alt="Shopping Cart" className="w-[160px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F9FC] flex flex-col items-center py-[40px] px-[16px] md:px-[80px] bg-[url('/solutionsBackground.png')] bg-cover bg-center">
        <div className="text-[#374151] font-[500] text-[20px] text-center md:text-start md:text-[40px] mb-[32px]">End-to-End eCommerce Management Solutions</div>
        <div className="w-full mx-auto">
          <div className="flex justify-start md:justify-center mb-4 overflow-scroll md:overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                style={{
                  border: "1.5px solid",
                  borderImageSource: "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)"
                }}
                className={`px-4 py-[2px] mx-2 rounded-[100px] cursor-pointer min-w-max md:w-[180px] h-[38px] ${activeTab === tab.id ? "bg-[linear-gradient(0deg,#2342CE,#2342CE),radial-gradient(142.39%_1113.97%_at_32.52%_41.25%,#5E7BFE_0%,#2342CE_100%)] text-[#F7F9FC]" : "text-[#2342CE]"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="p-4 bg-white rounded shadow h-[500px]">
            {tabs.find((tab) => tab.id === activeTab).content}
          </div>
        </div>
      </div>
      <WhoWeAre />
      <div className="text-center bg-[radial-gradient(142.39%_1113.97%_at_32.52%_41.25%,_#5E7BFE_0%,_#2342CE_100%)]">
        <div className="bg-[url('/brandSuccessBackground.png')] py-[40px] px-[16px] md:px-[80px] bg-cover bg-end bg-no-repeat">
          <div className="text-[#F7F9FC] text-[20px] md:text-[40px] mb-[48px]">See How We&apos;ve Helped Brands Succeed</div>
          <QuoteGrid />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <ContactForm />
      </div>
      <EpicGlobalFooter />
    </div>
  );
}
