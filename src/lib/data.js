export const getAllBooks = async () => {
  const res = await fetch(`https://assignment-8-server1111.onrender.com/books`);
  return res.json();
};
