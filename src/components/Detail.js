import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactImageAppear from "react-image-appear";

import "./Detail.css";
import "./load.css";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";
export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    genres: [{ name: "hii" }],
  });
  const [panding, setPanding] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setPanding(false);
      });
  }, [id]);
  console.log(movie);
  const items = [
    "fadeIn",
    "fadeInUp",
    "fadeInRight",
    "fadeInDown",
    "fadeInLeft",
    "bounceIn",
    "bounceInUp",
    "bounceInRight",
    "bounceInDown",
    "bounceInLeft",
    "flipInX",
    "flipInY",
    "zoomIn",
    "blurIn",
    "blurInUp",
    "blurInRight",
    "blurInDown",
    "blurInLeft",
    "fillIn",
  ];
  const gnr = movie.genres.map((old) => {
    return (
      <button key={old.id} className="sts ss">
        {" "}
        {old.name}
      </button>
    );
  });
  return (
    <div className="Detail">
      {panding && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {!panding && (
        // <div className="moviedetail">
        //   <div>
        //     <ReactImageAppear
        //       className="Posterimg"
        //       src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
        //       animation={items[Math.floor(Math.random()*items.length)]}
        //       animationDuration="1s"
        //     />
        //   </div>

        <div className="DeailCard">
          <img
            className="Posterimg"
            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          />
          <div  className="dataofmovie">
            <h1 className="title">{movie.title}</h1>
            <p className="Tagline">{movie.tagline}</p>

            <div className="vote">
              <div className="progressbar">
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={Math.floor(movie.vote_average * 10)}
                  duration={3}
                  easingFunction={easeQuadInOut}
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        styles={buildStyles({ pathTransition: "none" })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>{" "}
              </div>
              <div className="votig">
                <h2>User Score</h2>
                <h3>({movie.vote_count} Votes)</h3>
              </div>
            </div>

            <div className="status">
              <button className="sts">{movie.status}</button>
              <ul>
                <li>
                  {Math.floor(movie.runtime / 60) +
                    "h " +
                    (movie.runtime % 60) +
                    "m"}
                </li>
              </ul>
            </div>

            <div className="gns">
              {gnr}
              {/* <button className="sts ss"> {movie.genres[0].name}</button>
               <button className="sts ss"> {movie.genres[1].name}</button> */}
              {/* <button className="sts ss"> {movie.genres[2].name}</button> */}
            </div>
            <div className="links">
              <a href={movie.homepage}><button className="sts lli">WEBLINK</button></a>
              <a href={"https://www.imdb.com/title/"+movie.imdb_id}><button className="sts lli">IMDB</button></a>
            </div>
            <div className="over">{movie.overview}</div>
          </div>
        </div>
      )}
    </div>
  );
}
