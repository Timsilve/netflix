import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="overflow-x-scroll h-full w-full whitespace-nowrap scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
