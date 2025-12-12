import React from "react";

const ReadList = ({ read }) => {
  // console.log(read);
  const {
    image,
    author,
    bookId,
    bookName,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = read;
  return (
    <div className=" card card-side bg-base-100 shadow-sm border border-gray-300">
      <figure className="">
        <img src={image} className=" w-96 h-96 object-cover" alt={bookName} />
      </figure>

      <div className="ml-9 py-8">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author} </p>
        {/* tags */}

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <span className="font-bold font-sans">Tags: </span>
          {tags.map((tag, index) => (
            <button className="color-primary btn font-sans" key={index}>
              #{tag}
            </button>
          ))}
        </div>
        <div className="flex gap-16 mt-8">
          <span> Publisher {publisher}</span>
          <span>Page {totalPages}</span>
        </div>
        {/* buttons */}
        <div className="card-actions justify-end items-end pt-32">
          <button className="btn btn-primary">{category}</button>
          <button className="btn btn-primary">{rating}</button>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
