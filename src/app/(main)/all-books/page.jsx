import BookCard from "@/components/HomePage/BookCard";

import { getAllBooks } from "@/lib/data";
import React from "react";

const AllBooksPage = async () => {
  const books = await getAllBooks();

  return (
    <div className="max-w-300 mx-auto">
      <h1 className="font-bold text-2xl ml-4 md:ml-0 ">All Books</h1>
      <form
        className="mt-4 ml-4 md:ml-0 mr-4 md:mr-0"
        action="/all-books"
        method="GET"
      >
        <input
          type="text"
          name="search"
          placeholder="Search books..."
          className="border px-3 py-2 rounded w-full md:w-1/2"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-black text-white rounded"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-2 -ml-0.5 md:ml-0 -mr-0.5 md:mr-0">
        {books.map((book, i) => (
          <BookCard key={i} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
