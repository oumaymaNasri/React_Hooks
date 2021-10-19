import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

const MoviesList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="addConatiner">
        <div className="add">
          <input type="submit" onClick={handleShow} value="Add new movie" />
        </div>
        <AddMovie addMovie={addMovie} show={show} handleClose={handleClose} />
        <div className="movies">
        {movies.map((el) => ( 
          <MovieCard movie={el} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MoviesList;
