import BookCard from "@/components/HomePage/BookCard";
import { getAllBooks } from "@/lib/data";
import AllBooks from "./books/page";

export default async function Home() {
  const books = await getAllBooks();
  //onsole.log(books);
  return (
    <div className="max-w-300 mx-auto">
      <div className="grid grid-cols-4 mt-8">
        {books.slice(0, 4).map((book, i) => (
          <BookCard key={i} book={book}></BookCard>
        ))}
        {/* <AllBooks></AllBooks> */}
      </div>
    </div>
  );
}
