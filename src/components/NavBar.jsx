import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  return (
    <div className="m-w-[1680] mx-auto flex justify-between items-center p-4">
      {/* nav left side  */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl p-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full">
          <p className="bg-black p-2 rounded-full text-white">Delivery</p>
          <p className="p-2">Pickup </p>
        </div>
      </div>
      {/* nav right side */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200] sm:w-[400px] lg:[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" focus:outline-none p-2 w-full bg-transparent"
          type="text"
          placeholder="Search foods"
        />
      </div>
    </div>
  );
}

export default NavBar;
