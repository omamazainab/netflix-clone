import React, { useState, useEffect } from "react";
import { fetchMovies, MovieType } from "../API/api";
import { baseImgUrl } from "../API/request";
import {truncateString} from '../utils/utils'
import '../styles/banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function api() {
      const result = await fetchMovies(MovieType.NETFLIXORIGINALS.url);
      setMovie(
        result.results[Math.floor(Math.random() * result.results.length - 1)]
      );
    }
    api();
  }, []);


  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${baseImgUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize:'cover'
      }}
    >
      <div className="banner-container">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
            {truncateString(movie?.overview,200)}
        </h1>
      </div>
      <div className="banner-fade-bottom">
          
      </div>
    </header>
  );
};

export default Banner;
