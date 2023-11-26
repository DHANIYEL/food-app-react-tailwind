import React from "react";
import { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

function NavBar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="m-w-[1680] mx-auto flex justify-between items-center p-4">
      {/* nav left side  */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl p-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full cursor-pointer">
          <p className="bg-black py-2 px-3 rounded-full text-white">Delivery</p>
          <p className="py-2 px-3">Pickup </p>
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
      <button className="items-center gap-1.5 bg-black text-white py-2 rounded-full hidden md:flex">
        <BsFillCartFill size={20} />
        Cart
      </button>
      {/* mobile menu  */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/75 fixed z-10 w-full h-screen left-0 top-0"></div>
      ) : (
        ""
      )}
      {/* side rower */}
      <div
        className={
          nav
            ? "bg-white h-screen w-[300px] z-10 top-0 left-0 fixed duration-300 shadow-md"
            : "bg-white h-screen w-[300px] z-10 top-0 left-[-100%] fixed duration-500 shadow-md"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute top-4 right-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best<span className="font-bold">Eats</span>
        </h2>
        <ul className="flex flex-col p-4 text-gray-800 cursor-pointer">
          <li className="flex p-4 text-xl ">
            <TbTruckDelivery size={30} className="mr-4" />
            Orders
          </li>
          <li className="flex p-4 text-xl">
            <MdFavorite size={30} className="mr-4" />
            Favorites
          </li>
          <li className="flex p-4 text-xl">
            <FaWallet size={30} className="mr-4" />
            Wallet
          </li>
          <li className="flex p-4 text-xl">
            <MdHelp size={30} className="mr-4" />
            Help
          </li>
          <li className="flex p-4 text-xl">
            <AiFillTag size={30} className="mr-4" />
            Promotions
          </li>
          <li className="flex p-4 text-xl">
            <BsFillSaveFill size={30} className="mr-4" />
            Best One
          </li>
          <li className="flex p-4 text-xl">
            <FaUserFriends size={30} className="mr-4" />
            Invite Friends
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
