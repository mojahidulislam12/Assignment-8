// export const generateStaticParams = async () => {
//   const res = await fetch("http://localhost:5000/books", {
//     cache: "force-cache",
//   });
//   const books = await res.json();

//   return books.slice(1, 12).map((book) => ({ bookId: book.id }));
// };

// const bookDetails = async ({ params }) => {
//   const { id } = await params;
//   const res = await fetch(`http://localhost:5000/books/${id}`, {
//     cache: "force-cache",
//   });
//   const { title, author, description } = await res.json();
//   console.log(id);
//   return <div>Book Details:{title}</div>;
// };

// export default bookDetails;
import React from "react";

const BookDetails = () => {
  return <div className="max-w-300 mx-auto">Book Details</div>;
};

export default BookDetails;
