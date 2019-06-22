import React from 'react';

const Movies = (props) => {
  const { title, year, genre, poster, rate } = props;
  return (
    <div>
      <figure>
        <img src={poster} alt={title} />
      </figure>
      <header>
        <h3>{title}, {year}</h3>
      </header>
      <div className="movieinfo">
        <div> <span className="ratingbox"> {rate} </span>IMDB </div> 
        <p>| {genre}</p>
      </div>
    </div>
  )

}

export default Movies;