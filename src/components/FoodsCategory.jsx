import React from "react";
import { data } from "../data/data.js";
const FoodsCategory = () => {
  return (
    <div className="px-4 py-12 max-h-[1640px] mx-auto ">
      <h1 className="font-bold text-4xl text-orange-600 text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burger
            </button>
            <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chickens
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between flex-wrap max-w-[390px]">
            <button className="m-1m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodsCategory;
