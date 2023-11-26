import React from "react";

const HeadLineCards = () => {
  return (
    <div className="mx-auto max-w-[1640px] py-12 p-4 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="relative rounded-xl">
        {/* overlay */}
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="px-2 pt-4 font-bold text-2xl ">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="relative rounded-xl">
        {/* overlay */}
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="px-2 pt-4 font-bold text-2xl ">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/6223226/pexels-photo-6223226.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
      </div>
      <div className="relative rounded-xl">
        {/* overlay */}
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="px-2 pt-4 font-bold text-2xl ">
            We Deliver Dessert Too
          </p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
