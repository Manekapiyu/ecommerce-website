import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";


const Navbar = () => {
  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-300 dark:text-white ">
      {/* upper Navbar */}
      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <a href="#" className="flex gap-2 text-2xl font-bold text-black sm:text-3xl">
            <img src={Logo} alt="Logo" className="w-10" />
            ShopStar
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
        <button
        onClick={() => alert ("ordering not avaliable yet")}
         className="flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary/90 to-secondary group">
          <span className="hidden transition-all duration-200 group-hover:block">Order</span>
        <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm"/>
        </button>
        {/*darkmood btn */}
        <div>
         <DarkMode/>
        </div>
      </div>
      </div>
     

      {/* lower Navbar */}
      <div></div>
     </div>
  );
};

export default Navbar;
