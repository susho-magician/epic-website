import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const EpicGlobalFooter = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <footer className="bg-[#161B21] text-white py-12 px-[16px] md:px-[80px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[24px] text-[#FFFFFF] font-[600] mb-2">
                EPIC GLOBAL
              </h2>
              <p className="text-[#FFFFFF]">
                Fuel your brand's growth and success with us.
              </p>
            </div>
            <div className="block md:hidden">
              <div className="space-y-1 border-t border-gray-800">
                {/* Contact Us Section */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => toggleSection("contact")}
                    className="w-full py-4 flex justify-between items-center"
                  >
                    <span className="text-lg">Contact us on</span>
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        openSection === "contact" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSection === "contact" && (
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <img
                          src="/icons/mail.png"
                          alt="epic"
                          className="mr-2 w-[16px]"
                        />
                        <a
                          href="mailto:epicglobal@gmail.com"
                          className="text-gray-300 hover:text-white"
                        >
                          epicglobal@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center mb-3">
                        <img
                          src="/icons/mobile.png"
                          alt="epic"
                          className="mr-2 w-[16px]"
                        />
                        <a
                          href="tel:+919876543211"
                          className="text-gray-300 hover:text-white"
                        >
                          +91 9876543211
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Services Section */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => toggleSection("services")}
                    className="w-full py-4 flex justify-between items-center"
                  >
                    <span className="text-lg">Services</span>
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        openSection === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSection === "services" && (
                    <div className="pb-4">
                      <ul className="space-y-2 flex flex-wrap mb-2">
                        <li className="flex items-center">
                          <span>Marketplace Management</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mx-2">•</span>
                          <span>Advertising & Performance Marketing</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mx-2">•</span>
                          <span>AI-Powered Analytics</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 flex flex-wrap mb-2">
                        <li className="flex items-center">
                          <span>Brand Protection & Compliance</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mx-2">•</span>
                          <span>Product Listing Optimization</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mx-2">•</span>
                          <span>Off-Platform Marketing</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 flex flex-wrap mb-2">
                        <li className="flex items-center">
                          <span>Inventory & Fulfilment Management</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Product Section */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => toggleSection("product")}
                    className="w-full py-4 flex justify-between items-center"
                  >
                    <span className="text-lg">Product</span>
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        openSection === "product" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSection === "product" && (
                    <div className="pb-4">
                      <ul className="flex space-x-4">
                        <li className="flex items-center">
                          <span>PYVIT</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          <span>EG Parcel</span>
                        </li>
                        <li className="flex items-center">
                          <span className="mr-2">•</span>
                          <span>Pigeon Ship</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 hidden md:block">
              <h3 className="text-[18px] font-[600] mb-2">Contact us on</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <img
                    src="/icons/mail.png"
                    alt="epic"
                    className="mr-2 w-[16px]"
                  />
                  <a
                    href="mailto:epicglobal@gmail.com"
                    className="text-gray-300 hover:text-white"
                  >
                    epicglobal@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    src="/icons/mobile.png"
                    alt="epic"
                    className="mr-2 w-[16px]"
                  />
                  <a
                    href="tel:+919876543211"
                    className="text-gray-300 hover:text-white"
                  >
                    +91 9876543211
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8 hidden md:block">
            <div>
              <h3 className="text-[18px] font-[600] mb-4">Services</h3>
              <ul className="space-y-2 flex flex-wrap mb-2">
                <li className="flex items-center">
                  <span>Marketplace Management</span>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">•</span>
                  <span>Advertising & Performance Marketing</span>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">•</span>
                  <span>AI-Powered Analytics</span>
                </li>
              </ul>
              <ul className="space-y-2 flex flex-wrap mb-2">
                <li className="flex items-center">
                  <span>Brand Protection & Compliance</span>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">•</span>
                  <span>Product Listing Optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">•</span>
                  <span>Off-Platform Marketing</span>
                </li>
              </ul>
              <ul className="space-y-2 flex flex-wrap mb-2">
                <li className="flex items-center">
                  <span>Inventory & Fulfilment Management</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] font-[600] mb-4">Product</h3>
              <ul className="flex space-x-4">
                <li className="flex items-center">
                  <span>PYVIT</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>EG Parcel</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Pigeon Ship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-3 md:mt-12 pt-6 border-t border-gray-800 flex flex-wrap flex-row justify-between items-start md:items-center">
          <a href="/privacy" className="text-[F7F9FC]">
            Privacy Policy
          </a>
          <a href="/terms" className="text-[F7F9FC] mt-2 md:mt-0">
            Terms & Conditions
          </a>
          <p className="text-[F7F9FC] mt-2 md:mt-0">© Epic</p>
        </div>
      </div>
    </footer>
  );
};

export default EpicGlobalFooter;
