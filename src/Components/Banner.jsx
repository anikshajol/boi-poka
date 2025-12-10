import React from "react";
import banner from "../assets/books.png";
const Banner = () => {
  return (
    <div className="bg-[#f3f3f3] rounded-xl mt-10  ">
      {/* heading and button section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row pl-16 items-center">
        <section className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl text-black md:text-5xl mb-6 font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-[#23be0a] text-white font-semibold p-4 rounded-md">
            View The List
          </button>
        </section>
        {/* image section */}
        <section>
          <img
            src={banner}
            alt="books"
            className="object-contain "
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
