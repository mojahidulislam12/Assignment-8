import React from "react";
import Marquee from "react-fast-marquee";
const books = [
  {
    id: "1",
    text: "New Arrivals: Grokking Algorithms, Second Edition",
  },
  {
    id: "2",
    text: "New Arrivals: Deep Learning with Python, Third Edition",
  },
  {
    id: "3",
    text: "New Arrivals: Software Architecture with C# 14 and .NET 10",
  },
];
const BreakingNews = () => {
  return (
    <div>
      <div className="max-w-300 mx-auto p-4 bg-white flex justify-between items-center mt-7.5">
        <button className="btn bg-[#D72050] text-white -ml-5">Latest</button>
        <Marquee className="gap-10" pauseOnHover={true}>
          {books.map((book, i) => (
            <span className="ml-5" key={i}>
              {" "}
              {book.text}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
