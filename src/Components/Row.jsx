import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
function Row({ title, fetchUrl, rowID }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const slideleft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideright = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideleft}
          className="bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="overflow-x-scroll  h-full w-full whitespace-nowrap scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideright}
          className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
