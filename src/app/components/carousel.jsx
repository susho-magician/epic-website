'use client'
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = [
    { id: 0, title: "Card 1", color: "bg-blue-500" },
    { id: 1, title: "Card 2", color: "bg-green-500" },
    { id: 2, title: "Card 3", color: "bg-purple-500" },
    { id: 3, title: "Card 4", color: "bg-red-500" },
    { id: 4, title: "Card 5", color: "bg-yellow-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (itemIndex) => {
    const position = (itemIndex - activeIndex + items.length) % items.length;
    if (position > 1) {
      return position - items.length;
    } else if (position > 1 + items.length / 2) {
      return position - items.length;
    }
    return position;
  };

  return (
    <div className="relative w-full h-max overflow-hidden md:h-[85vh] flex flex-col items-center justify-center p-4">
      <div className="relative w-[725px] h-96 overflow-visible">
        <div className="relative h-full mx-auto">
          {items.map((item) => {
            const position = getPosition(item.id);
            if (position >= -1 && position <= 1) {
              return (
                <div
                  key={item.id}
                  className={`absolute w-[330px] md:w-[620px] h-[350px] transition-all duration-500 flex items-center justify-center text-white text-2xl font-bold rounded-lg`}
                  style={{
                    left: position === -1 ? "-575px" : position === 0 ? "50%" : "auto",
                    right: position === 1 ? "-575px" : "auto",
                    transform:
                      position === -1
                        ? "translateX(-75px) translateY(-75px) perspective(1200000px) rotateZ(15deg)"
                        : position === 0
                        ? "translate(-50%, 0)"
                        : "translateX(75px) translateY(-75px) perspective(1200000px) rotateZ(-15deg)",
                    transformOrigin: position === 0 ? "center" : "bottom",
                    opacity: position === 0 ? 1 : 0.8,
                    zIndex: position === 0 ? 30 : 10,
                  }}
                >
                  <img src={`/Carousel1.png`} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
