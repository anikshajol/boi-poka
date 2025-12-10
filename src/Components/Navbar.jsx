import { MdOutlineMenu } from "react-icons/md";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const handleAddToTheme = () => {
    // const theme = localStorage.getItem("theme");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const navList = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "btn border border-[#23be0a] font-sans" : "font-sans"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn border border-[#23be0a] font-sans" : " font-sans"
          }
          to={"/listed-books"}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn border border-[#23be0a] font-sans" : " font-sans"
          }
          to={"/read-pages"}
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  w-[90%] mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdOutlineMenu size={30} />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <a className="text-[28px] font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px ]">{navList}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-c-primary">Sign in</a>
        <a className="btn ml-3 bg-c-secondary">Sign up</a>
      </div>
      <button onClick={handleAddToTheme} className="cursor-pointer">
        {theme === "dark" ? (
          <FaToggleOn size={30} className="ml-3" />
        ) : (
          <FaToggleOff size={30} className="ml-3" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
