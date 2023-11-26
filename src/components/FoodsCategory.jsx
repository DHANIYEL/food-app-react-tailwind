import React from "react";
import { data } from "../data/data.js";
const FoodsCategory = () => {
  return (
    <div className="px-4 py-12 max-h-[1640px] mx-auto ">
      <h1>Top Rated Menu Items</h1>
      {/* filter row */}
      <div>
        {/* filter type */}
        <div>
          <p>Filter Type</p>
          <button>All</button>
          <button>Burger</button>
          <button>Pizza</button>
          <button>Salads</button>
          <button>Chickens</button>
        </div>
        {/* filter price */}
        <div>
          <p>Filter Price</p>
          <button>$</button>
          <button>$$</button>
          <button>$$$</button>
          <button>$$$$</button>
        </div>
      </div>
    </div>
  );
};

export default FoodsCategory;
