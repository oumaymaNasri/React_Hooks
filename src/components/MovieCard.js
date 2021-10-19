import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  return (
    <div classname="movie">
    <div>
        <a href={movie.title} target="{'_blank'}">
        <img alt={movie.title} src={movie.urlPoster} classname="poster" /> 
        </a>
    </div>
    <h2>{movie.title}</h2>
    <p>({movie.year})</p>
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
    />
    </div>
  );
};

export default MovieCard;
