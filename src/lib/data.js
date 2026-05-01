export const getAllBooks = async () => {
  const res = await fetch("http://localhost:5000/books", {
    next: { revalidate: 20 },
  });
  return res.json();
};

// export const getBookDetails = async (book_id) => {
//   const res = await fetch(`http://localhost:5000/books/${book_id}`);
//   return res.json();
// };
