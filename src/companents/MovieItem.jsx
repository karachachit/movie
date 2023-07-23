import React, { useState } from "react";
import { DUMMY_MOVIES } from "./MovieList";

const MovieItemList = () => {
  const [movieList, setMovieList] = useState(DUMMY_MOVIES);
  const deleteHandler = (id) => {
    const updatedMovieList = movieList.filter((movie) => movie.id !== id);
    setMovieList(updatedMovieList);
  };
  return (
    <div className="movie-item">
      {movieList.map((item) => (
        <div key={item.id} className="movie-name">
          <img src={item.image} alt={item.title} width={200} height={150} />
          <div>
            <p className="title">{item.title}</p>
            <div className="">
              <button className="btn-one">{item.rating}/5 start</button>
              <button
                className="btn-two"
                onClick={() => deleteHandler(item.id)}
              >
                DELETE
              </button>
              <button className="btn-thrie">EDIT</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieItemList;
