import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];



const Navbar = () => {
  const handleOrderClick = () => {
    console.log("Order button clicked!");
 
  };

  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      {/* Upper Navbar */}
      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-2xl font-bold sm:text-3xl"
          >
            <img src={Logo} alt="Logo" className="w-10" />
            Shopsy
          </a>

          {/* Search + Actions */}
          <div className="flex items-center justify-between gap-4">
            {/* Search bar */}
            <div className="relative hidden sm:block group">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 group-hover:text-primary" />
            </div>

            {/* Order button */}
            <button
              onClick={handleOrderClick}
              className="flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group"
            >
              <span className="hidden transition-all duration-200 group-hover:block">
                Order
              </span>
              <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
            </button>

            {/* Dark Mode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="items-center hidden sm:flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 duration-200 hover:text-primary">
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

