"use client";
import React, { useEffect, useRef, useState } from "react";

const StackingpageshomeCard = ({ title, description2, index }) => {
  const [cardHeight, setCardHeight] = useState("300px"); // Default height

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 1536) {
        setCardHeight("580px"); // 2xl screens
      } else if (window.innerWidth >= 1024) {
        setCardHeight("500px"); // Large screens
      } else if (window.innerWidth >= 768) {
        setCardHeight("350px"); // Medium screens
      } else {
        setCardHeight("440px"); // Small screens
      }
    };

    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight); // Update height on resize

    return () => window.removeEventListener("resize", updateHeight); // Clean up listener
  }, []);

  return (
    <div
      className="sticky flex justify-center"
      style={{ top: `${index + 1}px`, opacity: 1, width: "100%" }}
    >
      <div
        style={{
          border: "1px solid",
          borderImageSource:
            "linear-gradient(91.34deg, rgba(106, 132, 247, 0.806) 0.01%, rgba(255, 255, 255, 0.3) 53.91%, #C6FE95 100.01%)",
        }}
        className="p-5 w-[470px] backdrop-blur-[31.4px] shadow-[0px_0px_18px_0px_#161B2114] rounded-[14px] transition-all duration-300 text-white origin-top bg-[#EBEBE133]"
      >
        <div
          className="justify-around md:flex-row items-center md:gap-12 w-full md:mb-12"
          style={{ top: `${index + 1 * 10}px` }}
        >
          <p
            style={{background: "linear-gradient(0deg, #374151, #374151), radial-gradient(142.39% 1113.97% at 32.52% 41.25%, #5E7BFE 0%, #2342CE 100%)",
              backgroundClip: "text",
            }}
            className="text-transparent line font-normal text-[24px] font-[500]"
          >
           <span className="text-[30px]"> {index + 1} </span> {title}
          </p>
          <div className="text-[#11151AB2] text-[16px] mt-3">
            {description2}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsContainer = ({ cards }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".sticky");
      const data = {
        Location: {},
        ToReduceBy: {},
      };

      cards.forEach((card, index) => {
        const stickyTop = parseInt(window.getComputedStyle(card).top);
        const currentTop = card.getBoundingClientRect().top - 200;
        data.Location[index] = currentTop - stickyTop;
        data.ToReduceBy[index] = 0;
      });

      for (let i = 0; i < cards.length; i++) {
        if (data.Location[i] <= 20) {
          for (let j = i; j > -1; j--) {
            data.ToReduceBy[j]++;
          }
        }
      }

      cards.forEach((card, index) => {
        const innerCard = card.firstElementChild;
        innerCard.style.transform = `scale(${
          1 - data.ToReduceBy[index] * 0.1
        })`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="flex  flex-col items-center justify-center"
      ref={containerRef}
    >
      {cards.map((card, index) => (
        <StackingpageshomeCard key={index} {...card} index={index} />
      ))}
    </div>
  );
};

const StackingCards = () => {
  const cardsData = [
    {
      title: "Marketplace Management",
      description2: "Amazon, Walmart, TikTok, eBay, Mercado Libre, and more",
      index: 1,
    },
    {
      title: "Inventory & Fulfillment Management",
      description2: "Efficient logistics, demand forecasting.",
      index: 2,
    },
    {
      title: "AI-Powered Analytics",
      description2:
        "Real-time insights, competitor monitoring, growth forecasting.",
      index: 3,
    },
    {
      title: "Brand Protection & Compliance",
      description2:
        "MAP enforcement, counterfeit detection, unauthorized sellers.",
      index: 4,
    },
    {
      title: "Product Listing Optimization",
      description2: "A+ Content, SEO, and conversion optimization.",
      index: 5,
    },
    {
      title: "Off-Platform Marketing",
      description2:
        "Amazon attribution, referral bonuses, influencer collaborations",
      index: 6,
    },
    {
      title: "Advertising & Performance Marketing",
      description2: "AI-driven ad strategies, Amazon PPC, social ads.",
      index: 7,
    },
  ];

  return (
    <div className="w-full py-3">
      <CardsContainer cards={cardsData} />
    </div>
  );
};

export default StackingCards;
