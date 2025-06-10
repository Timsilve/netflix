import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Movie({ item }) {
  const [likes, setLikes] = useState(false);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] inline-block lg:w-[240px] cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute hover:bg-black/80 top-0 left-0 w-full h-full opacity-0 duration-200 ease-in  delay-75 hover:opacity-100 text-white transition-all transform-d">
        <p className="whitespace-normal text-xs md:text-sm font-bold justify-center flex items-center h-full text-center">
          {item?.title}
        </p>
        <p>
          {likes ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;
