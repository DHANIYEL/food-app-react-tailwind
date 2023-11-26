import React from "react";
import { data } from "../data/data.js";
import { useState } from "react";
const FoodsCategory = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((Items) => {
        return Items.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((Items) => {
        return Items.price === price;
      })
    );
  };

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
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chickens
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between flex-wrap max-w-[390px]">
            <button
              onClick={() => filterPrice("$")}
              className="m-1m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-orange-600 m-1 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display Foods (Maping Items) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        {foods.map((Items, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 hover:duration-300"
          >
            <img
              src={Items.image}
              alt={Items.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold ">{Items.name}</p>
              <p>
                <span className="bg-orange-600 text-white p-1 rounded-full">
                  {Items.price}
                </span>
              </p>
            </div>
            {/* <p>{Items.category}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodsCategory;
