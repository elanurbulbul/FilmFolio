import React, { useEffect, useState } from "react";

const Films = () => {
  const [movieList, setMovieList] = useState([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=caf0f1e593b52bdbc2ca284e307ccbc3"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {movieList.map((movie) => (
        <img
          key={movie.id}
           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
     
      ))}
      0
    </div>
  );
};
export default Films;
