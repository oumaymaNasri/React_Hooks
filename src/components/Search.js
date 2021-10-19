import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const Search = ({search, searchRate, newRate}) => {
  const [rating, setRating] = useState(1)

  const onStarClick=(nextValue, prevValue, name)=> {
    searchRate(nextValue);
  }
  return (
    <div className="searchContainer">
      <form className="search">
        <input
          onChange={(e)=>search(e.target.value)}
          type="text"
          placeholder="Find some movies"
        />
        
      </form>
      <div className="rating">
      <StarRatingComponent 
          size={25} 
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
        />
      </div>
    </div>
  );
};

export default Search;
