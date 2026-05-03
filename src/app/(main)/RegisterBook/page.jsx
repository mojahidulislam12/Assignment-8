import React from "react";

const RegistrationBook = () => {
  return (
    <div className="max-w-300 mx-auto min-h-[50vh] flex justify-center items-center ">
      <div className="p-4 w-120  rounded-xl bg-white">
        <form className="space-y-4">
          <fieldset className="fieldset">
            <label className="label font-semibold text-xl text-black">
              Book Name
            </label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your book name..."
            />
            <label className="label font-semibold text-xl text-black">
              Author Name
            </label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your author name..."
            />
            <label className="label font-semibold text-xl text-black">
              Category
            </label>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter your category name..."
            />
            <label className="label font-semibold text-xl text-black">
              Quantity
            </label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your quantity..."
            />

            <button className="btn btn-neutral mt-4 w-full">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegistrationBook;
