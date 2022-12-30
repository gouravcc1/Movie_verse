import React from "react";
import MovieCard from "./MovieCard";
import Scroll from "./Scroll";
import useFetch from "./useFetch";
import "./load.css";
export default function TopRated() {
  const { movie, panding } = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );
  const arr = movie.map((old) => (
    <MovieCard
      className="pseudo-item"
      key={old.id}
      id={old.id}
      Src={"https://image.tmdb.org/t/p/w500/" + old.poster_path}
      title={old.title}
      api="top_rated"
    />
  ));
  return (
    <div>
      {panding && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {!panding && <Scroll nme="Top Rated" arr={arr} />}
    </div>
  );
}
