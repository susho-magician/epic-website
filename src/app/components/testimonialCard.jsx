import React from "react";

const QuoteCard = ({ quote, author, index }) => (
  <div
    style={{ textWrap: "wrap" }}
    className={`bg-[#F7F9FC] flex ${
      index === 1 ? "flex-col" : "flex-col-reverse"
    } min-w-[330px] rounded-[12px] p-[20px] backdrop-filter: blur(31.399999618530273px)`}
  >
    <div className="flex-1">
      <img src="/icons/apos.png" alt="epic" className="w-[27px] mb-3" />
      <p className="text-[#374151] text-start my-2">{quote}</p>
    </div>
    <div className="my-2 flex items-center">
      <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
        <img src="/icons/user.png" alt="epic" className="w-[24px]" />
      </div>
      <span className="text-gray-500">{author}</span>
    </div>
  </div>
);

const QuoteGrid = () => {
  const quotes = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      author: "Anonymous",
      index: 1,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      author: "Anonymous",
      index: 2,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      author: "Anonymous",
      index: 1,
    },
  ];

  return (
    <div className="container mx-auto pb-[275px] w-full">
      <div
        className="w-full overflow-x-auto whitespace-nowrap flex md:grid md:overflow-hidden md:grid-cols-3 gap-3 md:gap-6"
        style={{ scrollbar: "hidden" }}
      >
        {quotes.map((quote, index) => (
          <QuoteCard
            key={index}
            quote={quote.quote}
            author={quote.author}
            index={quote.index}
          />
        ))}
      </div>
    </div>
  );
};

export default QuoteGrid;
