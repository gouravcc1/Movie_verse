import useFetch from "./useFetch";
import "./load.css";
import "./Search.css";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Search() {
  const { name } = useParams();
  const { movie, panding } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${name}&page=1&include_adult=false`
  );
  const arr1 = [];
  for (let index = 0; index < movie.length; index++) {
    if (movie[index].poster_path != null) {
      arr1.push(movie[index]);
    }
  }
console.log(name);
  const arr = arr1.map((old) => (
    <MovieCard
      key={old.id}
      id={old.id}
      Src={"https://image.tmdb.org/t/p/w500/" + old.poster_path}
      ssc={old.poster_path}
      title={old.title}
      api="popular"
    />
  ));
  console.log(movie);
  return (
    <div className="SSearch">
      {panding && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      {/* {name==='' && <div>type movie name</div>} */}
      {!panding && arr}
      {arr.length === 0 && (
        <div className="notfound">
          <h1 className="animate">No movie Found</h1>
        </div>
      )}
    </div>
  );
}
