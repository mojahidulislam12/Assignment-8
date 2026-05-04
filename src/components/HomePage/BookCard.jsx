import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  const { id } = book;
  return (
    <div>
      <div className="card h-120 bg-base-100  shadow-sm">
        <figure className=" pt-5">
          <Image src={book.image_url} width={250} height={200} alt="" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{book.title}</h2>
          <h2 className="card-title">{book.category}</h2>
          <p>{book.author}</p>
          <div className="card-actions">
            <button className="btn btn-primary">
              <Link href={`/books/${id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
