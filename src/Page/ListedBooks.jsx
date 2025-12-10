import React from "react";
import { Link, Outlet } from "react-router";
import Tabs from "../Components/Tabs";

const ListedBooks = () => {
  return (
    <div className="mt-4">
      <div className="navbar justify-center bg-[#f3f3f3] rounded-md shadow-sm font-sans font-bold">
        <h2 className="text-center">Books</h2>
      </div>

      {/* tab index */}
      <Tabs />
      <Outlet />
    </div>
  );
};

export default ListedBooks;
