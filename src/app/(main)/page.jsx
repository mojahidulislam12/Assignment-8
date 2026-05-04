import BookCard from "@/components/HomePage/BookCard";
import { getAllBooks } from "@/lib/data";
import AllBooks from "./books/page";
import BookCount from "@/components/HomePage/BookCount";
import BorrowBook from "@/components/HomePage/BorrowBook";

export default async function Home() {
  const books = await getAllBooks();
  //onsole.log(books);
  return (
    <div className="max-w-300 mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-2 -ml-0.5 md:ml-0 -mr-0.5 md:mr-0">
        {books.slice(0, 4).map((book, i) => (
          <BookCard key={i} book={book}></BookCard>
        ))}
        {/* <AllBooks></AllBooks> */}
      </div>
      <BookCount></BookCount>
      <BorrowBook></BorrowBook>
    </div>
  );
}
