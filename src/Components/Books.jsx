import React from "react";
import { useLoaderData } from "react-router";

const Books = () => {
  const books = useLoaderData();
  console.log(books);

  return (
    <div>
      <h2 className="text-center pt-16 pb-12 text-3xl font-bold">Books</h2>
      <div></div>
    </div>
  );
};

export default Books;
