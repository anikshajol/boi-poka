import React, { useState } from "react";
import { Link } from "react-router";

const Tabs = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div
      className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap mt-8 dark:bg-gray-100 dark:text-gray-800"
      bis_skin_checked="1"
    >
      <Link
        onClick={() => setIndex(0)}
        className={`flex items-center shrink-0 px-5 py-3 space-x-2  ${
          index === 0
            ? "border border-b-0 border-green-500"
            : "border-b border-green-500"
        } dark:border-gray-600 dark:text-gray-600 rounded-t-lg `}
      >
        <span>Read Books</span>
      </Link>

      <Link
        onClick={() => setIndex(1)}
        className={`flex items-center shrink-0 px-5 py-3 space-x-2 ${
          index === 1
            ? "border border-b-0 border-green-500"
            : "border-b border-green-500"
        } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
      >
        <span>Wishlist</span>
      </Link>
    </div>
  );
};

export default Tabs;
