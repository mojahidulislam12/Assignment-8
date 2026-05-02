import BookCard from "@/components/HomePage/BookCard";
import { getAllBooks } from "@/lib/data";
import React from "react";

const AllBooksPage = async () => {
  const books = await getAllBooks();
  return (
    <div className="max-w-300 mx-auto">
      <h1 className="font-bold text-2xl">All Books</h1>
      <div className="grid grid-cols-4 max-w-300 mx-auto gap-5 mt-8">
        {books.map((book, i) => (
          <BookCard key={i} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
