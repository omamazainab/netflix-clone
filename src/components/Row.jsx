import React, { useEffect, useState } from "react";
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

import { fetchMovies } from "../API/api";
import { baseImgUrl } from "../API/request";
import "../styles/row.css";

const Row = ({ title, url, isLargeRow }) => {

  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState('');

  useEffect(() => {
    async function api() {
      const result = await fetchMovies(url);
      setMovies(result.results);
    }
    api();
  }, [url]);

  const opts = {
    height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
  }

  const handleClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl('')
    }else {
      movieTrailer( movie?.title || movie?.name || movie?.original_name || '' )
      .then( (url)=>{
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'))
         
      } )
      .catch( (error)=>{
        console.log(error)
      } )

    }
  }
  
  return (
    <div className="row">
      <h3 className="movie-type-heading">{title}</h3>
      <div className="movie-posters-slider">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={()=>{handleClick(movie)}}
              className={`movie-poster ${isLargeRow ? 'large-poster' : ''}`}
              src={`${baseImgUrl}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.title}
            />
          );
        })}
      </div>
      {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
};

export default Row;
