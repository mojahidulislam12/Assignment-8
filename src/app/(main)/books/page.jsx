import BookCard from "@/components/HomePage/BookCard";
import { getAllBooks } from "@/lib/data";

const AllBooks = async () => {
  const books = await getAllBooks();
  return (
    <div className="max-w-300 mx-auto">
      <div className="grid grid-cols-4">
        {books.slice(0, 4).map((book, i) => (
          <BookCard key={i} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
