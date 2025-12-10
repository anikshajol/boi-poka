import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ book }) => {
  //   console.log(book);

  const { image, author, bookId, bookName, category, rating, tags } = book;
  return (
    <Link
      to={`book-details/${bookId}`}
      className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900"
      bis_skin_checked="1"
    >
      <figure className="bg-[#f3f3f3] rounded-md ">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-2/3 m-auto p-4 rounded-md h-72 dark:bg-gray-500"
        />
      </figure>

      <div className="mt-6 mb-2" bis_skin_checked="1">
        <div className="flex justify-between mb-4">
          {" "}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="block text-xs text-[#23be0a] font-medium tracking-widest uppercase dark:text-violet-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-semibold tracking-wide">{bookName}</h2>
        <p className="pt-3">By: {author}</p>
      </div>
      <div className="border-b border-dashed opacity-30 w-full"></div>
      <div className="dark:text-gray-800 flex justify-between mt-4 font-sans">
        {/* category */}
        <span className="text-sm">{category}</span>
        <span className="flex items-center gap-2 text-sm">
          {rating} <FaStar size={15} />
        </span>
      </div>
    </Link>
  );
};

export default Book;
