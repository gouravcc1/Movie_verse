// import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./Popular.css";
import Scroll from "./Scroll";
import useFetch from "./useFetch";
import "./load.css"
export default function Popular() {
  const { movie, panding } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );
  console.log(movie);

  const arr = movie.map((old) => (
    <MovieCard
      className="pseudo-item"
      key={old.id}
      id={old.id}
      Src={"https://image.tmdb.org/t/p/w500/" + old.poster_path}
      ssc={old.poster_path}
      title={old.title}
      api="popular"
    />
  ));
  return (
    <div >
      {panding && (
        <div className = "loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {!panding && 
        <div>
        <Scroll nme="Popular" arr={arr} />
    </div>
      }
      </div>
  );
}
