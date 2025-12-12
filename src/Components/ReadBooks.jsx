import React, { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utilities/localstorage";
import { useLoaderData, useOutletContext } from "react-router";
import ReadList from "./ReadList";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const books = useLoaderData();
  const { sort } = useOutletContext();
  const sortedBooks = [...books];
  console.log([...books]);

  if (sort === "rating") {
    sortedBooks.sort((a, b) => b.rating - a.rating);
  }
  if (sort === "pages") {
    sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
  }
  if (sort === "year") {
    sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  }

  useEffect(() => {
    const fetch = async () => {
      const stored = await getFromLocalStorage("read-list");
      // console.log(stored);
      setReadBooks(stored);
    };
    fetch();
  }, []);
  console.log(readBooks);
  console.log(books);

  const bookReads = books.filter((book) =>
    readBooks.includes(Number(book.bookId))
  );

  console.log(bookReads);
  return (
    <div className="flex flex-col gap-8 mt-10">
      {sortedBooks.map((read) => (
        <ReadList key={read.bookId} read={read} />
      ))}
    </div>
  );
};

export default ReadBooks;
