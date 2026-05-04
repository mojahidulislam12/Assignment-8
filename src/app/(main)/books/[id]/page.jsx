import { getAllBooks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const booksId = await getAllBooks();
  console.log(booksId, id);
  const books = booksId.filter((book) => book.id === id);
  console.log(books);
  return (
    <div className="max-w-300 mx-auto mt-8">
      <div>
        {books.map((b, i) => (
          <div
            key={i}
            className=" flex-row md:flex card-side bg-base-100 shadow-sm"
          >
            <figure className="p-4">
              <Image src={b.image_url} width={200} height={120} alt="" />
            </figure>
            <div className="card-body ml:0 md:ml-20 mt-0 md:mt-20">
              <h2 className="font-semibold text-3xl">
                Book Name:{" "}
                <span className="font-semibold text-2xl">{b.title}</span>
              </h2>
              <h2 className="font-semibold text-3xl">
                Author:{" "}
                <span className="font-semibold text-2xl"> {b.author}</span>
              </h2>
              <h2 className="font-semibold text-3xl">
                Category:{" "}
                <span className="font-semibold text-2xl">
                  {b.category}
                </span>{" "}
              </h2>
              <h2 className="font-semibold text-2xl">
                Available Quantity:
                <span className="font-semibold text-3xl">
                  {" "}
                  {b.available_quantity}
                </span>
              </h2>
              <p className="font-semibold text-2xl">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
