import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto p-4 max-w-[1640px]">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/50 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods </span>Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/6660065/pexels-photo-6660065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default Hero;