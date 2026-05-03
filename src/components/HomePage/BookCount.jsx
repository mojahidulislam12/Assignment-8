import { getAllBooks } from "@/lib/data";
import React from "react";

const BookCount = async () => {
  const books = await getAllBooks();

  return (
    <div className="max-w-300 mx-auto mt-8 flex justify-evenly items-center bg-slate-100 h-[40vh]">
      <div>
        <h1 className="font-bold text-3xl">Total Books</h1>
        <p className="font-semibold text-2xl text-center">{books.length}</p>
      </div>
    </div>
  );
};

export default BookCount;
