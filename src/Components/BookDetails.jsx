import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToLocalStorage } from "../Utilities/localstorage";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  // const [readList, setReadList] = useState([]);
  //   console.log(bookDetails);
  const { id } = useParams();
  //   console.log(id);
  const details = bookDetails.find((detail) => detail.bookId == id);
  const {
    image,
    author,
    bookName,
    category,
    publisher,
    rating,
    review,
    tags,
    bookId,
    totalPages,
    yearOfPublishing,
  } = details;

  const handleAddToReadList = (id) => {
    // console.log(id, "readlist");
    addToLocalStorage("read-list", id);
    // getFromLocalStorage("readList");
  };
  // console.log(readList);

  // const addToWishList = () => {
  //   console.log("Wishlist");
  // };

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 ">
      <div
        className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
        bis_skin_checked="1"
      >
        {/* books image */}
        <div
          className="w-full p-4 lg:p-0 bg-gray-100 rounded-2xl flex justify-center items-center"
          bis_skin_checked="1"
        >
          <figure className="flex justify-center">
            <img
              src={image}
              alt={bookName}
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </figure>
        </div>

        {/* books details */}
        <div
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          bis_skin_checked="1"
        >
          <h1 className="text-3xl text-center md:text-left font-bold leading-none sm:text-6xl">
            {bookName}
          </h1>
          {/* author name */}
          <span className="py-3 font-sans">By: {author}</span>
          {/* border */}
          <div className="w-full border-t border-gray-300"></div>
          <span className="py-4 font-sans">{category}</span>
          {/* border */}
          <div className="w-full border-t border-gray-300"></div>

          {/* review details */}
          <p className="mt-6 mb-8 text-lg sm:mb-4 font-sans">
            <span className="font-bold ">Review</span>{" "}
            <span className="font-sans">{review}</span>
          </p>
          {/* tags */}

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <span className="font-bold font-sans">Tags: </span>
            {tags.map((tag, index) => (
              <button className="color-primary btn font-sans" key={index}>
                #{tag}
              </button>
            ))}
          </div>
          {/* border */}
          <div className="w-full border-t border-gray-300 my-8"></div>

          {/*  */}
          <table className="mb-8">
            <tbody>
              {/* number of pages */}
              <tr className="font-sans mb-8">
                <td className="font-light text-gray-500">Number Of Pages</td>
                <td className="ml-10">{totalPages}</td>
              </tr>
              {/* publisher */}
              <tr className="font-sans mb-8">
                <td className="font-light text-gray-500">Publisher</td>
                <td className="ml-10">{publisher}</td>
              </tr>
              {/* year of publishing */}
              <tr className=" font-sans mb-8">
                <td className="font-light text-gray-500">Year of Publishing</td>
                <td className="ml-10">{yearOfPublishing}</td>
              </tr>
              {/* rating */}
              <tr className="font-sans ">
                <td className="font-light text-gray-500"> Rating</td>
                <td className="ml-10">{rating}</td>
              </tr>
            </tbody>
          </table>

          {/* buttons */}
          <div
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start font-sans"
            bis_skin_checked="1"
          >
            {/* read list button */}
            <button
              onClick={() => handleAddToReadList(bookId)}
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 cursor-pointer"
            >
              Read
            </button>

            {/* wishlist button */}
            <button className="px-8 py-3 text-lg font-semibold bg-c-secondary border rounded dark:border-gray-800 cursor-pointer">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
