import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl cursor-pointer font-bold">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4 cursor-pointer">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
