import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      {/* upper Navbar */}
      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
            <img src={Logo} alt="Logo" className="w-10" />
            Shopsy
          </a>
       

        {/* search bar and order bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative hidden group sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 pl-4 pr-10 py-1 focus:outline-none focus:border-1 focus:border-primary"
            />
            <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
          </div>
        </div>
      </div>
      </div>
     

      {/* lower Navbar */}
      <div></div>
     </div>
  );
};

export default Navbar;
