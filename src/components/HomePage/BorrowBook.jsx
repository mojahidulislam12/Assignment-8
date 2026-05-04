import Link from "next/link";
import React from "react";

const BorrowBook = () => {
  return (
    <div className="max-w-300 mx-auto mt-8 flex justify-evenly items-center bg-base-200 h-[40vh] ml-4 md:ml-0 mr-4 md:mr-0 rounded-md">
      <div>
        <button className="btn btn-outline btn-success font-bold text-2xl">
          <Link href={"/RegisterBook"}>Borrow Book</Link>
        </button>
      </div>
    </div>
  );
};

export default BorrowBook;
