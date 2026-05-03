export const getAllBooks = async () => {
  const res = await fetch("http://localhost:5000/books", {
    cache: "no-store",
  });
  return res.json();
};
