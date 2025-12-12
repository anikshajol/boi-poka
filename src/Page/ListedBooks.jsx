import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import Tabs from "../Components/Tabs";

const ListedBooks = () => {
  const [sort, setSort] = useState("");

  return (
    <div className="mt-4">
      <div className="navbar justify-center bg-[#f3f3f3] rounded-md shadow-sm font-sans font-bold">
        <h2 className="text-center">Books</h2>
      </div>

      {/* sort  */}
      <div className="flex justify-center">
        <details className="dropdown mt-6 ">
          <summary className="btn bg-c-primary  font-semibold m-1">
            Sort By
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => setSort("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => setSort("pages")}>Number Of Pages</a>
            </li>
            <li>
              <a onClick={() => setSort("year")}>Publish Year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* tab index */}
      <Tabs />
      <Outlet context={{ sort }} />
    </div>
  );
};

export default ListedBooks;
