import React from "react";
import { useLoaderData } from "react-router";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  console.log(bookDetails);

  return <div></div>;
};

export default BookDetails;
