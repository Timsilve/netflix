import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "../request";

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(request.requestPopular)
      .then((response) => setMovies(response.data.results));
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const truncate = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute bg-gradient-to-r from-black w-full h-[550px]"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
        <div className="my-4">
          <button className=" border bg-gray-300 px-5 py-3 text-black">
            play
          </button>
          <button className=" border border-gray-300 px-5 py-3 text-white ml-4">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm ">
          Released: {movie?.release_date}
        </p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {truncate(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
}

export default Main;
