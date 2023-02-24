import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black ">
      <div className="flex mr-5 py-5">
        <div className="font-bold text-xl  text-white ml-5 ">
          <h1>Search</h1>
        </div>

        <div className="  flex ml-96 items-center">
          <h1 className="font-bold text-2xl text-white  ">
            lonely planet
          </h1>
        </div>
        <div className="flex text-xl text-white space-x-10 items-center font-semibold  ml-32 ">
          <h1 >Destinations</h1>
          <h1 >Stories</h1>
          <h1 >Shop</h1>
          <button className="bg-white rounded-2xl px-4 py-1 text-black font-bold cursor-pointer hover:bg-blue-400">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
