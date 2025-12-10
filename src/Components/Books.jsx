import React from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Books = () => {
  const books = useLoaderData();

  return (
    <div className="mb-12">
      <h2 className="text-center pt-16 pb-12 text-3xl font-bold">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
