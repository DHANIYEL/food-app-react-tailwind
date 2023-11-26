import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

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
      {/* Cart  */}
      <button className="flex items-center gap-1.5 bg-black text-white py-2 rounded-full hidden md:flex">
        <BsFillCartFill size={20} />
        Cart
      </button>
      {/* mobile menu  */}
      {/* overlay */}

      <div className="backdrop-filter backdrop-blur-sm bg-opacity-50 fixed z-10 w-full h-screen left-0 top-0"></div>
      {/* side rower */}
      <div className="backdrop-filter backdrop-blur-xl bg-opacity-50 h-screen w-[300px] z-10 top-0 left-0 fixed duration-300 shadow-md">
        <AiOutlineClose size={30} className="absolute top-4 right-4" />
        <h2 className="text-2xl p-4">
          Best<span className="font-bold">Eats</span>
        </h2>
        <ul className="flex flex-col p-4 text-gray-800">
          <li className="flex p-4 text-xl">
            <TbTruckDelivery size={30} className="mr-4" />
            Orders
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
