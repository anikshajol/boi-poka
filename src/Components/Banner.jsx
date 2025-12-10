import React from "react";
import banner from "../assets/books.png";
const Banner = () => {
  return (
    <div className="bg-[#f3f3f3] rounded-xl mt-10  ">
      {/* heading and button section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:pl-16 pl-0 items-center">
        <section className="md:w-1/2  text-center md:text-left">
          <h1 className="text-3xl text-black md:text-5xl mb-6 font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-[#23be0a] text-white font-semibold p-4 rounded-md">
            View The List
          </button>
        </section>
        {/* image section */}
        <section className=" ">
          <img
            src={banner}
            alt="books"
            className="object-cover w-full max-w-96 md:max-w-fit "
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
