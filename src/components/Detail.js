import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const [movie, setMovie] = useState();
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
  //   const tags=[];
  //    if(movie.genres){  tags=movie.genres.map((old) => (
  //       <h3 className="tagg">old.name</h3>
  //     ))
  //    }
  console.log(movie);
  //   console.log(movie.genres);
  return (
    <div className="Detail">
      {panding && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {
        !panding && (
          <div className="moviedetail">
            <div>
              <img
                className="Posterimg"
                src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
                alt="jjj"
              />
            </div>
            <h1 className="title">{movie.title}</h1>
            {/* <h5 className="title">{movie.tagline}</h5> */}
            <div className="overview">
              <h3>Overview</h3>
              <h3 className="overviewd">{movie.overview}</h3>
            </div>
            <div className="lenth">
              <h3>lenth</h3>
              <h3 className="lenthd">
                {Math.floor(movie.runtime / 60) +
                  "h:" +
                  (movie.runtime % 60) +
                  "m"}
              </h3>
            </div>
            <div className="vote">
              <h3>popularity</h3>
              <div className="progressbar">
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={66}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                  //   repeat
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                        styles={buildStyles({ pathTransition: "none" })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>{" "}
              </div>
            </div>
            {/* {movie.genres && <div>{tags}</div>} */}
          </div>
        )
        // <div className="moviedeatailcard">
        //   <div className="imgdiv">
        //
        //   </div>
        //   <h1>{movie.title}</h1>
        //   <h3>{movie.status}</h3>
        //   <h3>
        //     {Math.floor(movie.runtime / 60) + "h:" + (movie.runtime % 60) + "m"}
        //   </h3>
        // </div>
      }
    </div>
  );
}
