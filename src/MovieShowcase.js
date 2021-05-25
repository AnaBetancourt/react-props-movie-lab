import React from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends React.Component {

  generateMovieCards = () => {
    return movieData.map((collection, index) => <MovieCard 
      key={index}
      title={collection.title} 
      IMDBRating={collection.IMDBRating}
      genres={collection.genres}
      poster={collection.poster}
      />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
