import React, { useEffect, useState } from "react";
import { fetchMovies } from "../API/api";
import { baseImgUrl } from "../API/request";
import "../styles/row.css";

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function api() {
      const result = await fetchMovies(url);
      setMovies(result.results);
    }
    api();
  }, [url]);

  console.table(movies);
  return (
    <div className="row">
      <h3 className="movie-type-heading">{title}</h3>
      <div className="movie-posters-slider">
        {movies.map((movie) => {
          return (
            <img
            key={movie.id}
              className="movie-poster"
              src={`${baseImgUrl}${movie.poster_path}`}
              alt={movie.title}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
